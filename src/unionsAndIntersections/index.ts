// Unions

type greet = 'enter' | 'exit' // union of two values

const greeting = (task: greet): any => {
    if(task === 'enter') {
        return 'Welcome'
    }
    else if(task === 'exit') {
        return 'Goodbye'
    }
}

console.log(greeting('enter'))
// greeting('Hi') // Cannot do this because we have defined parameter to take only 2 definite values.

type Param = string | number

const unionFunc = (prop: Param) => {
    // console.log(prop.length) // Can't do this. Only properties common for string & number can be accessed.
    // To access specific properties we have to narrow down the types some more
    // as below.
    if(typeof prop === 'string'){
        console.log(prop.length)
    }
    if(typeof prop === 'number'){
        console.log(prop.toString().length)
    }
}

type Params = string | boolean | number

// Below function uses Params type, which is a union of 3 types but only handles
// 2 types inside if condition. So how to know if there were some types left or
// might be in future some more types gets added to the Params.
// Either have a return type for function for every type checked. This will warn if a type is left out.
const unionFunc2 = (prop: Params): number => {
    if (typeof prop === 'string'){
        return prop.length
    }
    else if (typeof prop === 'number'){
        return prop.toString().length
    }
    else if (typeof prop === 'boolean'){
        return prop.toString().length
    }
    else {
        // This else block is extra piece of work but if we accidently leave a
        // type we will get an error here because then else condition will run
        // with some type of prop and 'missingType' expects a 'never' type which
        // will become wrong. You can add a type to Params or comment and elseif
        // block to check it.
        const missingType: never = prop
        console.error('You missed: ', missingType)
        return -1
    }
    // Or if you don't want that extra else block you can just give this type of
    // return statement which will return a value which you don't expect.
    // return -1
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Intersection
