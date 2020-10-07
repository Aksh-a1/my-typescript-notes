"use strict";
var props = {
    prop1: "Hola",
    prop2: 1,
    prop99: 0
};
var funn = function (props) {
    console.log(props);
    // even though it was passed prop99 is not a recognised property on props
    // object which implements interface Example1.
    // console.log(props.prop99)
    console.log(props.prop1);
};
funn(props);
// Did the same thing but this time we get an error saying prop99 not part of family bro.
// funn({ prop1: "Hola", prop2: 1, prop99: 0 })
var val = {
    prop1: "hola",
    prop2: 1
    // prop99: 2
};
var val2 = {
    id: 1,
    name: "Don"
};
val2.name = "John";
// val2.id = 3 // cannot assign a readonly property again.
// Readonly array (same for Map and Set)
var arr = [1, 2, 3, 4, 5];
var val3 = {
    model: 1,
    make: "Nano"
};
val3.fuel = "Air";
var MyFunc = function (prop) {
    console.log(prop);
};
MyFunc("Hola");
var MyFunc2 = function (prop1, prop2) {
    console.log(prop1);
    console.log(prop2);
    return true; // if we remove this, the function will show an error.
};
MyFunc2(val3, val2);
var val4 = {
    1: "A",
    2: "B",
    3: "C",
};
var val5 = {
    "a": 1,
    "b": 2,
    del: function (i) {
        delete val5[i];
    }
};
console.log(val5);
val5.del("a");
console.log(val5);
var val6 = {};
val6.name = "Inherited ParentInterface1";
val6.child1Method = function (prop) { return console.log(prop); };
val6.child1Method("val6 called");
var val7 = {};
val7.name = "Inherited ParentInterface1";
val7.type = "Inherited ParentInterface2";
val7.child2Method = function (prop) { return console.log(prop); };
val7.child2Method("val7 called");
function getMyUTCDate() {
    var myDate = function () { return Date.UTC(2020, 10); };
    myDate.dateLength = 13;
    myDate.objName = "MyDate";
    return myDate;
}
var myUTCDate = getMyUTCDate();
console.log(myUTCDate);
console.log(myUTCDate());
console.log(myUTCDate.objName);
console.log(myUTCDate.dateLength);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
