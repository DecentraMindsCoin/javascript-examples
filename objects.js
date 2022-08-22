const personOne = {
    name: 'Kyle',
    age: '34',
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}
const personTwo = {
    name: 'James',
    age: '24',
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

function printUser({ name, age, ...rest}) {
    console.log(`Name is: ${name}, age is: ${age}, Address is: ${rest}`)
}

printUser(personOne)

const customPerson = ({name, age, address}) => {
    console.log(` name : ${name} age: ${age} address: ${address}`)

}