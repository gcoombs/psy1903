let num1 = Math.floor(Math.random() * 10) + 1;;
let num2 = Math.floor(Math.random() * 10) + 1;;
let correctAnswer = num1 + num2;

let response = prompt("What is " + num1 + " + " + num2 + "?");

let feedback = '';
if (response == correctAnswer) {
    feedback = "You got it correct!";
} else {
    feedback = "You got it incorrect.";
}
alert(feedback + ' The expected answer is ' + correctAnswer + '.');

num1 = Math.floor(Math.random() * 10) + 1;;
num2 = Math.floor(Math.random() * 10) + 1;;
correctAnswer = num1 + num2;

response = prompt("What is " + num1 + " + " + num2 + "?");

feedback = '';
if (response == correctAnswer) {
    feedback = "You got it correct!";
} else {
    feedback = "You got it incorrect.";
}
alert(feedback + ' The expected answer is ' + correctAnswer + '.');

num1 = Math.floor(Math.random() * 10) + 1;;
num2 = Math.floor(Math.random() * 10) + 1;;
correctAnswer = num1 + num2;

response = prompt("What is " + num1 + " + " + num2 + "?");

feedback = '';
if (response == correctAnswer) {
    feedback = "You got it correct!";
} else {
    feedback = "You got it incorrect.";
}
alert(feedback + ' The expected answer is ' + correctAnswer + '.');
