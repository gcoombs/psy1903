// Part 2 Functions
// Generate random numbers
// let num1 = getRandomNumber(1, 10); // min & max are arguments
// let num2 = getRandomNumber(1, 10);

function getRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min; // min & max are parameters
    return randomNumber;
}

// function displayRandomNumber() {
//     alert(getRandomNumber(1, 10));
// }

// // Part 3 Loops
// let names = ['Alice', 'Jamal', 'Avi', 'Kyle'];

// let namesThatStartWithA = [];

// for (let name of names) {
//     if (name.charAt(0) == 'A') {
//         namesThatStartWithA.push(name);
//     }
// }


//Part 4 Numerical for Loops
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

//     results.push([response, feedback, time]);
//     alert(`You answered ${response} (${feedback}) in ${time} seconds.`)

// }
// console.log(results);

// Part 5 Objects
// let person = {
//     // Strings
//     firstName: 'Elliot',
//     lastName: 'Brown',

//     // Number
//     age: 30,

//     // Array
//     hobbies: ['reading', 'gaming', 'hiking'],

//     // Nested Object
//     address: {
//         street: '324 Western Ave',
//         city: 'Cambridge',
//         zipCode: '02139'
//     },

//     // Functions
//     // Observe how the keyword *this* is used in functions to reference other properties within this object
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     greet: function () {
//         return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
//     },

//     getAddress: function () {
//         return `I live at ${this.address.street}, ${this.address.city} ${this.address.zipCode}`;
//     },

//     getHobbies: function () {
//         return `My hobbies include ${this.hobbies.join(', ')}`;
//     }
// };

// // Testing the functions, accessed via dot notation and invoked with parenthesis
// console.log(person.greet()); // Hello, my name is Elliot Brown and I am 30 years old.

// console.log(person.getAddress()); // I live at 324 Western Ave, Cambridge 02139
// console.log(person.getHobbies()); // My hobbies include reading, gaming, hiking

// // Testing the properties
// console.log(person.firstName); // Elliot
// console.log(person.age); // 30

// Part 6
// let results = [];
// for (let i = 0; i < 3; i++) {
//     let num1 = getRandomNumber(1, 10);
//     let num2 = getRandomNumber(1, 10);
//     let start = Date.now();
//     let response = prompt(`What is ${num1} + ${num2}?`);
//     let end = Date.now();
//     let time = (end - start) / 1000;
//     let answer = num1 + num2;
//     if (response == answer) {
//         feedback = 'correct';
//     } else {
//         feedback = 'incorrect';
//     }
//     results.push({
//         response: response,
//         answer: answer,
//         feedback: feedback,
//         time: time
//     });
//     alert(`You answered ${response} (${feedback}) in ${time} seconds.`)

// }
// console.log(results);

// let age = prompt('How old are you?');
// if (age < 12) {
//     alert('Child');
// }
// else if (age < 18) {
//     alert('Teenager');
// }
// else {
//     alert('Adult');
// }

// alert('In this experiment we will measure your response time.You will be shown a series of simple math equations.Answer these equations as quickly and accurately as you can')

// let start1 = new Date().getTime();
// let answer1 = prompt('what is ' + randomNum1 + "+" + randomNum2);

// let end1 = new Date().getTime();
// let responseTime1 = (end1 - start1) / 1000;
// let feedback = ''
// if (answer1 == (randomNum1 + randomNum2)) {
//     feedback = 'CORRECT'
// } else {
//     feedback = 'INCORRECT'
// }

// alert('You answered ' + answer1 + ' in ' + responseTime1 + ' seconds. Your response was ' + feedback);

// let start2 = new Date().getTime();
// let answer2 = prompt('what is ' + (Math.floor(Math.random() * 10) + 1) + "+" + (Math.floor(Math.random() * 10) + 1));

// let end2 = new Date().getTime();
// let responseTime2 = (end2 - start2) / 1000;
// if (answer2 == (randomNum1 + randomNum2)) {
//     feedback = 'CORRECT'
// } else {
//     feedback = 'INCORRECT'
// }

// alert('You answered ' + answer2 + ' in ' + responseTime2 + ' seconds. Your response was ' + feedback);

// let start3 = new Date().getTime();
// let answer3 = prompt('what is ' + (Math.floor(Math.random() * 10) + 1) + "+" + (Math.floor(Math.random() * 10) + 1));

// let end3 = new Date().getTime();
// let responseTime3 = (end3 - start3) / 1000;
// if (answer3 == (randomNum1 + randomNum2)) {
//     feedback = 'CORRECT'
// } else {
//     feedback = 'INCORRECT'
// }

// alert('You answered ' + answer3 + ' in ' + responseTime3 + ' seconds. Your response was ' + feedback);

// alert('Thank you for your participation!');

let age = prompt('How old are you?');
if (age < 12) {
    alert('Child');
} else if (age >= 12 & age < 18) {
    alert('Teenager');
} else {
    alert('Adult');
}

