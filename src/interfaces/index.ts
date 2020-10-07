interface Example1 {
    // prop1, prop2 are mandatory but prop3 is optional
    prop1: string,
    prop2: number,
    prop3?: number
}

const props = {
    prop1: "Hola",
    prop2: 1,
    prop99: 0
}

const funn = (props: Example1) : void => {
    console.log(props)
    // even though it was passed prop99 is not a recognised property on props
    // object which implements interface Example1.
    // console.log(props.prop99)
    console.log(props.prop1)
}
funn(props)
// Did the same thing but this time we get an error saying prop99 not part of family bro.
// funn({ prop1: "Hola", prop2: 1, prop99: 0 })

const val: Example1 = {
    prop1: "hola",
    prop2: 1
    // prop99: 2
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Readonly values
interface Person {
    readonly id: number,
    name: string
}

const val2: Person = {
    id: 1,
    name: "Don"
}
val2.name = "John"
// val2.id = 3 // cannot assign a readonly property again.

// Readonly array (same for Map and Set)
const arr: ReadonlyArray<number> = [1,2,3,4,5]
// arr.pop() // Error: you cannot change array

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Optional properties
interface Car {
    readonly model: number,
    make: string,
    [propName: string]: any
}

const val3: Car = {
    model: 1,
    make: "Nano"
}
val3.fuel = "Air"

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Interface for functions
interface Function1 {
    (prop: string) : void
}

const MyFunc: Function1 = (prop: string): void => {
    console.log(prop)
}
MyFunc("Hola")

interface Function2 {
    (prop1: Car, prop2: Person) : boolean
}

const MyFunc2: Function2 = (prop1, prop2) => {
    console.log(prop1)
    console.log(prop2)
    return true // if we remove this, the function will show an error.
}
MyFunc2(val3, val2)
// MyFunc2(val2, val3) // You cannot change the position of the variables.

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

interface IndexableType1 {
    [index: number]: string
}
const val4: IndexableType1 = {
    1: "A",
    2: "B",
    3: "C",
    // true: "Z"  // Not allowed here cause index is defined to be a number.
    // 4: true // Not allowed because the indexer is defined to be a string.
}

// When using indexer of string type all properties should return the same type
// that the indexer returns or subtype of it.
interface IndexableType2 {
    [index: string]: boolean, // change this return type to 'unknown' or 'any' and then uncomment bottom line.
    // length: number // Not allowed because this type must be a subtype of the indexer i.e. boolean.
}

interface IndexableType3 {
    [index: string]: number | Function1,
    del: Function1
}
const val5: IndexableType3 = {
    "a": 1,
    "b": 2,
    del: (i) => {
        delete val5[i]
    }
}
console.log(val5)
val5.del("a")
console.log(val5)

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Extending intefaces

interface ParentInterface1 {
    name: string
}

interface ChildInterface1 extends ParentInterface1 {
    child1Method(prop: string): void
}

interface ParentInterface2 {
    type: string
}

interface ChildInterface2 extends ParentInterface1, ParentInterface2 {
    child2Method(prop: string): void
}

const val6 = {} as ChildInterface1
val6.name = "Inherited ParentInterface1"
val6.child1Method = (prop) => console.log(prop)
val6.child1Method("val6 called")

const val7 = {} as ChildInterface2
val7.name = "Inherited ParentInterface1"
val7.type = "Inherited ParentInterface2"
val7.child2Method = (prop) => console.log(prop)
val7.child2Method("val7 called")

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Hybrid interface

interface MyUTCDateInterface {
    (): number
    dateLength: number
    objName: string
}
  
function getMyUTCDate(): MyUTCDateInterface {
    const myDate = function () { return Date.UTC(2020, 10) } as MyUTCDateInterface
    myDate.dateLength = 13
    myDate.objName = "MyDate"
    return myDate
}

const myUTCDate = getMyUTCDate()
console.log(myUTCDate)
console.log(myUTCDate())
console.log(myUTCDate.objName)
console.log(myUTCDate.dateLength)

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
