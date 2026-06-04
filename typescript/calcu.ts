
function getInputValues(): [number, number] {
    const a = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    const b = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    return [a, b];
}

function displayResult(result: number): void {
    document.getElementById("result")!.innerHTML = result.toString();
}

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return b !== 0 ? a / b : 0;
}

// ADD
(document.getElementById("addBtn") as HTMLButtonElement).addEventListener("click", () => {
    const [a, b] = getInputValues();
    displayResult(add(a, b));
});

// SUBTRACT
(document.getElementById("subBtn") as HTMLButtonElement).addEventListener("click", () => {
    const [a, b] = getInputValues();
    displayResult(subtract(a, b));
});

// MULTIPLY
(document.getElementById("mulBtn") as HTMLButtonElement).addEventListener("click", () => {
    const [a, b] = getInputValues();
    displayResult(multiply(a, b));
});

// DIVIDE
(document.getElementById("divBtn") as HTMLButtonElement).addEventListener("click", () => {
    const [a, b] = getInputValues();
    displayResult(divide(a, b));
});