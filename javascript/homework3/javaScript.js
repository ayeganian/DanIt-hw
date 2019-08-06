
function Calc (num1,num2, operation) {

     num1 = prompt('Please enter the first number', "6");

    while (isNaN(num1) || num1 === '' || num1 === null) {
        num1 = prompt('Please enter the first number again', "6");
    }

     num2 = prompt('Please enter the second number', "2");

    while (isNaN(num2) || num2 === '' || num2 === null) {
        num2 = prompt('Please enter the second number again', "2");
    }

     operation = prompt('Please enter the operation', "+");

    while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        operation = prompt('Please enter your operation again', '+');
    }


    switch (operation) {
        case '+':
            result=(+(num1) + +(num2));
            break;
        case '-':
            result=(num1 - num2);
            break;
        case '*':
            result=(num1 * num2);
            break;
        case '/':
            result=(num1 / num2);
            break;
    }
    return result;

}
console.log(Calc());


