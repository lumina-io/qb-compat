import type { Vector3 } from "@nativewrappers/common";
import type { QBPlayerData } from "../shared/player";
import type { QBVehicleProperties } from "./vehicle";

export declare interface QBClientFunctions {
  GetPlayerData: (cb?: () => QBPlayerData) => QBPlayerData;
  DrawText: (
    x: number,
    y: number,
    width: number,
    height: number,
    scale: number,
    r: number,
    g: number,
    b: number,
    a: number,
    text: string,
  ) => void;
  DrawText3D: (x: number, y: number, z: number, text: string) => void;
  CreateBlip: (
    coords: Vector3,
    sprite: number,
    display: number,
    scale: number,
    colour: number,
    shortRange: boolean,
    name: string,
  ) => void;
  RequestAnimDict: (animDict: string) => void;
  GetCoords: (entity: number) => Vector3;
  SpawnVehicle: (model: string, cb: () => number, coords?: Vector3, isnetworked?: boolean) => void;
  DeleteVehicle: (vehicle: number) => void;
  Notify: (text: string, textype?: string, length?: number, icon?: string) => void;
  CreateClientCallback: (name: string, cb: () => number) => void;
  TriggerCallback: (name: string, cb: (...args: unknown[]) => void, ...args: unknown[]) => void;
  GetVehicles: () => number[];
  GetPeds: (ignoreList?: number[]) => number[];
  GetClosestVehicle: (coords?: Vector3) => [number, number];
  GetClosestPed: (coords?: Vector3, ignoreList?: number[]) => [number, number];
  GetClosestPlayer: (coords?: Vector3) => [number, number];
  GetClosestObject: (coords?: Vector3) => [number, number];
  GetClosestBone: (entity: number, list: number[]) => [number, Vector3, number];
  GetBoneDistance: (entity: number, Type: number, Bone: number | string) => number;
  GetPlayersFromCoords: (coords: Vector3, distance: number) => number[];
  HasItem: (items: string | string[], amount?: number) => boolean;
  Progressbar: (
    name: string,
    label: string,
    duration: number,
    useWhileDead: boolean,
    canCancel: boolean,
    disableControls: {
      disableMovement: boolean;
      disableCarMovement: boolean;
      disableMouse: boolean;
      disableCombat: boolean;
    },
    animation: {
      animDict?: string;
      anim?: string;
      flags?: number;
      task?: number;
    },
    prop: {
      model?: string;
      bone?: number;
      coords?: { x: number; y: number; z: number };
      rotation?: { x: number; y: number; z: number };
    },
    propTwo: {
      model?: string;
      bone?: number;
      coords?: { x: number; y: number; z: number };
      rotation?: { x: number; y: number; z: number };
    },
    onFinish: () => void,
    onCancel: () => void,
  ) => void;
  GetPlate: (vehicle: number) => string | null;
  SpawnClear: (coords: Vector3, radius: number) => boolean;
  GetVehicleProperties: (vehicle: number) => QBVehicleProperties | null;
  SetVehicleProperties: (vehicle: number, props: QBVehicleProperties) => void;
}
