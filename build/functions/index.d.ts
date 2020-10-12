declare function Func1(prop1: string, prop2: number): number;
declare const Func2: (prop1: string, prop2: number) => void;
declare const Func3: (prop1: string, prop2: number) => void;
declare const Func4: (prop1: string, prop2?: number) => boolean;
interface FunctionInterface {
    (prop1: string, prop2?: number): boolean;
}
declare const Func5: FunctionInterface;
declare const prop1 = "Hola";
declare const prop2 = 2;
interface FunctionInterface2 {
    (prop1: string, prop2?: number, ...rest: number[]): boolean;
}
declare const Func6: FunctionInterface2;
declare const DoubleIt: (prop: any) => any;
declare function DoubleItTyped(prop: string): string;
declare function DoubleItTyped(prop: number): number;
