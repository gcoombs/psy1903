# Outside Resources Log - Week 3


## AI Prompts
_1. How do I use innerHTML to place text saying "What is 2 + 2?" into a form paragraph?_

_2. I have this JavaScript code:_
```
let num1 = Math.floor(Math.random() * 10) + 1;;
let num2 = Math.floor(Math.random() * 10) + 1;;
let correctAnswer = num1 + num2;
let question1 = 'What is ' + num1 + ' + ' + num2 + '?';
```
_I then want question1 to be displayed as the input to a form question using innerHTML. How do I do this?_

_3. I have the following JavaScript Code. Where do I put the Date.now() lines to accurately capture the time the question is put up on the screen and the time the answer is submitted?_
```
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
    let start1 = Date.now();
    let result1 = mathForm1.elements['answer1'].value;
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
```

_4. Using html & JavaScript, how do I load a new page once a submit button has been hit?_

_5. Where do I put form.style.display = 'none';?_

_6. I have this html code:
```
<!doctype html>
<html lang='en'>

<head>
    <title>Math with Results on Page</title>
    <link href=data:, rel=icon>
    <script src='app.js' defer></script>
</head>

<body>
    <h1>Math with Results on Page</h1>
    <p>Answer the following question as quickly and accurately as possible.</p>

    <form id="mathForm1">
        <p id="questionParagraph1"></p>
        <input type='text' name='answer1'>
        <button type='submit'>Submit</button>
    </form>
    <p id='results1'></p>

</body>

</html>
```

_And this JavaScript in my app.js:_
```
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
```
_Please identify where the submit event handler is_

_7. In the above code, where would I place "form.style.display = 'none';" in order to not show the math problem after submit has been clicked and only show the fullFeedback?_




## Outside sites
_Link any outside sites you referenced this week. You should exclude any resources/links that were provided in the course material._