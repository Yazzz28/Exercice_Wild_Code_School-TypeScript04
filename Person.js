var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    Person.prototype.tellMyNameAndAge = function () {
        this.tellMyName();
        this.tellMyAge();
    };
    return Person;
}());
var firstPerson = new Person("John", 40);
var secondPerson = new Person("Mary", 35);
firstPerson.tellMyNameAndAge();
secondPerson.tellMyNameAndAge();
