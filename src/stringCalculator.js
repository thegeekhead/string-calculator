function parseDelimiterAndNumbers(input) {
    if (input.startsWith("//")) {
        const [delimiterLine, numbers] = input.split("\n");
        const delimiter = new RegExp(`[${delimiterLine.slice(2)}]`);
        return { delimiter, numbers };
    }
    return { delimiter: /[\n,]/, numbers: input };
}

function add(numbers) {
    if (numbers === "") return 0;

    const { delimiter, numbers: numString } = parseDelimiterAndNumbers(numbers);

    return numString
        .split(delimiter)
        .map(num => parseInt(num, 10))
        .reduce((sum, num) => sum + num, 0);
}

module.exports = add;
