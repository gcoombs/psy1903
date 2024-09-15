// Create variables to store references to elements on the page
let form = document.getElementsByTagName('form')[0];
let results = document.getElementById('results');

// Listen for the form to be submitted
form.addEventListener('submit', function (event) {

    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let name = form.elements['name'].value;

    let over18 = form.elements['age'].checked;

    let resultsMessage = '';

    if (over18) {
        resultsMessage = 'Hello ' + name + '!';
    } else {
        resultsMessage = 'Thank you for your interest, but this experiment is only for people over 18 years old.'
    }

    // Report the results
    results.innerHTML = resultsMessage;
});