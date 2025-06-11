import type { QBCoreServer } from "./qbcore";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export const QBCore: QBCoreServer = exports["qb-core"].GetCoreObject();
