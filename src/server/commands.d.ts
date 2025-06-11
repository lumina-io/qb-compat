declare interface QBCommandHelp {
  name: string;
  help: string;
}

declare interface QBCommand {
  [key: string]: {
    permission: string;
    arguments: QBCommandHelp;
    name: string;
    help: string;
    argsrequired: boolean;
    callback: (source: number, args: Record<string, string>, rawCommand: string) => void;
  };
}

export declare interface QBCommands {
  Refresh: (source: number) => void;
  Add: (
    name: string,
    help: string,
    arguments: QBCommandHelp[],
    argsrequire: boolean,
    callback: (source: number, args: string[]) => void,
    permission: string,
  ) => void;

  List: QBCommand[];
}
