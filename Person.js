var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return "I am ".concat(this.name); // Utilisez des backticks
    };
    Person.prototype.tellMyAge = function () {
        return "I am ".concat(this.age, " years old"); // Utilisez des backticks
    };
    return Person;
}());
var person = new Person('John', 40);
console.log(person.tellMyName());
console.log(person.tellMyAge());
var person2 = new Person('Mary', 35);
console.log(person2.tellMyName());
console.log(person2.tellMyAge());
