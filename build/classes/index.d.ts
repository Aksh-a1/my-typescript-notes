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
declare class ParentClass1 {
    name: string;
}
interface Child11 extends ParentClass1 {
    childMethod(prop: string): void;
}
declare class DummyClass1 implements Child11 {
    name: string;
    childMethod(prop: string): void;
}
declare class DummyClass2 extends ParentClass1 implements Child11 {
    childMethod(prop: string): void;
}
