import type { QBCommands } from "@/server/commands";
import type { QBServerFunctions } from "@/server/functions";
import type { QBUseableItem } from "@/server/items";
import type { QBConfig } from "@/shared/config";
import type { QBPlayer, QBPlayerFunctions } from "@/shared/player";
import type { QBCoreShared } from "@/shared/qbcore";

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
