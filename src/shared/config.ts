import type { Vector4 } from "@nativewrappers/fivem";

export declare interface QBPlayerConfig {
  MaxWeight: number;
  BloodTypes: string;
  MaxInvSlots: number;
  HungerRate: number;
  ThirstRate: number;
}

export declare interface QBMoneyConfig {
  PayCheckTimeOut: number;
  DontAllowMinus: string[];
  MoneyTypes: {
    [key: string]: number;
  };
}

export declare interface QBServerConfig {
  uptime: number;
  whitelist: boolean;
  closed: boolean;
  PermissionList: unknown;
  closedReason: string;
  discord: string;
}

export declare interface QBConfig {
  DefaultSpawn: Vector4;
  MaxPlayers: number;
  Player: QBPlayerConfig;
  Money: QBMoneyConfig;
  Server: QBServerConfig;
}
