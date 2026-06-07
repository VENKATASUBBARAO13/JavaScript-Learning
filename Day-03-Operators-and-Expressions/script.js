// Day 3: Operators and Expressions

const numberOne = 20;
const numberTwo = 6;

const sum = numberOne + numberTwo;
const difference = numberOne - numberTwo;
const product = numberOne * numberTwo;
const quotient = numberOne / numberTwo;
const remainder = numberOne % numberTwo;
const isGreater = numberOne > numberTwo;

console.log(sum, difference, product, quotient, remainder, isGreater);

document.getElementById("output").innerHTML = `
    <p>${numberOne} + ${numberTwo} = ${sum}</p>
    <p>${numberOne} - ${numberTwo} = ${difference}</p>
    <p>${numberOne} * ${numberTwo} = ${product}</p>
    <p>${numberOne} / ${numberTwo} = ${quotient}</p>
    <p>${numberOne} % ${numberTwo} = ${remainder}</p>
    <p>Is ${numberOne} greater than ${numberTwo}? ${isGreater}</p>
`;
