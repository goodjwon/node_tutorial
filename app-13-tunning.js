function sortStringsByLength(strings) {
    for (let i = 0; i < strings.length; i++) {
        for (let j = 0; j < strings.length - 1; j++) {
            if (strings[j].length > strings[j + 1].length) {
                // Swap the strings
                let temp = strings[j];
                strings[j] = strings[j + 1];
                strings[j + 1] = temp;
            }
        }
    }
    return strings;
}

const sortByLength = (arr) => {
    return arr.sort((a, b) => a.length - b.length);
};

// Generate a large array of random strings
function generateRandomStrings(numStrings, maxLength) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const strings = [];
    for (let i = 0; i < numStrings; i++) {
        let str = '';
        const length = Math.floor(Math.random() * maxLength) + 1;
        for (let j = 0; j < length; j++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        strings.push(str);
    }
    return strings;
}

// Measure the performance
function measurePerformance(sortFunction, data) {
    const start = performance.now();
    const sortedData = sortFunction([...data]); // Use a copy of the data to avoid in-place sorting
    const end = performance.now();
    return {
        time: end - start,
        result: sortedData
    };
}

// Parameters for the test
const numStrings = 1000; // Adjusted to a larger size for performance testing
const maxLength = 100; // Maximum length of the random strings

// Generate the test data
const testData = generateRandomStrings(numStrings, maxLength);

console.log("Test Data:");
console.log(testData);

// Measure the performance of both sorting functions
const performance1 = measurePerformance(sortStringsByLength, testData);
const performance2 = measurePerformance(sortByLength, testData);

console.log(`\nTime taken by sortStringsByLength: ${performance1.time.toFixed(2)} ms`);
console.log("Sorted Data by sortStringsByLength:");
console.log(performance1.result);

console.log(`\nTime taken by sortByLength: ${performance2.time.toFixed(2)} ms`);
console.log("Sorted Data by sortByLength:");
console.log(performance2.result);
