"use strict";
// Unions
var greeting = function (task) {
    if (task === 'enter') {
        return 'Welcome';
    }
    else if (task === 'exit') {
        return 'Goodbye';
    }
};
console.log(greeting('enter'));
var unionFunc = function (prop) {
    // console.log(prop.length) // Can't do this. Only properties common for string & number can be accessed.
    // To access specific properties we have to narrow down the types some more
    // as below.
    if (typeof prop === 'string') {
        console.log(prop.length);
    }
    if (typeof prop === 'number') {
        console.log(prop.toString().length);
    }
};
// Below function uses Params type, which is a union of 3 types but only handles
// 2 types inside if condition. So how to know if there were some types left or
// might be in future some more types gets added to the Params.
// Either have a return type for function for every type checked. This will warn if a type is left out.
var unionFunc2 = function (prop) {
    if (typeof prop === 'string') {
        return prop.length;
    }
    else if (typeof prop === 'number') {
        return prop.toString().length;
    }
    else if (typeof prop === 'boolean') {
        return prop.toString().length;
    }
    else {
        // This else block is extra piece of work but if we accidently leave a
        // type we will get an error here because then else condition will run
        // with some type of prop and 'missingType' expects a 'never' type which
        // will become wrong. You can add a type to Params or comment an elseif
        // block to check it.
        var missingType = prop;
        console.error('You missed: ', missingType);
        return -1;
    }
    // Or if you don't want that extra else block you can just give this type of
    // return statement which will return a value which you don't expect.
    // return -1
};
var printCricketInfo = function (response) {
    console.log(response.name); // name is a common field so this we can access.
    console.log(response.team);
    // console.log(response.club) // Cannot access this because it is present in footballer type
};
var response1 = {
    name: 'Boi',
    age: 22,
    sport: 'cricket',
    team: 'Notherdamya'
};
printCricketInfo(response1);
