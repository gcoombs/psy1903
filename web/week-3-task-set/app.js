// Identify elements on the page we will update
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

// Generate random numbers to display on page load
let randomNum1 = Math.floor(Math.random() * 10) + 1;
let randomNum2 = Math.floor(Math.random() * 10) + 1;

// Update elements on the page
num1.innerHTML = randomNum1;
num2.innerHTML = randomNum2;

// Create variables to store references to elements on the page
let form = document.getElementsByTagName('form')[0];
let results = document.getElementById('results');

// Listen for the form to be submitted
form.addEventListener('submit', function (event) {

    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let response = form.elements['response'].value;

    // Hide the math problem
    form.style.display = 'none';

    // Report the results
    results.innerHTML = 'You answered ' + response + '!';
});
