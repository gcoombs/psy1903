function getOddNumbers(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            results.push(numbers[i]);
        }
    }
    return results;
}
console.log(getOddNumbers([1, 2, 3, 4, 5])); // Expected output: [1, 3, 5] console.log(getOddNumbers([12, 45, 10, 11, 61])); // Expected output: [45, 11, 61]