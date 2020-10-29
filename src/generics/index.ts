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
