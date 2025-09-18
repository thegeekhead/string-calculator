function add(numbers) {
    if (numbers === '') return 0;

    const parts = numbers.split(',');
    if (parts.length === 1) {
        return Number(parts[0]);
    }

    return 0;
}

module.exports = add;
