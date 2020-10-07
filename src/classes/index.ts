//Interfaces for classes

// checking instance side of the class
interface ClassInterface1 {
    variable1: string
    variable2: number
    method(prop: string): void
}

class Class1 implements ClassInterface1 {
    variable1: string = "variable1"
    variable2: number = 9999

    constructor() {
        console.log("class1 constructor")
    }

    method(prop: string) {
        console.log("class1 method: ", prop)
    }
}

const class1Object: ClassInterface1 = new Class1()
class1Object.method("Hola")

// checking the static side of the class i.e. constructor
interface Class2Constructor {
    // type signature for class constructor which upon instantiation will
    // return an object which implements 'ClassInterface1' interface type.
    new (prop: string): ClassInterface1
}

const Class2: Class2Constructor = class Class2 implements ClassInterface1 {
    variable1: string = "variable1"
    variable2: number = 9999
    constructor(prop: string) {
        console.log("class2 constructor initialised with passed argument: ", prop)
    }
    method(prop: string) {
        console.log("class2 method: ", prop)
    }
}

const class2Object = new Class2("Init")
class2Object.method("Hola from class2Object")

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Interfaces extending classes

class ParentClass1 {
    name: string = "ParentClass1"
}

interface Child11 extends ParentClass1 {
    childMethod(prop: string): void
}

class DummyClass1 implements Child11 {
    name = "DummyClass1" // You can only assign string to the 'name' now.
    // name: number = 123 //You cannot change the type of the variable 'name'
    // which is inherited by interface and implemented by this class. 
    childMethod(prop: string) {
        console.log("From dummy class1: ", prop)
    }
}

class DummyClass2 extends ParentClass1 implements Child11 {
    childMethod(prop: string) {
        console.log("Dummyclass2: ", prop)
    }
}