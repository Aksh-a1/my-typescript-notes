// Generics
function generateArray<T> (value: T, arrayLength: number): T[] {
    return Array(arrayLength).fill(value)
}

// If you want to define generic in arrow function you can do it as given below:
// But as stated in this
// question https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics
// Below will only work in .ts files and .tsx it will give error.
// So to make it work in .tsx you need to add a trailing comma or 'extends' keyword like
// <T,> or <T extends <any type>>

// const generateArray = <T>(value: T): T[] => {
//     return Array(5).fill(value)
// }

const numberArray = generateArray<number>(9, 5)
const stringArray = generateArray<string>('H', 4)
const booleanArray = generateArray<boolean>(true, 9)

console.log(numberArray, stringArray, booleanArray)

interface GenExample<T> {
    prop1: number,
    prop2: T
}

const funcGenInterface = <T>(props: GenExample<T>) => {
    if (typeof props.prop2 === 'number') {
        return props.prop1 + props.prop2
    }
    else if (typeof props.prop2 === 'string') {
        return props.prop1 + props.prop2
    }
    else {
        throw new Error(`Operator '+' cannot be applied to types 'number' and '${typeof props.prop2}'`)
    }
}

console.log(funcGenInterface<number>({ prop1: 1, prop2: 3 }))
// Generic is declared to use number so we cannot pass string.
// console.log(funcGenInterface<number>({ prop1: 1, prop2: "o" }))
console.log(funcGenInterface<string>({ prop1: 1, prop2: "o" }))
console.log(funcGenInterface<boolean>({ prop1: 1, prop2: true }))