function calculate(number1, operator, number2) {
    var result;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log('Deu bug!');
            break;
    }
    return result
}

console.log (calculate(4, '+', 9));

