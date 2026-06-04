//console.log("hello")
//let age: number = 30;
//console.log(age);

let name1: string="alice";
console.log(name1);

let isActive: boolean = true;
console.log(isActive);

let emptyValue: null = null;
console.log(emptyValue);

let notAssigned: undefined = undefined;
console.log(notAssigned);

let uniqueId: symbol = Symbol("id");
console.log(uniqueId);

let numbers: number[] = [1,2,3,4];
console.log(numbers);

class Person {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    greet(): void {
        console.log("Hello" + this.name);
    }
}

let p = new Person("Alice");

interface User {

}