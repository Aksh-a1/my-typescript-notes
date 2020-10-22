// Enums

// Numeric enums
// By default Enum values start from 0
enum FirstEnum {
    A,
    B,
    C
}

// Enums are build as objects and have mapping like
// (name -> value) and reverse (value -> name) both.
// This can be checked in compiled js code.
// That's why enums only allow only string and numbers as values.
console.log(FirstEnum)
console.log(FirstEnum.A) // 0
console.log(FirstEnum.B) // 1
console.log(FirstEnum.C) // 2

// Changed starting value
enum SecondEnum {
    A=99,
    B,
    C
}

console.log(SecondEnum.A) // 99
console.log(SecondEnum.B) // 100
console.log(SecondEnum.C) // 101

// Change the sequence from between
enum ThirdEnum {
    A,
    B=99,
    C
}

console.log(ThirdEnum.A) // 0
console.log(ThirdEnum.B) // 99
console.log(ThirdEnum.C) // 100

const value = () => 99

// 'A' value is computed at runtime. So other enum values cannot come after
// this without having any initialiser, because enums have consecutive numeric
// values by default. Now at compile time we don't know what the value of 'A'
// will be so compiler cannot assign values to 'B' which gives compile error. 
enum ForthEnum {
    // A=value(),
    B,
    C,
}

// String enums
enum FifthEnum {
    A='Apple',
    B='Banana',
    C='Coconut'
}

// Here you'll see no reverse mapping as numeric enums for string enums
console.log(FifthEnum)
console.log(FifthEnum.A) // 'Apple'
console.log(FifthEnum.B) // 'Banana'
console.log(FifthEnum.C) // 'Coconut'

// Heterogenous
enum SixthEnum {
    A=12,
    B='Banana',
    // C, // We can only omit an initializer if the previous member value is a number.
}

console.log(SixthEnum.A) // 12
console.log(SixthEnum.B) // 'Banana'

// const enums
// If you check the compiled code there exist no equivalent JS code for below enum.
// Instead wherever SeventhEnum is used inside Typescript code after compilation
// those places have directly been replaced with exact values.
const enum SeventhEnum {
    A=99,
    B='Banana'
    // const enums cannot have computed values like below.
    // C=value()
}

console.log(SeventhEnum.A)
console.log(SeventhEnum.B)