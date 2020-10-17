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
declare type FullName = {
    firstName: string;
    lastName: string;
};
declare class GrandParent {
    private grandParentName;
    constructor(name: FullName);
    get grandParentNameGetter(): string;
}
declare class Parent extends GrandParent {
    protected parentName: FullName;
    constructor(name: FullName);
    get parentNameGetter(): string;
}
declare class Child extends Parent {
    childName: FullName;
    constructor(childName: FullName);
    get childNameGetter(): string;
}
declare const grandParentObj: GrandParent;
declare const parentObj: Parent;
declare const childObj: Child;
declare abstract class Animal {
    abstract type: string;
    abstract sound(): void;
    sleep(): void;
}
declare class Bird extends Animal {
    type: string;
    constructor(type: string);
    sound(): void;
    move(): void;
}
declare class Cow extends Animal {
    type: string;
    constructor(type: string);
    sound(): void;
    move(): void;
}
declare const cow: Cow;
declare const bird: Bird;
