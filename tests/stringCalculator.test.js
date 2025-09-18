const add = require('../src/stringCalculator');

test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
});

test('returns number itself when single number provided', () => {
    expect(add('5')).toBe(5);
});
