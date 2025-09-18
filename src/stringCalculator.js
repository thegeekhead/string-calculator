function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function parseDelimiterAndNumbers(input) {
    if (!input.startsWith("//")) {
        return { delimiter: /[\n,]/, numbers: input };
    }

    const [delimiterLine, numbers] = input.split("\n");

    // Match [ ... ] if present
    const match = delimiterLine.match(/\[(.+)\]/);
    const delimiterPattern = match ? match[1] : delimiterLine.slice(2);

    return {
        delimiter: new RegExp(escapeRegex(delimiterPattern), "g"),
        numbers,
    };
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
