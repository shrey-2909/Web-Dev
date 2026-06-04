"use strict";
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    let output = `fruit: ${fruit}<br>`;
    document.getElementById("output").innerHTML = output;
}
