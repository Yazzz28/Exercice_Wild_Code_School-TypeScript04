class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public tellMyName(): string {
        return `I am ${this.name}`;  // Utilisez des backticks
    }

    public tellMyAge(): string {
        return `I am ${this.age} years old`;  // Utilisez des backticks
    }
}

let person = new Person('John', 40);
console.log(person.tellMyName());
console.log(person.tellMyAge());

let person2 = new Person('Mary', 35);
console.log(person2.tellMyName());
console.log(person2.tellMyAge());
