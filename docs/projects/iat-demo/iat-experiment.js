for (let block of conditions) {
    console.log(block);
    // let leftCategory = block.categories[0];
    // console.log(leftCategory);

    for (let trial of block.trials) {
        console.log(trial.word);
    }
}