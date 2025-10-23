//INTRODUCTION
let parties = ['democrat', 'republican', 'n/a']


timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <h1>Instructions</h1>
        <p>In this study, you will be asked to press different keys to categorize positive valence, negative valence, or politically charged words.</p>
        <p>Your job is to decide as quickly and accurately as possible whether the word is positive valence, negative valence, Democrat-related, or Republican-related.</p>
        <p>Please indicate your political party below.</p>`,
    choices: parties,
    data: { collect: true },
    on_finish: function (data) {
        let selectedParty = parties[data.response];
        if (selectedParty === 'n/a') {
            jsPsych.abortExperiment('You do not identify as the Democratic or Republican party.')
        }
    }
});

//----full screen----
let enterFullScreenTrial = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
};

timeline.push(enterFullScreenTrial);


// INSTRUCTIONS FOR BLOCK 1
timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
        Use <strong>F</strong> for <strong>Positive / Democrat</strong> and <strong> J</strong > for <strong>Negative / Republican</strong>.
        <p>Press <span class= 'key'>SPACE</span> to begin.</p > `,
    choices: [' ']
});


// ----BLOCK 1------
// Block 1 Trials

for (let i = 0; i < block1Shuffled.length; i++) {
    let target1 = block1Shuffled[i];
    timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
            <span class = 'category1'> <strong>Positive / Democrat</strong> (press F)
            <span class='category2'> <strong>Negative / Republican</strong> (press J)
            <p class='word'>${target1}</p>`,
        choices: ['f', 'j'],
        data: {
            collect: true,
            target: target1
        },
        on_finish: function (data) {
            let catPositive1 = positive.includes(target1);
            let catNegative1 = negative.includes(target1);
            let catDemocrat1 = democrat.includes(target1);
            let catRepublican1 = republican.includes(target1);
            let responseKey1 = data.response;
            let correctKey1 =
                ((catPositive1 || catDemocrat1) && responseKey1 === 'f') ||
                ((catNegative1 || catRepublican1) && responseKey1 === 'j');
            data.correct = correctKey1;
        }
    })
}


//------INSTRUCTIONS FOR BLOCK 2-------
timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    Now use <strong>F</strong> for <strong>Negative / Democrat</strong> and <strong>J</strong> for <strong>Positive / Republican</strong>.
    <p>Press <span class='key'>SPACE</span> to begin.</p>`,
    choices: [' ']
});


// ------BLOCK 2-------
// Block 2 Trials
for (let i = 0; i < block2Shuffled.length; i++) {
    let target2 = block2Shuffled[i];
    timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
    <span class='category1'> <strong>Negative / Democrat</strong> (press F)
        <span class='category2'> <strong>Positive / Republican</strong> (press J)
            <p class='word'>${target2}</p>`,
        choices: ['f', 'j'],
        data: {
            collect: true,
            target: target2
        },
        on_finish: function (data) {
            let catPositive2 = positive.includes(target2);
            let catNegative2 = negative.includes(target2);
            let catDemocrat2 = democrat.includes(target2);
            let catRepublican2 = republican.includes(target2);
            let responseKey2 = data.response;
            let correctKey2 =
                ((catNegative2 || catDemocrat2) && responseKey2 === 'f') ||
                ((catPositive2 || catRepublican2) && responseKey2 === 'j');
            data.correct = correctKey2;
        }
    })
}


// Save Results
let resultsTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Please wait...</h1>
       <span class='loader'></span>
       <p>We are saving the results of your inputs.</p>
       `,
    choices: ['NO_KEYS'],
    on_start: function () {
        let prefix = 'IAT';
        let dataPipeExperimentId = 'keNAkoSIealZ';
        let forceOSFSave = true;
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv();
        let participantId = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');
        let isLocalHost = window.location.href.includes('localhost');
        let destination = '/save';
        if (!isLocalHost || forceOSFSave) {
            destination = 'https://pipe.jspsych.org/api/data/';
        }
        fetch(destination, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: dataPipeExperimentId,
                filename: prefix + '-' + participantId + '.csv',
                data: data,
            }),
        }).then(data => {
            console.log(data);
            jsPsych.finishTrial();
        })
    },
};
timeline.push(resultsTrial);

//----exit full screen----
let exitFullScreenTrial = {
    type: jsPsychFullscreen,
    fullscreen_mode: false
};
timeline.push(exitFullScreenTrial);

// Debrief
let debrief = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
            <h1>Thank you!</h1>
            <p>The task you just completed is a variant of the Implicit Association Task.</p>
            <p>In this experiment, we are interested in whether people's own political affiliation affects their responses to different stimuli.</p>
            <p>By measuring both response speed and accuracy, we can learn more about how people’s own political affiliations may be related to the attitudes they hold toward their own party and the opposite party.</p>
            <p>Your responses will be combined with those of other participants to help us answer these questions. Individual data will remain confidential.</p>
            <p>Thank you again for your time and contribution.</p>`,
    choices: ['NO KEYS']
}
timeline.push(debrief)

jsPsych.run(timeline);