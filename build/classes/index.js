"use strict";
//Interfaces for classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Class1 = /** @class */ (function () {
    function Class1() {
        this.variable1 = "variable1";
        this.variable2 = 9999;
        console.log("class1 constructor");
    }
    Class1.prototype.method = function (prop) {
        console.log("class1 method: ", prop);
    };
    return Class1;
}());
var class1Object = new Class1();
class1Object.method("Hola");
var Class2 = /** @class */ (function () {
    function Class2(prop) {
        this.variable1 = "variable1";
        this.variable2 = 9999;
        console.log("class2 constructor initialised with passed argument: ", prop);
    }
    Class2.prototype.method = function (prop) {
        console.log("class2 method: ", prop);
    };
    return Class2;
}());
var class2Object = new Class2("Init");
class2Object.method("Hola from class2Object");
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Interfaces extending classes
var ParentClass1 = /** @class */ (function () {
    function ParentClass1() {
        this.name = "ParentClass1";
    }
    return ParentClass1;
}());
var DummyClass1 = /** @class */ (function () {
    function DummyClass1() {
        this.name = "DummyClass1"; // You can only assign string to the 'name' now.
    }
    // name: number = 123 //You cannot change the type of the variable 'name'
    // which is inherited by interface and implemented by this class. 
    DummyClass1.prototype.childMethod = function (prop) {
        console.log("From dummy class1: ", prop);
    };
    return DummyClass1;
}());
var DummyClass2 = /** @class */ (function (_super) {
    __extends(DummyClass2, _super);
    function DummyClass2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DummyClass2.prototype.childMethod = function (prop) {
        console.log("Dummyclass2: ", prop);
    };
    return DummyClass2;
}(ParentClass1));
