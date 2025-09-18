/**
 * Add numbers from a string.
 * Current: only implements empty string case reliably.
 */
function add(numbers) {
    if (numbers === '') return 0;
    // Keep behavior explicit for future steps
    return Number(numbers);
}

module.exports = add;