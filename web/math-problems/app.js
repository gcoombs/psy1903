// Get references to the page elements
let num1Element = document.getElementById('num1');
let num2Element = document.getElementById('num2');
let responseInput = document.getElementById("response");
let feedback = document.getElementById("feedback");
let form = document.getElementById("form");
let instructions = document.getElementById("instructions");

// Generate random numbers
let randomnum1 = Math.floor(Math.random() * 100);
let randomnum2 = Math.floor(Math.random() * 100);
let correctAnswer = randomNum1 + randomNum2;

// Display numbers on the page
num1Element.textContent = randomNum1;
num2Element.textContent = randomNum2;

// Timing
let startTime = Date.now();

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let endTime = Date.now();
    let timeToRespond = ((endTime - startTime) / 1000).toFixed(2); // seconds
    let userAnswer = Number(responseInput.value);

    let resultMsg = 'You answered ' + userAnswer + ' in ' + timeToRespond + ' seconds. Your response was ';

    if (userAnswer === correctAnswer) {
        resultMsg += "CORRECT.";
    } else {
        resultMsg += 'INCORRECT. The correct answer was ' + correctAnswer + '.';
    }

    feedback.textContent = resultMsg;

    // Hide the form and instructions after answer
    form.style.display = 'none';
    instructions.style.display = 'none';
});
