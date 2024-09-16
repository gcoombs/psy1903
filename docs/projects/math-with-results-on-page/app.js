// Generate two random numbers and correct answer to their sum
let num1 = Math.floor(Math.random() * 10) + 1;;
let num2 = Math.floor(Math.random() * 10) + 1;;
let correctAnswer1 = num1 + num2;

// Generate text string for math question
let question1 = 'What is ' + num1 + ' + ' + num2 + '?';

// Display math question with input form
let questionParagraph1 = document.getElementById('questionParagraph1');
questionParagraph1.innerHTML = question1;

// Capture the start time when the question is displayed
let start1 = Date.now();

mathForm1.addEventListener('submit', function (event) {
    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let result1 = mathForm1.elements['answer1'].value;

    // Collect submit time and calculate RT
    let end1 = Date.now();
    let rt1 = (end1 - start1) / 1000;

    // Generate correct/incorrect feedback
    feedback = '';
    if (result1 == correctAnswer1) {
        feedback = '(correct)';
    } else {
        feedback = '(incorrect)';
    }
    let fullFeedback = 'You answered ' + result1 + ' ' + feedback + ' in ' + rt1 + ' seconds.';
    results1.innerHTML = fullFeedback;
});
