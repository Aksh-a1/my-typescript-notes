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

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Private, Protected & Public

type FullName = {
    firstName: string,
    lastName: string
}

class GrandParent {
    private grandParentName: FullName

    constructor (name: FullName) {
        this.grandParentName = name
    }

    get grandParentNameGetter () {
        return `${this.grandParentName.firstName} ${this.grandParentName.lastName}`
    }
}

class Parent extends GrandParent {
    protected parentName: FullName

    constructor (name: FullName) {
        super({ firstName: 'GrandParent', lastName: name.lastName })
        this.parentName = name
    }

    get parentNameGetter () {
        // this.grandParentName // Not accessible cause it is private
        return `${this.parentName.firstName} ${this.parentName.lastName}`
    }
}

class Child extends Parent {
    // Parameter Properties where you declare and assign the property in contructor parameter
    constructor (public childName: FullName) {
        super({ firstName: 'Parent', lastName: childName.lastName })
    }

    get childNameGetter () {
        this.parentName // Accessible since it is protected
        return `${this.childName.firstName} ${this.childName.lastName}`
    }
}

const grandParentObj = new GrandParent({ firstName: 'James', lastName: 'Sharma'})
const parentObj = new Parent({ firstName: 'Jhonny', lastName: 'Jain'})
const childObj = new Child({ firstName: 'James', lastName: 'Agarwal'})

// console.log(grandParentObj.grandParentName) // Private variable not accessible outside class
console.log(grandParentObj.grandParentNameGetter)

// console.log(parentObj.parentName) // Protected variable not accessible outside class
console.log(parentObj.parentNameGetter)
console.log(parentObj.grandParentNameGetter)

console.log(childObj.childName) // By default public and always accessible anywhere
console.log(childObj.childNameGetter)
console.log(childObj.parentNameGetter)
console.log(childObj.grandParentNameGetter)

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Abstract classes

abstract class Animal {
    // These abstract properties must be implemented in derived class
    abstract type: string
    abstract sound(): void

    // This property will be directly inherited
    sleep(): void {
        console.log("zzzzzZZZZZ.......")
    }
}

class Bird extends Animal {
    constructor(public type: string){
        super()
    }
    sound() {
        console.log("I chirp chirp chirp....")
    }
    move() {
        console.log("I fly. Wheeeeeeee.....")
    }
}

class Cow extends Animal {
    constructor(public type: string){
        super()
    }
    sound() {
        console.log("I moooooo....")
    }
    move() {
        console.log("I walk. Moooo....")
    }
}

const cow = new Cow("Beefmaster")
console.log(cow.type)
cow.move()
cow.sound()
cow.sleep()

const bird = new Bird("Pigeon")
console.log(bird.type)
bird.move()
bird.sound()
bird.sleep()
