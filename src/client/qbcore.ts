import type { QBClientFunctions } from "@/client/functions";
import type { QBConfig } from "@/shared/config";
import type { QBPlayerData } from "@/shared/player";
import type { QBCoreShared } from "@/shared/qbcore";

export declare interface QBCoreClient {
  Shared: QBCoreShared;
  Functions: QBClientFunctions;
  PlayerData: QBPlayerData;
  RequestId: number;
  Config: QBConfig;
  ServerCallbacks: {
    [key: string]: (...args: unknown[]) => void;
  };
  Debug: (obj: object | Array<unknown>, indent?: number) => void;
}
