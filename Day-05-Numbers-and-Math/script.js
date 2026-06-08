// Day 5: Numbers and Math

const price = 499.75;
const roundedPrice = Math.round(price);
const highest = Math.max(10, 35, 22, 90);
const lowest = Math.min(10, 35, 22, 90);
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(roundedPrice, highest, lowest, randomNumber);

document.getElementById("output").innerHTML = `
    <p>Price: ${price}</p>
    <p>Rounded Price: ${roundedPrice}</p>
    <p>Highest Number: ${highest}</p>
    <p>Lowest Number: ${lowest}</p>
    <p>Random Number from 1 to 10: ${randomNumber}</p>
`;
