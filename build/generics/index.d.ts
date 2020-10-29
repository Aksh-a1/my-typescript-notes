declare function generateArray<T>(value: T, arrayLength: number): T[];
declare const numberArray: number[];
declare const stringArray: string[];
declare const booleanArray: boolean[];
interface GenExample<T> {
    prop1: number;
    prop2: T;
}
declare const funcGenInterface: <T>(props: GenExample<T>) => string | number;
