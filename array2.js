const numbers = [13, 2, 5];

const sum = numbers.reduce((total, number) => {
    console.log(`Total: ${total}`)
    console.log(`Total: ${number}`)
    return total + number
})

// console.log(sum)

const sum = numbers.reduce((a, b) => a + b, 0);

console.log(sum)