function add(numbers) {
    if (numbers === "") return 0;

    return numbers
        .split(/[\n,]/) // split by comma OR newline
        .map(num => parseInt(num, 10))
        .reduce((sum, num) => sum + num, 0);
}

module.exports = add;
