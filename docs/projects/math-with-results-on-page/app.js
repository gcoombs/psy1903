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
        feedback = "You got it correct! The correct answer is " + correctAnswer1;
    } else {
        feedback = "You got it incorrect. The correct answer is " + correctAnswer1;
    }
    let fullFeedback = feedback + ' You answered in ' + rt1 + ' seconds.';
    results1.innerHTML = fullFeedback;
});


// Repeat for Question #2
// Generate two random numbers and correct answer to their sum
let num3 = Math.floor(Math.random() * 10) + 1;;
let num4 = Math.floor(Math.random() * 10) + 1;;
let correctAnswer2 = num3 + num4;

// Generate text string for math question
let question2 = 'What is ' + num3 + ' + ' + num4 + '?';

// Display math question with input form
let questionParagraph2 = document.getElementById('questionParagraph2');
questionParagraph2.innerHTML = question2;

// Capture the start time when the question is displayed
let start2 = Date.now();


mathForm2.addEventListener('submit', function (event) {
    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let result2 = mathForm2.elements['answer2'].value;

    // Collect submit time and calculate RT
    let end2 = Date.now();
    let rt2 = (end2 - start2) / 1000;

    // Generate correct/incorrect feedback
    feedback = '';
    if (result2 == correctAnswer2) {
        feedback = "You got it correct! The correct answer is " + correctAnswer2;
    } else {
        feedback = "You got it incorrect. The correct answer is " + correctAnswer2;
    }
    let fullFeedback = feedback + ' You answered in ' + rt2 + ' seconds.';
    results2.innerHTML = fullFeedback;
});


// Repeat for Question #3
// Generate two random numbers and correct answer to their sum
let num5 = Math.floor(Math.random() * 10) + 1;;
let num6 = Math.floor(Math.random() * 10) + 1;;
let correctAnswer3 = num5 + num6;

// Generate text string for math question
let question3 = 'What is ' + num5 + ' + ' + num6 + '?';

// Display math question with input form
let questionParagraph3 = document.getElementById('questionParagraph3');
questionParagraph3.innerHTML = question3;

// Capture the start time when the question is displayed
let start3 = Date.now();

mathForm3.addEventListener('submit', function (event) {
    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let result3 = mathForm3.elements['answer3'].value;

    // Collect submit time and calculate RT
    let end3 = Date.now();
    let rt3 = (end3 - start3) / 1000;

    // Generate correct/incorrect feedback
    feedback = '';
    if (result3 == correctAnswer3) {
        feedback = "You got it correct! The correct answer is " + correctAnswer3;
    } else {
        feedback = "You got it incorrect. The correct answer is " + correctAnswer3;
    }
    let fullFeedback = feedback + ' You answered in ' + rt3 + ' seconds.';
    results3.innerHTML = fullFeedback;
});

