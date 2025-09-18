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

test('should support custom single-character delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n4|5|6")).toBe(15);
});

test('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negatives not allowed: -2");
    expect(() => add("//;\n-1;2;-3")).toThrow("negatives not allowed: -1,-3");
});

test('should ignore numbers bigger than 1000', () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1")).toBe(1001);
    expect(add("//;\n1002;3;5")).toBe(8);
});