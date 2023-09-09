
let readlineSync = require("readline-sync");
console.log("Bienvenido a la Calculadora 1.0")
console.log("")

// Here im puting first operator, empty.
let operador = '';

// Then i'm doing a array with every operator of my calc, then with one line I define every operator.
let operadoresValidos = ['+', '-', '*', '/', 'sumar', 'restar', 'multiplicar', 'dividir'];

// Here it's only for informate about the operators.
console.log("Si quieres sumar escribe \"+\" o \"sumar\" ")
console.log("")
console.log("Si quieres restar escribe \"-\" o \"restar\" ")
console.log("")
console.log("Si quieres multiplicar escribe \"*\" o \"multiplicar\" ")
console.log("")
console.log("Si quieres dividir escribe \"/\" o \"dividir\" ")
console.log("")

// and this is a simple ask
console.log("Y dime, que hacemos? ")

//while the operator is diffrent than the correct other operators, the program will ask again and advice that the operator is not correct.
while (!operadoresValidos.includes(operador)) {
    
    operador = readlineSync.question("Operador: ");

    if (!operadoresValidos.includes(operador)) {
        console.log(`Operador "${operador}" no válido. Por favor, ingresa un operador válido.`);
    }
}


console.log("")

//Simply asking for the numbers
console.log("Okay, primer número:")
var num1 = parseFloat(readlineSync.question());

console.log("Okay, segundo número:")
var num2 = parseFloat(readlineSync.question());

//And this is because if we put a little number before when we do a division or a substract the result normally it's not correct, maybe I change-it in other versions
if((operador == "-" || operador == "/") && num1 < num2){
    var boolgreater = 1
    console.log(`Ten cuidado con los resultados, ${num1} es más pequeño que ${num2} y puede ser que no te salgan las cuentas.`);
}


//My fav part, the brain of the calc, this is for operate, in case x then the result is num1 x num2.
let result;

switch(operador){
    case '+':
    case 'sumar':
        result = num1 + num2
        break;

    case '-':
    case 'restar':
        result = num1 - num2
        break;

    case '*':
    case 'multiplicar':
        result = num1 * num2
        break;

    case '/':
    case 'dividir':
        result = num1 / num2
        break;

    default: "El operador que has escrito no es correcto."

}

//Here I did my first bool in JS it was maded for if in case the first number is less than the second , I dont want to see the result
// Ten if thats true = 1 i dont want to show nothing, else show-it.

if(boolgreater == 1){

}
else{
    console.log("El Resultado es: " + result);
}


