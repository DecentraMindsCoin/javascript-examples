function sumAndMultiply(a, b) {
    return [a+b, a*b, a/b]
}

//const array = sumAndMultiply(2, 3)

const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3)

//console.log(array)
console.log(sum)
console.log(multiply)