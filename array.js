const items = [
    { name: 'rice', price: 5 },
    { name: 'Book', price: 20 },
    { name: 'Chicken', price: 10 },
    { name: 'Monitor', price: 100 },
];

// let totalPrice = 0 
// items.forEach(item => {
//     totalPrice += item.price

//*reduce method below

const totalPrice = items.reduce((total, item) => {
    console.log(`Total: ${total}`)
    console.log(`Total: ${item.price}`)
    return total + item.price
//total starts at 0
}, 0)

console.log(totalPrice)