let fruits: string[] = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    let output = `fruit: ${fruit}<br>`;
    document.getElementById("output")!.innerHTML = output;
}