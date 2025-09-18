function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function parseDelimiterAndNumbers(input) {
    if (input.startsWith("//")) {
        const [delimiterLine, numbers] = input.split("\n");

        let delimiter;
        const match = delimiterLine.match(/\[(.+)\]/);

        if (match) {
            // e.g. //[***] → extract "***"
            delimiter = new RegExp(escapeRegex(match[1]), "g");
        } else {
            // single character delimiter
            delimiter = new RegExp(escapeRegex(delimiterLine.slice(2)), "g");
        }

        return { delimiter, numbers };
    }

    return { delimiter: /[\n,]/, numbers: input };
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

    const { delimiter, numbers: numString } = parseDelimiterAndNumbers(numbers);

    const nums = numString
        .split(delimiter)
        .map(n => parseInt(n, 10))
        .filter(n => !isNaN(n));

    validateNoNegatives(nums);

    return filterLargeNumbers(nums).reduce((sum, n) => sum + n, 0);
}

module.exports = add;
