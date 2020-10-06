interface Example1 {
    prop1: string;
    prop2: number;
    prop3?: number;
}
declare const props: {
    prop1: string;
    prop2: number;
    prop99: number;
};
declare const funn: (props: Example1) => void;
declare const val: Example1;
interface Person {
    readonly id: number;
    name: string;
}
declare const val2: Person;
declare const arr: ReadonlyArray<number>;
interface Car {
    readonly model: number;
    make: string;
    [propName: string]: any;
}
declare const val3: Car;
interface Function1 {
    (prop: string): void;
}
declare const MyFunc: Function1;
interface Function2 {
    (prop1: Car, prop2: Person): boolean;
}
declare const MyFunc2: Function2;
interface IndexableType1 {
    [index: number]: string;
}
declare const val4: IndexableType1;
interface IndexableType2 {
    [index: string]: boolean;
}
interface IndexableType3 {
    [index: string]: number | Function1;
    del: Function1;
}
declare const val5: IndexableType3;
interface Parent1 {
    name: string;
}
interface Child1 extends Parent1 {
    child1Method(prop: string): void;
}
interface Parent2 {
    type: string;
}
interface Child2 extends Parent1, Parent2 {
    child2Method(prop: string): void;
}
declare const val6: Child1;
declare const val7: Child2;
interface MyUTCDateInterface {
    (): number;
    dateLength: number;
    objName: string;
}
declare function getMyUTCDate(): MyUTCDateInterface;
declare const myUTCDate: MyUTCDateInterface;
interface ClassInterface1 {
    variable1: string;
    variable2: number;
    method(prop: string): void;
}
declare class Class1 implements ClassInterface1 {
    variable1: string;
    variable2: number;
    constructor();
    method(prop: string): void;
}
declare const class1Object: ClassInterface1;
interface Class2Constructor {
    new (prop: string): ClassInterface1;
}
declare const Class2: Class2Constructor;
declare const class2Object: ClassInterface1;
