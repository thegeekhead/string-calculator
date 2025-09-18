const add = require('../src/stringCalculator');

test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
});

test('returns number itself when single number provided', () => {
    expect(add('5')).toBe(5);
});

test('returns sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
});

test('should return the sum of an unknown amount of numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);
});

test('should handle newlines as delimiters along with commas', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
});