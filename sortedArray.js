array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sortedSquaredArray = array.map(sortedArray => (sortedArray * sortedArray)).sort((sortedArray1, sortedArray2) =>
sortedArray1 > sortedArray2 ? 1 : -1 );

console.log(sortedSquaredArray)