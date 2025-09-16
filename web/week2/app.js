alert("In this experiment we will measure your response time. You will be shown a series of simple math equations. Answer these equations as quickly and accurately as you can.");
let start = Date.now();
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let answer1 = prompt(`What is ${num1} + ${num2}?`);
let end = Date.now();
let Response1 = (end - start) / 1000
alert("You answered " + answer1 + "In" + Response1 + "seconds");

let random2 = Math.floor(Math.random() * 10) + 1;
let start2 = Date.now();
let num3 = Math.floor(Math.random() * 10) + 1;
let num4 = Math.floor(Math.random() * 10) + 1;
let answer2 = prompt(`What is ${num3} + ${num4}?`);
let end2 = Date.now();
let Response2 = (end2 - start2) / 1000;
alert("You answered " + answer2 + "In" + Response2 + "seconds");


let random3 = Math.floor(Math.random() * 10) + 1;
let start3 = Date.now();
let num5 = Math.floor(Math.random() * 10) + 1;
let num6 = Math.floor(Math.random() * 10) + 1;
let answer3 = prompt(`What is ${num5} + ${num6}?`);
let end3 = Date.now();
let Response3 = (end3 - start3) / 1000;
alert("You answered " + answer3 + " in " + Response3 + " seconds");



window.onload = function () {
    alert("Thank you for your participation!");
};