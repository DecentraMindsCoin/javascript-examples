const x = 3;
const y = 11;

// if (x > 5 || y > 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }
if (x > 5 || y > 10) {
//   console.log('x is more than 5 or y is more than 10');
}

// terniary operators if ? else :

const color = x > 10 ? 'red' : 'blue';
// console.log(color)

// Switches 

switch(color) {
    case 'red':
    // console.log('color is red');
    break;
    case 'blue':
    // console.log('color is blue');
    break;
    default:
        // console.log('color is not red or blue')
}

// 

function addNums(num1, num2) {
    console.log(num1 + num2)
}

addNums(5,4)