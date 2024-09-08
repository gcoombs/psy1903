let experiment = 'Stroop';
// console.log(typeof experiment); // Expected: string
// console.log(experiment.charAt(0)); // Expected: 'S'

let welcomeMessage = `
Welcome to our ` + experiment + ` experiment! 
Please read the instructions carefully.
Please complete the ` + experiment + ` experiment in a quiet and secluded space, free from distractions.
`;
console.log(welcomeMessage);

let trialCountMax = 20;
// console.log(typeof trialCountMax); // Expected: number
// console.log(trialCountMax.charAt(0));

// TODO: Randomize colors
let colors = ['red', 'green', 'blue'];

// alert('Welcome to the ' + experiment + ' experiment!')

trialCountMax = 40;

// At the halfway point we will display a pause screen
let halfWayCount = trialCountMax / 2;

// console.log(halfWayCount); // Expected: 20

let correct = true;
console.log(typeof correct);

console.log(10 > 15); // Expected: false