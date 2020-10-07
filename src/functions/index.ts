// Typing functions

function Func1 (prop1: string, prop2: number): number {
    console.log(prop1+prop2)
    return 0
}

const Func2 = function (prop1: string, prop2: number): void {
    console.log(prop1+prop2)
}

const Func3 = (prop1: string, prop2: number): void => {
    console.log(prop1+prop2)
}

const Func4: (prop1: string, prop2?: number) => boolean = (prop1, prop2) => {
    console.log(prop1+prop2)
    return true
}

interface FunctionInterface {
    (prop1: string, prop2?: number): boolean
}

const Func5: FunctionInterface = (prop1, prop2 = 9999) => {
    console.log(prop1+prop2)
    // Below return statement will give error because Func4 implements
    // FunctionInterface and in that it is given that function will return boolean
    // return 0
    return true
}

const prop1 = "Hola"
const prop2 = 2

Func1("1", 2)
Func1(prop1, prop2)

// Cannot change the argument postion because typescript
// checks the passed arguments' types with types defined.
// Func1(prop2, prop1)

// Func1(prop1) // too few argument passed
Func4(prop1)
Func4(prop1, undefined)
Func5(prop1)
// Func1(prop1, prop2, 3) // cannot pass extra values
// Func1(1, 2) // type mismatch for arguments

//Rest parameters
interface FunctionInterface2 {
    (prop1: string, prop2?: number, ...rest: number[]): boolean
}

const Func6: FunctionInterface2 = (prop1, prop2, ...rest) => {
    console.log(prop1)
    console.log(prop2)
    console.log(rest)
    return true
}
Func6(prop1, prop2, 1,2,3,4,5,6)

