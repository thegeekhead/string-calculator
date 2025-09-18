function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function parseDelimiterAndNumbers(input) {
    if (!input.startsWith("//")) {
        return { delimiters: [",", "\n"], numbers: input };
    }

    const [delimiterLine, numbers] = input.split("\n");

    const matches = delimiterLine.match(/\[.*?\]/g);
    const delimiters = matches
        ? matches.map(m => m.slice(1, -1))
        : [delimiterLine.slice(2)];

    return { delimiters, numbers };
}

function validateNoNegatives(nums) {
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }
}

function filterLargeNumbers(nums) {
    return nums.filter(n => n <= 1000);
}

function add(numbers) {
    if (numbers === "") return 0;

    const { delimiters, numbers: numString } = parseDelimiterAndNumbers(numbers);

    const delimiterRegex = new RegExp(
        delimiters.map(d => escapeRegex(d)).join("|"),
        "g"
    );

    const nums = numString
        .split(delimiterRegex)
        .map(n => parseInt(n, 10))
        .filter(n => !isNaN(n));

    validateNoNegatives(nums);

    return filterLargeNumbers(nums).reduce((sum, n) => sum + n, 0);
}

module.exports = add;
