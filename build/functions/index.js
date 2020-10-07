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
    // return 0 //This will give error because Func4 implements
    // FunctionInterface and in that it is given that function will return boolean
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
