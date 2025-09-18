function add(numbers) {
    // minimal implementation to satisfy the empty-string test
    if (numbers === '') return 0;
    // not handling other cases yet
    return Number(numbers);
}

module.exports = add;