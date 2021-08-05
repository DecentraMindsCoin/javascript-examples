const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA',
    }
}
// add object email to person variable
person.email = 'john@gmail.com';


// destructuring

const { firstName, lastName, address: { city } } = person;

console.log(person)
console.log(person.hobbies[1])
console.log(person.address.street)
console.log(firstName + ' ' + lastName)
console.log(city)