function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;
    let numString = numbers;

    // Check for custom delimiter at the start
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(`[${parts[0].slice(2)}]`); // e.g., //;\n → ;
        numString = parts[1];
    }

    return numString
        .split(delimiter)
        .map(num => parseInt(num, 10))
        .reduce((sum, num) => sum + num, 0);
}

module.exports = add;
