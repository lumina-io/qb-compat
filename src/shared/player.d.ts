export type QBMoneyType = "cash" | "bank" | "crypto";

export type QBMoney = {
  cash: number;
  bank: number;
  crypto: number;
};

export declare interface QBPlayerJob {
  name: string;
  label: string;
  payment: number;
  type?: string;
  onduty: boolean;
  isboss: boolean;
  grade: { name: string; level: number };
}

export declare interface QBPlayerGang {
  name: string;
  label: string;
  isboss: boolean;
  grade: { name: string; level: number };
}

export declare interface QBPlayerMetadata {
  health: number;
  armor: number;
  hunger: number;
  thirst: number;
  stress: number;
  isdead: boolean;
  inlaststand: boolean;
  ishandcuffed: boolean;
  tracker: boolean;
  injail: number;
  jailitems: Record<string, unknown>;
  status: Record<string, unknown>;
  phone: { background: unknown; profilepicture: unknown };
  bloodtype: string;
  dealerrep: number;
  craftingrep: number;
  attachmentcraftingrep: number;
  currentapartment?: number;
  callsign: string;
  fingerprint: string;
  walletid: string;
  criminalrecord: { hasRecord: boolean; date?: unknown };
  licences: { id: boolean; driver: boolean; weapon: boolean };
  inside: {
    house?: unknown;
    apartment: { apartmentType?: unknown; apartmentId?: number };
  };
  phonedata: { SerialNumber: string; InstalledApps: unknown };
  [key: string]: unknown;
}

export declare interface QBPlayerFunctions {
  UpdatePlayerData: () => void;
  SetJob: (job: string, grade: number) => boolean;
  SetGang: (gang: string, grade: number) => boolean;
  SetJobDuty: (onDuty: boolean) => void;
  SetPlayerData: (key: string, val: unknown) => void;
  SetMetaData: (meta: string, val: unknown) => void;
  GetMetaData: (meta: string) => unknown;
  AddJobReputation: (amount: number) => void;
  AddMoney: (moneyType: QBMoneyType, amount: number, reason?: string) => boolean;
  RemoveMoney: (moneyType: QBMoneyType, amount: number, reason?: string) => boolean;
  SetMoney: (moneyType: QBMoneyType, amount: number, reason?: string) => boolean;
  GetMoney: (moneyType: QBMoneyType) => boolean | number;
  SetCreditCard: (cardNumber: number) => void;
  Save: () => void;
  Logout: () => void;
  SetInventory: (inventory: unknown, bool: boolean) => void;

  AddItem: (item: string, amount: number, metadata?: unknown, slot?: number) => boolean;
  RemoveItem: (item: string, amount: number, slot?: number) => boolean;
}

export declare interface QBPlayerEntity {
  userId?: string;
  citizenid: string;
  license: string;
  name: string;
  money: QBMoney;
  charinfo: PlayerCharInfo;
  job?: QBPlayerJob;
  gang?: QBPlayerGang;
  position: unknown;
  metadata: QBPlayerMetadata;
  cid: number;
  lastLoggedOut: number;
  items: QBPlayerItem[];
}

export declare interface QBPlayerTable {
  id: number;
  userId?: string;
  citizenid: string;
  license: string;
  name: string;
  money: string;
  charinfo: string;
  job?: string;
  gang?: string;
  position: unknown;
  metadata: string;
  cid: number;
  lastLoggedOut: number;
  items: string;
}

export declare interface QBPlayerData extends QBPlayerEntity {
  jobs: { [key: string]: number };
  gangs: { [key: string]: number };
  source?: number;
  optin?: boolean;
}

export declare interface QBPlayer {
  Functions: QBPlayerFunctions;
  PlayerData: QBPlayerData;
  Offline: boolean;
}

export declare interface PlayerCharInfo {
  firstname: string;
  lastname: string;
  birthdate: string;
  nationality: string;
  cid: number;
  gender: number;
  backstory: string;
  phone: string;
  account: string;
  card: number;
}
