"use strict";
// Typing functions
function Func1(prop1, prop2) {
    console.log(prop1 + prop2);
    return 0;
}
var Func2 = function (prop1, prop2) {
    console.log(prop1 + prop2);
};
var Func3 = function (prop1, prop2) {
    console.log(prop1 + prop2);
};
var Func4 = function (prop1, prop2) {
    console.log(prop1 + prop2);
    return true;
};
var Func5 = function (prop1, prop2) {
    if (prop2 === void 0) { prop2 = 9999; }
    console.log(prop1 + prop2);
    // Below return statement will give error because Func4 implements
    // FunctionInterface and in that it is given that function will return boolean
    // return 0
    return true;
};
var prop1 = "Hola";
var prop2 = 2;
Func1("1", 2);
Func1(prop1, prop2);
// Cannot change the argument postion because typescript
// checks the passed arguments' types with types defined.
// Func1(prop2, prop1)
// Func1(prop1) // too few argument passed
Func4(prop1);
Func4(prop1, undefined);
Func5(prop1);
var Func6 = function (prop1, prop2) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log(prop1);
    console.log(prop2);
    console.log(rest);
    return true;
};
Func6(prop1, prop2, 1, 2, 3, 4, 5, 6);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Function overloading
// Typing the function any and then checking types inside it and if it matches
// return the appropriate value by doubling it.
// User will not know that our function only operates on 'string' and 'number'.
var DoubleIt = function (prop) {
    if (typeof prop === 'string') {
        return "" + prop + prop;
    }
    if (typeof prop === 'number') {
        return 2 * prop;
    }
};
console.log(DoubleIt(99));
console.log(DoubleIt('Hi'));
console.log(DoubleIt([1, 2, 3, 4]));
// Even if we use any here but since we have defined only 2 signatures of our
// function above user will know now that our function only accepts 'number'
// and 'string'. And below function is not part of overloading.
function DoubleItTyped(prop) {
    if (typeof prop === 'string') {
        return "" + prop + prop;
    }
    if (typeof prop === 'number') {
        return 2 * prop;
    }
}
console.log(DoubleItTyped(99));
console.log(DoubleItTyped('Hola'));
// console.log(DoubleItTyped([1,2,3,4]) // Cannot do this because only number and string is expected.
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// this parameter
