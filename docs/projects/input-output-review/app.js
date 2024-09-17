// Create variables to store references to elements on the page
let form = document.getElementsByTagName('form')[0];
let results = document.getElementById('results');
// Generate a new variable we want to put back into the equation blank space in html
let equation = document.getElementById('equation');

// Now filling in code for the actual equation
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
console.log(num1); // To confirm that numbers are being randomly generated; not necessary for "final" code
console.log(num2); // To confirm that numbers are being randomly generated; not necessary for "final" code
// Using concatenation, fill out the equation with the two randomly generated numbers (num1 & num2)
// Because this is not in an eventListener, this will happen when the page first loads (not waiting for an action to execute)
equation.innerHTML = 'What is ' + num1 + ' + ' + num2 + '?';

// Listen for the form to be submitted
form.addEventListener('submit', function (event) {

    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let response = form.elements['response'].value;

    // Report the results
    results.innerHTML = 'Hello ' + response + '!';
});