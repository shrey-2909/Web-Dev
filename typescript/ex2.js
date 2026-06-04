"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
let Person = {
    name: "Alice",
    age: 25
};
console.log(Person);
let user = ["Bob", 30];
console.log(user);
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
let x = true;
let y = false;
console.log(x && y);
console.log(x || y);
console.log(!x);
let r = 10;
let s = 20;
console.log(r > s);
console.log(r < s);
console.log(r >= s);
console.log(r <= s);
console.log(r == s);
console.log(r != s);
let u = 10;
let v = 20;
console.log(u & v);
console.log(u | v);
console.log(u ^ v);
console.log(~u);
console.log(u >> 1);
console.log(u << 1);
let c = 10;
c += 5;
console.log(c);
c -= 3;
console.log(c);
c *= 2;
console.log(c);
let firstname = "John";
let lastname = "Doe";
let fullname = firstname + " " + lastname;
console.log(fullname);
let value = "Hello";
console.log(typeof value);
let student = {
    name: "Rahul",
    age: 21,
    isPassed: true,
};
function divide(e, f) {
    if (f == 0) {
        throw new Error('Division ny zero');
    }
    return e / f;
}
try {
    const result = divide(10, 0);
}
finally { }
