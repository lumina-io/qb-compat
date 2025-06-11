import type { QBCoreClient } from "./qbcore";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export const QBCore: QBCoreClient = exports["qb-core"].GetCoreObject();
