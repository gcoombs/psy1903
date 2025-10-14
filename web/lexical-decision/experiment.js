let jsPsych = initJsPsych();
let timeline = [];

// Welcome
let welcomeTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Welcome to the Lexical Decision Task!</h1> 
    <p>In this experiment, you will be shown a series of characters and asked to categorize whether the characters make up a word or not.</p>
    <p>There are three parts to this experiment.</p>
    <p class='instructions'>Press SPACE to begin the first part.</p>
    `,
    choices: [' '],
};
timeline.push(welcomeTrial);

// Words
for (let block of conditions) {

    let blockIntroTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
            <h1>${block.title}</h1>
            <p>You are about to see a series of characters.</p>
          <p>If the characters make up a word, press the <span class='key'>F</span> key.</p>
          <p>If the characters do not make up a word, press the <span class='key'>J</span> key.</p>
          <p>Press <span class='key'>SPACE</span> to begin.</p>
          `,
        choices: [' '],
    };

    timeline.push(blockIntroTrial);

    // Randomize the conditions in this block
    blockConditions = jsPsych.randomization.repeat(block.conditions, 1);

    for (let condition of blockConditions) {
        let conditionTrial = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `<h1>${condition.characters}</h1>`,
            data: {
                collect: true,
                characters: condition.characters,
                blockId: block.title, // Add a block id to our results data
            },
            choices: ['f', 'j'],
            on_finish: function (data) {
                if (data.response == 'f' && condition.isWord == true) {
                    data.correct = true;
                } else if (data.response == 'j' && condition.isWord == false) {
                    data.correct = true;
                } else {
                    data.correct = false;
                }
            }
        }
        timeline.push(conditionTrial);
    }
}

// Results Trial
let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    choices: ['NO KEYS'],
    async: false,
    stimulus: function () {
        return `
                <h1>Please wait...</h1>
                <span class='loader'></span>
                <p>We are saving the results of your inputs.</p>
            `;
    },
    on_start: function () {
        //  ⭐ Update the following three values as appropriate ⭐
        let prefix = 'lexical-decision';
        let dataPipeExperimentId = 'S2nfZdAH4Xc6';
        let forceOSFSave = true;

        // Filter and retrieve results as CSV data
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();

        // Generate a participant ID based on the current timestamp
        let participantId = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');

        // Dynamically determine if the experiment is currently running locally or on production
        let isLocalHost = window.location.href.includes('localhost');

        let destination = '/save';
        if (!isLocalHost || forceOSFSave) {
            destination = 'https://pipe.jspsych.org/api/data/';
        }

        // Send the results to our saving end point
        fetch(destination, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: dataPipeExperimentId,
                filename: prefix + '-' + participantId + '.csv',
                data: results,
            }),
        }).then(data => {
            console.log(data);
            jsPsych.finishTrial();
        })
    }
}
timeline.push(resultsTrial);

// Debrief
var debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you for participating!</h1>
    <p>You may close this window.</p>
    `,
    choices: ["NO KEYS"],
};
timeline.push(debriefTrial);

// Run the timeline
jsPsych.run(timeline)