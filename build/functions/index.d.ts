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
interface Object1 {
    prop1: number;
    prop2: string;
    func(): void;
    funcArr?: () => void;
}
declare const obj1: Object1;
declare class Example {
    value1: number;
    constructor(value1: number);
    methodWithThisScopeChanged(this: Object1): () => number;
}
declare const classInstance: Example;
declare const functionUsingChangedThisScope: () => number;
declare class Example2 {
    value1: number;
    constructor(value1: number);
    methodWithThisScopeChanged(this: void): () => void;
}
declare const classInstance2: Example2;
declare const functionUsingVoidThisScope: () => void;
