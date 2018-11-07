//
//Object Destructuring
//

// const person = {
//     name: 'Kevin',
//     age: 26,
//     location: {
//         city: 'Verona',
//         temp: 40
//     }
// };

// const { name: firstName = 'default', age} = person;
// const {city, temp: temperature} = person.location;
// console.log(`${city} is ${temperature} degrees today.`);
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age} years old.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); //Penguin, Self-Published

//
// Array Destructuring
//

const address =['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [, city, state] = address;

console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}.`);
