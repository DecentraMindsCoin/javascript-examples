function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
// An array with some elements
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
// Loop through all the elements in the array 
for(var i=0; i<fruits.length; i++) {
    document.write("<p>" + fruits[i] + "</p>");
}

for(var i in fruits) {  
    document.write("<p>" + fruits[i] + "</p>");
}
let letters = ["a", "b", "c", "d", "e", "f"];

for(let letter of letters) {
    console.log(letter); // a,b,c,d,e,f
}

// Iterating over string
let greet = "Hello World!";

for(let character of greet) {
    console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
}