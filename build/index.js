"use strict";
console.log("hello");
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
// const neverFunc = () => {
//     throw new Error("Error");
// }
var parameters = {
    value1: false,
    value2: 1,
    value3: "String value",
    value4: [1, 2, 3, 4],
    value5: [1, "tuple"],
    value6: Gender.Other,
    value7: 0,
    value8: {},
    value9: (function () { })(),
    value10: null,
    // value11: neverFunc(),
    value12: { id: 1 },
    extra: 3,
    extra2: "Extra"
};
// parameters.value1 = true
// let newArray: ReadonlyArray<number> = parameters.value4
// newArray.push(5)
var func = function (parameters) {
    console.log("Value: 1 = ", parameters.value1);
    console.log("Value: 2 = ", parameters.value2);
    console.log("Value: 3 = ", parameters.value3);
    console.log("Value: 4 = ", parameters.value4);
    console.log("Value: 5 = ", parameters.value5);
    console.log("Value: 6 = ", parameters.value6);
    console.log("Value: 7 = ", parameters.value7);
    console.log("Value: 8 = ", parameters.value8);
    console.log("Value: 9 = ", parameters.value9);
    console.log("Value: 10 = ", parameters.value10);
    console.log("Value: 11 = ", parameters.value11);
    console.log("Value: 12 = ", parameters.value12);
};
func(parameters);
var a = 4;
console.log(typeof a);
a = "r";
console.log(typeof a);
a = true;
console.log(typeof a);
