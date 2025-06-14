import esbuild from "esbuild";
import { writeFile, copyFile, readdir } from "node:fs/promises";
import { extname } from "node:path";
import { copy as copyDir } from "fs-extra";
import repoPackage from "./package.json" with { type: "json" };
import { replaceTscAliasPaths } from "tsc-alias";

const packageTemplate = {
  author: repoPackage.author,
  contributors: repoPackage.contributors,
  license: repoPackage.license,
  type: repoPackage.type,
  version: repoPackage.version,
  repository: repoPackage.repository,
  bugs: repoPackage.bugs,
  homepage: repoPackage.homepage,
  keywords: repoPackage.keywords,
  files: repoPackage.files,
  sideEffects: false,
  exports: {
    ".": "./index.js",
    "./*": "./*",
  },
};

async function generateIndex(dir) {
  const files = await readdir(dir, {
    recursive: true,
  });

  const exports = files
    .filter((file) => file !== "index.js" && extname(file) === ".js")
    .map((file) => `export * from "./${file.replace(/\\/g, "/").slice(0, -3)}";`)
    .join("\n");

  return [writeFile(`${dir}/index.js`, exports), writeFile(`${dir}/index.d.ts`, exports)];
}

/**
 * Creates a build process using esbuild.
 * @param {{ name: string; title: string, options?: esbuild.BuildOptions }[]} environments
 */
async function createBuilder(environments) {
  const watch = process.argv.includes("--watch");

  await Promise.all(
    environments.map(async ({ name, options }) => {
      options = {
        entryPoints: [`./src/${name}/**/*.ts`],
        keepNames: true,
        legalComments: "inline",
        // bundle: true,
        treeShaking: true,
        format: "esm",
        outdir: `./lib/${name}`,
        minify: false,
        color: true,
        logLevel: "info",
        ...options,
        plugins: [
          {
            name: "build",
            setup(build) {
              build.onEnd(async (result) => {
                if (result.errors.length === 0) {
                  console.log(`Successfully built @qb-compat/${name}`);
                }
              });
            },
          },
        ],
        dropLabels: [...(options?.dropLabels ?? [])],
      };

      if (watch) {
        options.dropLabels.push("$DEBUG");
      }

      const ctx = await esbuild.context(options).catch((err) => {
        console.error(err);
        process.exit(1);
      });
      return watch ? ctx.watch() : ctx.rebuild();
    }),
  );

  for (const { name, title } of environments) {
    const outDir = `./lib/${name}/`;

    await replaceTscAliasPaths({ outDir });
    await Promise.all([
      ...(await generateIndex(outDir)),
      copyFile("README.md", `./lib/${name}/README.md`),
      writeFile(
        `./lib/${name}/package.json`,
        JSON.stringify(
          {
            name: `@qb-compat/${name}`,
            ...packageTemplate,
          },
          null,
          2,
        ),
      ),
    ]);
  }

  if (!watch) process.exit(0);
}

createBuilder([
  {
    name: "server",
    title: "server",
    options: {
      dropLabels: ["$CLIENT"],
    },
  },
  {
    name: "client",
    title: "client",
    options: {
      dropLabels: ["$SERVER"],
    },
  },
    {
    name: "shared",
    title: "shared",
    options: {
      dropLabels: [],
    },
  },
]);