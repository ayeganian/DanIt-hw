
let num1 = prompt('Please enter the first number', "6");
while (isNaN(num1) || num1 === '' || num1 === null) {
    num1 = prompt('Please enter the first number again', "6");
}
let num2 = prompt('Please enter the second number', "2");

while (isNaN(num2) || num2 === '' || num2 === null) {
    num2 = prompt('Please enter the second number again', "2");
}
let operation = prompt('Please enter the operation', "+");

while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
    operation = prompt('Please enter your operation again', '+');
}

function Calc(firstVar, secVar, action) {
    firstVar = num1;
    secVar = num2;
    action = operation;
    switch (action) {
        case '+':
            result = (+(firstVar) + +(secVar));
            break;

        case '-':
            result = (firstVar - secVar);
            break;

        case '*':
            result = (firstVar * secVar);
            break;

        case '/':
            result = (firstVar / secVar);
            break;
    }
    return result;
}

console.log(Calc());

