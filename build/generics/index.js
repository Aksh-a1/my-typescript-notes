"use strict";
// Generics
function generateArray(value, arrayLength) {
    return Array(arrayLength).fill(value);
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
var numberArray = generateArray(9, 5);
var stringArray = generateArray('H', 4);
var booleanArray = generateArray(true, 9);
console.log(numberArray, stringArray, booleanArray);
