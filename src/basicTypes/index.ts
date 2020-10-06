// Boolean
const variable1: boolean = true

// Number
const variable2: number = 12345

// String
const variable3: string = "Hola"

// Array
const variable4: Array<number> = [1,2,3,4,5]
const variable4_1: number[] = [1,2,3,4,5]

// Tuple
const variable5: [ number, string ] = [ 12345, "hola" ]

// Null
const variable10: null = null

// Undefined
const variable11: undefined = undefined

// Enum
enum Language {
    JavaScript, // 0
    TypeScript // 1
}
const variable6: Language = Language.TypeScript

// Any
let variable8: any
variable8.hola() // This is allowed with "any" but will throw an error on runtime.

// Unknown
let variable7: unknown // value not known. Might come later in program from anywhere, we don't know.
// variable7.hola() // This is not allowed with unknown. More safe than "any"
variable7 = 1
variable7 = "p"

// Void (Mostly used with functions)
// typically used for functions which doesn't return anything explicitly but
// performs something and reaches the end, remember C++ void main(){} ?
const variable9: void = console.log("hola")
const fun = (): void => {
    console.log("Function")
}

// Never (Mostly used with functions)
// typically used for functions which doesn't reach their end.
// So there is no explicit return also for those functions.
let variable12: never
const fun1 = (): never => {
    process.exit()
}

// Object
const variable13: object = {
    prop1: "LL",
    prop2: 0
}

// Type assertions
const variable14: number = 12345

