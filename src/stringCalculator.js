function add(numbers) {
    if (numbers === '') return 0;

    const parts = numbers.split(',');
    if (parts.length === 1) {
        return Number(parts[0]);
    }

    if (parts.length === 2) {
        return Number(parts[0]) + Number(parts[1]);
    }

    return 0;
}

module.exports = add;
