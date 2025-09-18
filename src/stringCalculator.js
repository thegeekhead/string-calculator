function add(numbers) {
    if (numbers === '') return 0;

    // Single number case
    if (!numbers.includes(',')) {
        return Number(numbers);
    }

    // Other cases will be added later
    return 0;
}

module.exports = add;
