import type { Vector3 } from "@nativewrappers/common";
import type { QBPlayer } from "../shared/player";

export declare interface QBServerFunctions {
  GetEntityCoords: (entity: number) => Vector3;
  GetPlayer: (source: number) => QBPlayer;
  GetPlayerByCitizenId: (citizenid: string) => QBPlayer;
  GetOfflinePlayerByCitizenId: (citizenid: string) => QBPlayer;
  GetPlayerByPhone: (number: number) => QBPlayer;
  GetQBPlayers: () => { [key: number]: QBPlayer };
  GetDutyCount: (job: string) => number;
  GetPlayersOnDuty: (job: string) => [number[], number];
  GetBucketObjects: () => unknown;
  SetPlayerBucket: (source: number, bucket: number) => boolean;
  SetEntityBucket: (entity: number, bucket: number) => boolean;
  GetPlayersInBucket: (bucket: number) => number[] | boolean;
  GetEntitiesInBucket: (bucket: number) => number[] | boolean;
  CreateUseableItem: (item: string, data: (source: number, item: unknown) => void) => void;
  CreateCallback: (event: string, args: (source: number, cb: (result: unknown) => void, ...args: never) => void) => void;
  CanUseItem: (item: string) => unknown;
  IsWhitelisted: (source: number) => boolean;
  AddPermission: (source: number, permission: string) => void;
  RemovePermission: (source: number, permission: string) => void;
  HasPermission: (source: number, permission: string) => void;
  IsOptin: (source: number) => boolean;
  ToggleOptin: (source: number) => void;
  IsPlayerBanned: (source: number) => [boolean, string | null];
  Notify: (source: number, text: string, textype?: string, length?: number, icon?: string) => void;
  GetCoreVersion: (InvokingResource: string) => string;
}
