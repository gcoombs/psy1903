// Create variables to store references to elements on the page
let form = document.getElementsByTagName('form')[0];
let results = document.getElementById('results');
// Generate a new variable we want to put back into the equation blank space in html
let equation = document.getElementById('equation');

// Need to 
let num1Output = document.getElementById('num1');
let num2Output = document.getElementById('num2');

// Now filling in code for the actual equation
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
// Using concatenation, fill out the equation with the two randomly generated numbers (num1 & num2)
// Because this is not in an eventListener, this will happen when the page first loads (not waiting for an action to execute)
// equation.innerHTML = 'What is ' + num1 + ' + ' + num2 + '?';

// Instead of using concatenation to create a text string that is then input back into the html index, placing each randomly generated number there
num1Output.innerHTML = num1;
num2Output.innerHTML = num2;

// Listen for the form to be submitted
form.addEventListener('submit', function (event) {

    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let response = form.elements['response'].value;

    // Report the results
    results.innerHTML = 'Hello ' + response + '!';

    // Hide the form (including the instructions) after they answer
    form.style.display = 'none';
});