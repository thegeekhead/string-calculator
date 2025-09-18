function add(numbers) {
    if (numbers === "") return 0;

    const delimiters = /[\n,]/;

    return numbers
        .split(delimiters)
        .map(num => parseInt(num, 10))
        .reduce((sum, num) => sum + num, 0);
}

module.exports = add;
