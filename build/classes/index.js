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
var GrandParent = /** @class */ (function () {
    function GrandParent(name) {
        this.grandParentName = name;
    }
    Object.defineProperty(GrandParent.prototype, "grandParentNameGetter", {
        get: function () {
            return this.grandParentName.firstName + " " + this.grandParentName.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return GrandParent;
}());
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent(name) {
        var _this = _super.call(this, { firstName: 'GrandParent', lastName: name.lastName }) || this;
        _this.parentName = name;
        return _this;
    }
    Object.defineProperty(Parent.prototype, "parentNameGetter", {
        get: function () {
            // this.grandParentName // Not accessible cause it is private
            return this.parentName.firstName + " " + this.parentName.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Parent;
}(GrandParent));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    // Parameter Properties where you declare and assign the property in contructor parameter
    function Child(childName) {
        var _this = _super.call(this, { firstName: 'Parent', lastName: childName.lastName }) || this;
        _this.childName = childName;
        return _this;
    }
    Object.defineProperty(Child.prototype, "childNameGetter", {
        get: function () {
            this.parentName; // Accessible since it is protected
            return this.childName.firstName + " " + this.childName.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Child;
}(Parent));
var grandParentObj = new GrandParent({ firstName: 'James', lastName: 'Sharma' });
var parentObj = new Parent({ firstName: 'Jhonny', lastName: 'Jain' });
var childObj = new Child({ firstName: 'James', lastName: 'Agarwal' });
// console.log(grandParentObj.grandParentName) // Private variable not accessible outside class
console.log(grandParentObj.grandParentNameGetter);
// console.log(parentObj.parentName) // Protected variable not accessible outside class
console.log(parentObj.parentNameGetter);
console.log(parentObj.grandParentNameGetter);
console.log(childObj.childName); // By default public and always accessible anywhere
console.log(childObj.childNameGetter);
console.log(childObj.parentNameGetter);
console.log(childObj.grandParentNameGetter);
