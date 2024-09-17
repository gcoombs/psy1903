// Create variables to store references to elements on the page
let form = document.getElementsByTagName('form')[0];
let results = document.getElementById('results');
// Generate a new variable we want to put back into the equation blank space in html
let equation = document.getElementById('equation');

// Want to check that this is doing anything before we actually do the equation
equation.innerHTML = 'Hello World';

// Listen for the form to be submitted
form.addEventListener('submit', function (event) {

    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let response = form.elements['response'].value;

    // Report the results
    results.innerHTML = 'Hello ' + response + '!';
});