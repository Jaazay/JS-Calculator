function calculate(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input. Please enter valid numbers.";
    }

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Invalid operator. Please use +, -, *, or /.";
    }
}

function main() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const operator = prompt("Enter an operator (+, -, *, /):");
    const num2 = parseFloat(prompt("Enter the second number:"));

    const result = calculate(num1, num2, operator);
    alert(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

main();