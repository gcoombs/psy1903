// Generate two random numbers and correct answer to their sum
let num1 = Math.floor(Math.random() * 10) + 1;;
let num2 = Math.floor(Math.random() * 10) + 1;;
let correctAnswer1 = num1 + num2;

// Generate text string for math question
let question1 = 'What is ' + num1 + ' + ' + num2 + '?';

// Display math question with input form
let questionParagraph1 = document.getElementById('questionParagraph1');
questionParagraph1.innerHTML = question1;

mathForm1.addEventListener('submit', function (event) {
    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let result1 = mathForm1.elements['answer1'].value;

    // Generate correct/incorrect feedback
    feedback = '';
    if (result1 == correctAnswer1) {
        feedback = "You got it correct!";
    } else {
        feedback = "You got it incorrect.";
    }
    let fullFeedback = feedback + ' The answer is ' + correctAnswer1 + '.';
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

mathForm2.addEventListener('submit', function (event) {
    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let result2 = mathForm2.elements['answer2'].value;

    // Generate correct/incorrect feedback
    feedback = '';
    if (result2 == correctAnswer2) {
        feedback = "You got it correct!";
    } else {
        feedback = "You got it incorrect.";
    }
    let fullFeedback = feedback + ' The answer is ' + correctAnswer2 + '.';
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

mathForm3.addEventListener('submit', function (event) {
    // Prevent the default form submission b
    event.preventDefault();

    // Collect the response
    let result3 = mathForm3.elements['answer3'].value;

    // Generate correct/incorrect feedback
    feedback = '';
    if (result3 == correctAnswer3) {
        feedback = "You got it correct!";
    } else {
        feedback = "You got it incorrect.";
    }
    let fullFeedback = feedback + ' The answer is ' + correctAnswer3 + '.';
    results3.innerHTML = fullFeedback;
});

