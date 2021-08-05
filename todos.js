const todos = [
  {
    id: 1,
    text: "take out the trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

// for of loop
// for(let todo of todos) {
//     console.log(todo.text)
// }

// Higher order way of above loop
todos.forEach(function(todo) {
console.log(todo.text)
});


const todosText = todos
  .map((object) => object.text)
  .reverse();

const substringTodo = todosText[0];

// console.log(substringTodo.substring(0, 5));

// Loop through arrays and only pull the text from each
// for(let i = 0; i < todos.length; i++) {
// console.log(todos[i].text)
// }

// For Loop
// for(let i = 0; i <= 10; i++) {
//  console.log(`For Loop Number: ${i}`)
// }

// While Loop set variable outside of loop
// let i = 0;
// while(i <= 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// console.log(todos[1].text)

// converts data to JSON format in order to send to a server

const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)
