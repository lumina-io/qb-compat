export declare interface QBJob {
  label: string;
  type?: string;
  defaultDuty: boolean;
  offDutyPay: boolean;
  grades: {
    [key: string]: {
      name: string;
      payment: number;
    };
  };
}

export declare interface QBGang {
  label: string;
  grades: {
    [key: string]: {
      name: string;
      payment: number;
    };
  };
}

export declare interface QBVehicle {
  name: string;
  brand: string;
  model: string;
  price: number;
  category: string;
  hash: string | number;

  // QBCore Compatible
  type: string;
  shop: string | string[];
}

export declare interface QBWeapon {
  name: string;
  label: string;
  weapontype: string;
  ammotype?: string;
  damagereason: string;
}

export declare interface QBItem {
  name: string;
  label: string;
  weight: number;
  type: "item" | "weapon";
  ammotype?: string;
  image: string;
  unique: boolean;
  useable: boolean;
  shouldClose?: boolean;
  description: string;
}

export declare interface QBCoreShared {
  RandomStr: (length: number) => string;
  RandomInt: (length: number) => number;
  SplitStr: (str: string, delimiter: string) => string[];
  Round: (num: number, decimal_places?: number) => number;
  Trim: (str: string) => string;
  ChangeVehicleExtra: (vehicle: number, extra: number, enable: boolean) => void;
  SetDefaultVehicleExtras: (vehicle: number, config: { [key: number]: boolean }) => void;

  StarterItems: {
    [key: string]: {
      name: string;
      amount: number;
    };
  };

  // Job
  ForceJobDefaultDutyAtLogin: boolean;

  // Shared files...
  Jobs: { [key: string]: QBJob };
  Gangs: { [key: string]: QBGang };
  Locations: { [key: string]: unknown };
  Vehicles: { [key: string]: QBVehicle };
  Weapons: { [key: string]: QBWeapon };
  Items: { [key: string]: QBItem };
}
