const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['0', '1', '2', '3', '4', '5']

// const a = alphabet[0];
// const b = alphabet[1];

// const [a, b, c] = alphabet
const [a,, c, ...rest] = alphabet

// const newArray = [...alphabet, ...numbers]
const newArray = alphabet.concat(numbers)


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);
console.log(newArray);

