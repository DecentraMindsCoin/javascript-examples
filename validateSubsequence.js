array = [1, 2, 3, 4, 5, 6, 7]

sequence = [1, 3, 5, 7]

function isValidSubsequence(array, sequence) {
let j = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] === sequence[j]) {
        j++
    }
}
if (j === sequence.length) {
    return true
} else {
    return false
}
}

console.log(array, sequence)