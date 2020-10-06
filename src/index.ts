console.log("hello")

enum Gender {
    Male,
    Female,
    Other
}

interface DataTypesInterface {
    readonly value1: boolean,
    value2: number,
    value3: string,
    value4: Array<number>
    value5: [number, string],
    value6: Gender,
    value7: unknown,
    value8: any,
    value9: void,
    value10: null,
    value11?: never,
    value12: object,
    [propName: string]: any
}

// const neverFunc = () => {
//     throw new Error("Error");
// }

const parameters: DataTypesInterface = {
    value1: false,
    value2: 1,
    value3: "String value",
    value4: [1,2,3,4],
    value5: [1, "tuple"],
    value6: Gender.Other,
    value7: 0,
    value8: {},
    value9: (()=>{})(),
    value10: null,
    // value11: neverFunc(),
    value12: { id: 1 },
    extra: 3,
    extra2: "Extra"
}

// parameters.value1 = true
// let newArray: ReadonlyArray<number> = parameters.value4
// newArray.push(5)

const func = (parameters: DataTypesInterface): void => {
    console.log("Value: 1 = ", parameters.value1)
    console.log("Value: 2 = ", parameters.value2)
    console.log("Value: 3 = ", parameters.value3)
    console.log("Value: 4 = ", parameters.value4)
    console.log("Value: 5 = ", parameters.value5)
    console.log("Value: 6 = ", parameters.value6)
    console.log("Value: 7 = ", parameters.value7)
    console.log("Value: 8 = ", parameters.value8)
    console.log("Value: 9 = ", parameters.value9)
    console.log("Value: 10 = ", parameters.value10)
    console.log("Value: 11 = ", parameters.value11)
    console.log("Value: 12 = ", parameters.value12)
}

func(parameters)

let a: unknown = 4
console.log(typeof a)
a = "r"
console.log(typeof a)
a = true
console.log(typeof a)