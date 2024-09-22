// let feedback = 'correct';
// let responseTime = 2.4;
// let answer = 25;

// alert(`You are ${feedback}. Answer: ${answer}. Response time: ${responseTime}.`);

// Part 1. Functions
// let num1 = getRandomNumber(1, 10);
// let num2 = getRandomNumber(1, 10);
// console.log(num1, num2)

// displayRandomNumber();

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// function displayRandomNumber() {
//     alert(getRandomNumber(1, 10));
// }

// Part 2. Arrays
// let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];
// names[1] = 'Bob'; // replaces Jamal with Bob
// names.push('Sara'); // adds value at end of array
// names.unshift('Garth'); // adds value at start of array
// also pop() splice() shift() etc.
// console.log(names);

// Part 3. Loops

/*
//initialize empty array
let namesThatStartWithA = [];

for (let name of names) {
    if (name.charAt(0) == 'A') {
        namesThatStartWithA.push(name);
    }
}

console.log(namesThatStartWithA);
 */

// Part 4. Numerical for loops
// Where to start: let i = 0 --> start loop at 0
// When to stop: i < 15 --> as long as this is true, continue iterating through loop
// How to proceed: i++ --> alter i with each iteration (add 1 to i)
// let results = [];

// for (let i = 0; i < 3; i++) {
//     let num1 = getRandomNumber(1, 10);
//     let num2 = getRandomNumber(1, 10);
//     let start = Date.now();
//     let response = prompt(`What is ${num1} + ${num2}?`);
//     let end = Date.now();
//     let time = (end - start) / 1000;
//     if (response == num1 + num2) {
//         feedback = 'correct';
//     } else {
//         feedback = 'incorrect';
//     }
//     alert(`You answered ${response} (${feedback}) in ${time} seconds.`)
//     results.push([response, answer, feedback, time]);
// }
// console.log(results);

// Part 5. Objects

// Arrays: Store multiple elements, accessed via numerical indexes
// let participantA = ['Alice', 21, true];

// if (participantA[2]) {
//     console.log('Participant A consented.')
// }

// Objects: Store multiple elements, accessed via keyed indexes
// let participantB = {
//     name: 'Alice',
//     age: 21,
//     consent: true
// };

// if (participantB.consent) {
//     console.log('Participant B consented.')
// }

// participantB.consent = false; // change the value of a key-value pair (aka property)
// participantB.startTime = '2:00pm'; // add new key-value pair (aka property)
// delete participantB.age; // remove key-value pair (aka property)
// console.log(participantB)

/* 
let person = {
    // Strings
    firstName: 'Elliot',
    lastName: 'Brown',

    // Number
    age: 30,

    // Array
    hobbies: ['reading', 'gaming', 'hiking'],

    // Nested Object
    address: {
        street: '324 Western Ave',
        city: 'Cambridge',
        zipCode: '02139'
    },

    // Functions
    // Observe how the keyword *this* is used in functions to reference other properties within this object
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    greet: function () {
        return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
    },

    getAddress: function () {
        return `I live at ${this.address.street}, ${this.address.city} ${this.address.zipCode}`;
    },

    getHobbies: function () {
        return `My hobbies include ${this.hobbies.join(', ')}`;
    }
};

// Testing the functions, accessed via dot notation and invoked with parenthesis
console.log(person.greet()); // Hello, my name is Elliot Brown and I am 30 years old.

console.log(person.getAddress()); // I live at 324 Western Ave, Cambridge 02139
console.log(person.getHobbies()); // My hobbies include reading, gaming, hiking

// Testing the properties
console.log(person.firstName); // Elliot
console.log(person.age); // 30
*/

// Part 6. Objects & Arrays Together 
let results = [];

for (let i = 0; i < 3; i++) {
    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);
    let start = Date.now();
    let response = prompt(`What is ${num1} + ${num2}?`);
    let end = Date.now();
    let time = (end - start) / 1000;
    if (response == num1 + num2) {
        feedback = 'correct';
    } else {
        feedback = 'incorrect';
    }

    // set a variable result and store that, then push:
    // let result = {
    //     trial: i,
    //     response: response,
    //     answer: num1 + num2,
    //     feedback: feedback,
    //     time: time
    // }

    // results.push(result);

    // push directly:
    results.push({
        trial: i,
        response: response,
        answer: num1 + num2,
        feedback: feedback,
        time: time
    })


    alert(`You answered ${response} (${feedback}) in ${time} seconds.`)

}
console.log(results);