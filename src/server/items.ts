import type { QBItem } from "../shared/qbcore";

export declare interface QBUseableItem {
  [key: string]: (source: number, item: QBItem) => void;
}
