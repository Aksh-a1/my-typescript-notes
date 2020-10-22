"use strict";
// Enums
// Numeric enums
// By default Enum values start from 0
var FirstEnum;
(function (FirstEnum) {
    FirstEnum[FirstEnum["A"] = 0] = "A";
    FirstEnum[FirstEnum["B"] = 1] = "B";
    FirstEnum[FirstEnum["C"] = 2] = "C";
})(FirstEnum || (FirstEnum = {}));
// Enums are build as objects and have mapping like
// (name -> value) and reverse (value -> name) both.
// This can be checked in compiled js code.
// That's why enums only allow only string and numbers as values.
console.log(FirstEnum);
console.log(FirstEnum.A); // 0
console.log(FirstEnum.B); // 1
console.log(FirstEnum.C); // 2
// Changed starting value
var SecondEnum;
(function (SecondEnum) {
    SecondEnum[SecondEnum["A"] = 99] = "A";
    SecondEnum[SecondEnum["B"] = 100] = "B";
    SecondEnum[SecondEnum["C"] = 101] = "C";
})(SecondEnum || (SecondEnum = {}));
console.log(SecondEnum.A); // 99
console.log(SecondEnum.B); // 100
console.log(SecondEnum.C); // 101
// Change the sequence from between
var ThirdEnum;
(function (ThirdEnum) {
    ThirdEnum[ThirdEnum["A"] = 0] = "A";
    ThirdEnum[ThirdEnum["B"] = 99] = "B";
    ThirdEnum[ThirdEnum["C"] = 100] = "C";
})(ThirdEnum || (ThirdEnum = {}));
console.log(ThirdEnum.A); // 0
console.log(ThirdEnum.B); // 99
console.log(ThirdEnum.C); // 100
var value = function () { return 99; };
// 'A' value is computed at runtime. So other enum values cannot come after
// this without having any initialiser, because enums have consecutive numeric
// values by default. Now at compile time we don't know what the value of 'A'
// will be so compiler cannot assign values to 'B' which gives compile error. 
var ForthEnum;
(function (ForthEnum) {
    // A=value(),
    ForthEnum[ForthEnum["B"] = 0] = "B";
    ForthEnum[ForthEnum["C"] = 1] = "C";
})(ForthEnum || (ForthEnum = {}));
// String enums
var FifthEnum;
(function (FifthEnum) {
    FifthEnum["A"] = "Apple";
    FifthEnum["B"] = "Banana";
    FifthEnum["C"] = "Coconut";
})(FifthEnum || (FifthEnum = {}));
// Here you'll see no reverse mapping as numeric enums for string enums
console.log(FifthEnum);
console.log(FifthEnum.A); // 'Apple'
console.log(FifthEnum.B); // 'Banana'
console.log(FifthEnum.C); // 'Coconut'
// Heterogenous
var SixthEnum;
(function (SixthEnum) {
    SixthEnum[SixthEnum["A"] = 12] = "A";
    SixthEnum["B"] = "Banana";
    // C, // We can only omit an initializer if the previous member value is a number.
})(SixthEnum || (SixthEnum = {}));
console.log(SixthEnum.A); // 12
console.log(SixthEnum.B); // 'Banana'
console.log(99 /* A */);
console.log("Banana" /* B */);
