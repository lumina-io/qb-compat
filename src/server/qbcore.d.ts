import type { QBConfig } from "../shared/config";
import type { QBPlayer, QBPlayerFunctions } from "../shared/player";
import type { QBCoreShared } from "../shared/qbcore";
import type { QBCommands } from "./commands";
import type { QBServerFunctions } from "./functions";
import type { QBUseableItem } from "./items";

export declare interface QBCoreServer {
  Shared: QBCoreShared;
  Functions: QBServerFunctions;
  Players: QBPlayer[];
  Commands: QBCommands;
  UseableItems: QBUseableItem[];
  Config: QBConfig;
  Player: QBPlayerFunctions;
  ServerCallbacks: {
    [key: string]: (...args: unknown[]) => void;
  };
  Debug: (obj: object | Array<unknown>, indent?: number) => void;
}
