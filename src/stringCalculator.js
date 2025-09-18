function add(numbers) {
    if (numbers === '') return 0;

    const parts = numbers.split(',').map(Number);

    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return parts[0] + parts[1];

    return 0; // will evolve for multiple numbers later
}

module.exports = add;
