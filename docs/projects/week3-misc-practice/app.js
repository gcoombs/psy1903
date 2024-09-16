let age = prompt('How old are you?');
if (age > 0 && age < 12) {
    alert('Child');
} else if (age >= 12 && age < 18) {
    alert('Teenager');
} else if (age >= 18) {
    alert('Adult');
} else {
    alert('Please refresh and enter your age.');
}

let num1 = Math.floor(Math.random() * 10) + 1;;
let num2 = Math.floor(Math.random() * 10) + 1;;
let correctAnswer = num1 + num2;

let response = prompt("What is " + num1 + " + " + num2 + "?");

let feedback = '';

if (response == correctAnswer) {
    feedback = "You got it correct!";
} else if (response == correctAnswer + 1 || response == correctAnswer - 1) {
    feedback = "You almost got this correct.";
} else {
    feedback = "You got it incorrect.";
}

alert(feedback + ' The expected answer is ' + correctAnswer + '.');

let numberEntered = prompt('Please enter a whole number.');
if (numberEntered % 2 == 0) {
    alert('The number you entered is even.')
} else {
    alert('The number you entered is odd.')
}
