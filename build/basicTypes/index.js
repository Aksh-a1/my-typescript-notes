"use strict";
// Boolean
var variable1 = true;
// Number
var variable2 = 12345;
// String
var variable3 = "Hola";
// Array
var variable4 = [1, 2, 3, 4, 5];
var variable4_1 = [1, 2, 3, 4, 5];
// Tuple
var variable5 = [12345, "hola"];
// Null
var variable10 = null;
// Undefined
var variable11 = undefined;
// Enum
var Language;
(function (Language) {
    Language[Language["JavaScript"] = 0] = "JavaScript";
    Language[Language["TypeScript"] = 1] = "TypeScript"; // 1
})(Language || (Language = {}));
var variable6 = Language.TypeScript;
// Any
var variable8;
// variable8.hola() // This is allowed with "any" but will throw an error on runtime.
// Unknown
var variable7; // value not known. Might come later in program from anywhere, we don't know.
// variable7.hola() // This is not allowed with unknown. More safe than "any"
variable7 = 1;
variable7 = "p";
// Void (Mostly used with functions)
// typically used for functions which doesn't return anything explicitly but
// performs something and reaches the end, remember C++ void main(){} ?
var variable9 = console.log("hola");
var fun = function () {
    console.log("Function");
};
// Never (Mostly used with functions)
// typically used for functions which doesn't reach their end.
// So there is no explicit return also for those functions.
var variable12;
var fun1 = function () {
    process.exit();
};
// Object
var variable13 = {
    prop1: "LL",
    prop2: 0
};
// Type assertions
// const variable14 = Math.round(variable7) // It gives error because variable7 is not a number.
var variable14 = Math.round(variable7);
console.log(variable14);
// Below type assertion is not allowed in JSX because it conflicts with syntax of JSX.
var variable15 = Math.round(variable7);
console.log(variable14);
