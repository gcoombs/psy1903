let jsPsych = initJsPsych();
// console.log('initJsPsych:', typeof initJsPsych);

let timeline = [];

// Welcome
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Welcome to the Math Response Time Task!</h1> 
    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Click on the correct answer below each question.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press SPACE to begin.</p>
    `,
    choices: [' '],
};
timeline.push(welcomeTrial);

let conditions = [];

for (let i = 0; i < 3; i++) {

    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);
    let correctAnswer = num1 + num2;

    // Generate a random alternative answer
    let altAnswer = getRandomNumber(1, 10) + getRandomNumber(1, 10);

    // Option A to make sure correctAnswer and altAnswer don't match
    // Uses a "while" loop which we haven't covered, but could be arrived upon with AI assistance
    // let altAnswer = 0;
    // while (altAnswer == 0 || altAnswer == correctAnswer) {
    //     altAnswer = getRandomNumber(1, 10) + getRandomNumber(1, 10);
    // }

    // Option B to make sure correctAnswer and altAnswer don't match
    // If they do match, just subtract some random number from the alternative answer and make sure it's positive
    if (altAnswer == correctAnswer) {
        altAnswer = Math.abs(correctAnswer - getRandomNumber(1, 10));
    }

    conditions.push({
        num1: num1,
        num2: num2,
        correctAnswer: correctAnswer,
        altAnswer: altAnswer,
    });
}

// console.log(conditions);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (condition of conditions) {

    let choices = [condition.correctAnswer, condition.altAnswer];
    choices = jsPsych.randomization.repeat(choices, 1);

    let trial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p>What is ${condition.num1} + ${condition.num2}?</p>`,
        choices: choices,
        data: {
            collect: true,
        },
        on_finish: function (data) {
            data.num1 = condition.num1;
            data.num2 = condition.num2;
            data.correctAnswer = condition.correctAnswer;
            data.altAnswer = condition.altAnswer;
            data.answer = data.response.answer;

            // Use the response index to see what choice they picked and if it matched the correct answer
            data.correct = choices[data.response] == condition.correctAnswer;
        }
    };
    timeline.push(trial);
}

// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['response', 'stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv();
        console.log(data);
    }
}
timeline.push(debriefTrial);

jsPsych.run(timeline);
