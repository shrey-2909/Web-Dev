function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3));

let Person: {name: string; age: number}={
    name: "Alice",
    age: 25
};
console.log(Person);

let user: [string, number] = ["Bob", 30];
console.log(user);

enum color {
    Red,
    Green,
    Blue
}

let a: number = 10;
let b: number = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

let x: boolean = true;
let y: boolean = false;

console.log(x && y );
console.log(x || y);
console.log(!x);

let r: number = 10;
let s: number = 20;

console.log(r>s);
console.log(r<s);
console.log(r >= s);
console.log(r <= s);
console.log(r == s);
console.log(r != s);

let u: number = 10;
let v: number = 20;

console.log(u & v);
console.log(u | v);
console.log(u ^ v);
console.log(~u);
console.log(u >> 1);
console.log(u << 1);

let c: number = 10;

c+=5;
console.log(c);
 
c-=3;
console.log(c);

c*=2;
console.log(c);

let firstname: string = "John";
let lastname: string = "Doe";

let fullname = firstname + " " + lastname;
console.log(fullname);

let value: any ="Hello";

console.log(typeof value);

let student: {name: string; age: number; isPassed: boolean}={
    name:"Rahul",
    age:21,
    isPassed:true,
};

function divide(e:number, f:number):number{
    if(f==0){
        throw new Error('Division ny zero');
    }
    return e/f;
}
try{
    const result = divide(10,0);
    
}