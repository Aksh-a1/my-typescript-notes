declare enum Gender {
    Male = 0,
    Female = 1,
    Other = 2
}
interface DataTypesInterface {
    readonly value1: boolean;
    value2: number;
    value3: string;
    value4: Array<number>;
    value5: [number, string];
    value6: Gender;
    value7: unknown;
    value8: any;
    value9: void;
    value10: null;
    value11?: never;
    value12: object;
    [propName: string]: any;
}
declare const parameters: DataTypesInterface;
declare const func: (parameters: DataTypesInterface) => void;
declare let a: unknown;
