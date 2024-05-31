// 중급 문제

// 문제 1: 주어진 숫자 배열의 평균을 계산하는 함수를 작성하세요.
function averageArray(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log('중급 문제 1:', averageArray([1, 2, 3, 4, 5]));  // 출력: 3

// 문제 2: 주어진 문자열 배열에서 각 문자열의 첫 글자를 대문자로 변환하는 함수를 작성하세요.
function capitalizeFirstLetter(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}
console.log('중급 문제 2:', capitalizeFirstLetter(['hello', 'world']));  // 출력: ['Hello', 'World']

// 문제 3: 주어진 숫자 배열의 중간값을 계산하는 함수를 작성하세요.
function medianArray(arr) {
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}
console.log('중급 문제 3:', medianArray([5, 2, 1, 3, 4]));  // 출력: 3

// 문제 4: 주어진 문자열 배열에서 모든 문자열을 하나의 문자열로 결합하는 함수를 작성하세요.
function joinStrings(arr) {
    return arr.join(' ');
}
console.log('중급 문제 4:', joinStrings(['Hello', 'world']));  // 출력: 'Hello world'

// 문제 5: 주어진 숫자 배열에서 중복된 숫자를 제거하고 각 숫자의 제곱을 반환하는 함수를 작성하세요.
function uniqueSquareNumbers(arr) {
    return [...new Set(arr)].map(num => num * num);
}
console.log('중급 문제 5:', uniqueSquareNumbers([1, 2, 2, 3, 4, 4, 5]));  // 출력: [1, 4, 9, 16, 25]

// 문제 6: 주어진 숫자 배열에서 두 번째로 큰 숫자를 반환하는 함수를 작성하세요.
function secondLargestNumber(arr) {
    let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueArr[1];
}
console.log('중급 문제 6:', secondLargestNumber([1, 2, 3, 4, 5, 5, 4]));  // 출력: 4

// 문제 7: 주어진 문자열 배열에서 각 문자열을 역순으로 정렬하는 함수를 작성하세요.
function reverseSortStrings(arr) {
    return arr.map(str => str.split('').reverse().join('')).sort();
}
console.log('중급 문제 7:', reverseSortStrings(['apple', 'banana', 'cherry']));  // 출력: ['ananab', 'elppa', 'yrrehc']

// 문제 8: 주어진 숫자 배열에서 짝수인 숫자의 개수를 세는 함수를 작성하세요.
function countEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).length;
}
console.log('중급 문제 8:', countEvenNumbers([1, 2, 3, 4, 5, 6]));  // 출력: 3

// 문제 9: 주어진 문자열 배열에서 길이가 가장 긴 문자열을 반환하는 함수를 작성하세요.
function longestString(arr) {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log('중급 문제 9:', longestString(['a', 'ab', 'abc', 'abcd']));  // 출력: 'abcd'

// 문제 10: 주어진 숫자 배열에서 모든 숫자를 제곱한 값의 합을 계산하는 함수를 작성하세요.
function sumOfSquares(arr) {
    return arr.map(num => num * num).reduce((sum, num) => sum + num, 0);
}
console.log('중급 문제 10:', sumOfSquares([1, 2, 3, 4, 5]));  // 출력: 55

// 문제 11: 주어진 숫자 배열에서 홀수만을 포함하는 새로운 배열을 반환하는 함수를 작성하세요.
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log('중급 문제 11:', filterOddNumbers([1, 2, 3, 4, 5]));  // 출력: [1, 3, 5]

// 문제 12: 주어진 문자열 배열에서 각 문자열을 거꾸로 변환한 새로운 배열을 반환하는 함수를 작성하세요.
function reverseStringsArray(arr) {
    return arr.map(str => str.split('').reverse().join(''));
}
console.log('중급 문제 12:', reverseStringsArray(['abc', 'def']));  // 출력: ['cba', 'fed']

// 문제 13: 주어진 숫자 배열에서 특정 값보다 큰 숫자만을 포함하는 새로운 배열을 반환하는 함수를 작성하세요.
function filterGreaterThan(arr, threshold) {
    return arr.filter(num => num > threshold);
}
console.log('중급 문제 13:', filterGreaterThan([1, 2, 3, 4, 5], 3));  // 출력: [4, 5]

// 문제 14: 주어진 숫자 배열에서 각 숫자에 대해 제곱근을 계산한 배열을 반환하는 함수를 작성하세요.
function squareRoots(arr) {
    return arr.map(num => Math.sqrt(num));
}
console.log('중급 문제 14:', squareRoots([1, 4, 9, 16, 25]));  // 출력: [1, 2, 3, 4, 5]

// 문제 15: 주어진 문자열 배열에서 길이가 짝수인 문자열만을 포함하는 배열을 반환하는 함수를 작성하세요.
function filterEvenLengthStrings(arr) {
    return arr.filter(str => str.length % 2 === 0);
}
console.log('중급 문제 15:', filterEvenLengthStrings(['a', 'ab', 'abc', 'abcd']));  // 출력: ['ab', 'abcd']

// 문제 16: 주어진 숫자 배열에서 각 숫자에 대해 절대값을 반환하는 함수를 작성하세요.
function absoluteValues(arr) {
    return arr.map(num => Math.abs(num));
}
console.log('중급 문제 16:', absoluteValues([-1, -2, 3, -4, 5]));  // 출력: [1, 2, 3, 4, 5]

// 문제 17: 주어진 숫자 배열에서 각 숫자에 대해 두 배의 값을 반환하는 함수를 작성하세요.
function doubleValues(arr) {
    return arr.map(num => num * 2);
}
console.log('중급 문제 17:', doubleValues([1, 2, 3, 4, 5]));  // 출력: [2, 4, 6, 8, 10]

// 문제 18: 주어진 문자열 배열에서 각 문자열의 길이를 반환하는 함수를 작성하세요.
function stringLengthsArray(arr) {
    return arr.map(str => str.length);
}
console.log('중급 문제 18:', stringLengthsArray(['hello', 'world']));  // 출력: [5, 5]

// 문제 19: 주어진 숫자 배열에서 각 숫자의 세 배의 값을 반환하는 함수를 작성하세요.
function tripleValues(arr) {
    return arr.map(num => num * 3);
}
console.log('중급 문제 19:', tripleValues([1, 2, 3, 4, 5]));  // 출력: [3, 6, 9, 12, 15]

// 문제 20: 주어진 문자열 배열에서 각 문자열을 소문자로 변환하는 함수를 작성하세요.
function toLowerCaseArray(arr) {
    return arr.map(str => str.toLowerCase());
}
console.log('중급 문제 20:', toLowerCaseArray(['HELLO', 'WORLD']));  // 출력: ['hello', 'world']

