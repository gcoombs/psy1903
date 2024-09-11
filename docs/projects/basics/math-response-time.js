// Prompt with instructions
alert(`In this experiment we will measure your response time. 
    You will be shown a series of simple math equations. 
    Answer these equations as quickly and accurately as you can.`);

// Set two numbers
let x1 = Math.floor(Math.random() * 10) + 1;
let y1 = Math.floor(Math.random() * 10) + 1;
// Set start time
let start1 = Date.now();
// Set variable answer1 as a prompt with math problem 1
// let answer1 = prompt("What is 2 + 4?");
let answer1 = prompt("What is " + x1 + " + " + y1 + "?");
// Set end time
let end1 = Date.now();
// Calculate RT
let rt1 = (end1 - start1) / 1000;
let correct1 = x1 + y1;
// Pop up answer from previous question
if (answer1 == correct1) {
    alert("Correct! You answered " + answer1 + " in " + rt1 + " seconds!");
} else {
    alert("I'm sorry, that's wrong. You answered " + answer1 + " but the correct answer was " + correct1 + ".");
}

// Repeat process for math problem #2
let x2 = Math.floor(Math.random() * 10) + 1;
let y2 = Math.floor(Math.random() * 10) + 1;
let start2 = Date.now();
// let answer2 = prompt("What is 3 + 3?");
let answer2 = prompt("What is " + x2 + " + " + y2 + "?");
let end2 = Date.now();
let rt2 = (end2 - start2) / 1000;
let correct2 = x2 + y2;
if (answer2 == correct2) {
    alert("Correct! You answered " + answer2 + " in " + rt2 + " seconds!");
} else {
    alert("I'm sorry, that's wrong. You answered " + answer2 + " but the correct answer was " + correct2 + ".");
}

// Repeat process for math problem #3
let x3 = Math.floor(Math.random() * 10) + 1;
let y3 = Math.floor(Math.random() * 10) + 1;
let start3 = Date.now();
// let answer3 = prompt("What is 5 + 1?");
let answer3 = prompt("What is " + x3 + " + " + y3 + "?");
let end3 = Date.now();
let rt3 = (end3 - start3) / 1000;
let correct3 = x3 + y3;
if (answer3 == correct3) {
    alert("Correct! You answered " + answer3 + " in " + rt3 + " seconds!");
} else {
    alert("I'm sorry, that's wrong. You answered " + answer3 + " but the correct answer was " + correct3 + ".");
}

// Prompt with thank you message
alert("Thank you for your participation!");