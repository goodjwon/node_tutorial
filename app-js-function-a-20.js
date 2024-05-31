// 초급 문제

// 문제 1: 주어진 숫자 배열의 각 요소를 제곱하여 새로운 배열을 반환하는 함수를 작성하세요.
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log('초급 문제 1:', squareNumbers([1, 2, 3, 4, 5]));  // 출력: [1, 4, 9, 16, 25]

// 문제 2: 주어진 문자열 배열의 길이를 반환하는 함수를 작성하세요.
function stringLengths(arr) {
    return arr.map(str => str.length);
}
console.log('초급 문제 2:', stringLengths(['hello', 'world']));  // 출력: [5, 5]

// 문제 3: 숫자 배열의 모든 요소를 더하는 함수를 작성하세요.
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log('초급 문제 3:', sumArray([1, 2, 3, 4, 5]));  // 출력: 15

// 문제 4: 주어진 숫자 배열에서 짝수만 반환하는 함수를 작성하세요.
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log('초급 문제 4:', filterEvenNumbers([1, 2, 3, 4, 5]));  // 출력: [2, 4]

// 문제 5: 주어진 문자열 배열을 대문자로 변환하는 함수를 작성하세요.
function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log('초급 문제 5:', toUpperCaseArray(['hello', 'world']));  // 출력: ['HELLO', 'WORLD']

// 문제 6: 주어진 숫자 배열에서 3보다 큰 숫자만 반환하는 함수를 작성하세요.
function filterGreaterThanThree(arr) {
    return arr.filter(num => num > 3);
}
console.log('초급 문제 6:', filterGreaterThanThree([1, 2, 3, 4, 5]));  // 출력: [4, 5]

// 문제 7: 주어진 숫자 배열의 모든 요소를 곱하는 함수를 작성하세요.
function multiplyArray(arr) {
    return arr.reduce((product, num) => product * num, 1);
}
console.log('초급 문제 7:', multiplyArray([1, 2, 3, 4, 5]));  // 출력: 120

// 문제 8: 주어진 숫자 배열의 각 요소에 1을 더한 배열을 반환하는 함수를 작성하세요.
function incrementArray(arr) {
    return arr.map(num => num + 1);
}
console.log('초급 문제 8:', incrementArray([1, 2, 3, 4, 5]));  // 출력: [2, 3, 4, 5, 6]

// 문제 9: 주어진 문자열 배열에서 길이가 4 이상인 문자열만 반환하는 함수를 작성하세요.
function filterLongStrings(arr) {
    return arr.filter(str => str.length >= 4);
}
console.log('초급 문제 9:', filterLongStrings(['a', 'ab', 'abc', 'abcd', 'abcde']));  // 출력: ['abcd', 'abcde']

// 문제 10: 주어진 숫자 배열에서 모든 숫자가 짝수인지 확인하는 함수를 작성하세요.
function allEvenNumbers(arr) {
    return arr.every(num => num % 2 === 0);
}
console.log('초급 문제 10:', allEvenNumbers([2, 4, 6, 8]));  // 출력: true

// 문제 11: 주어진 문자열 배열에서 모든 문자열이 대문자인지 확인하는 함수를 작성하세요.
function allUpperCase(arr) {
    return arr.every(str => str === str.toUpperCase());
}
console.log('초급 문제 11:', allUpperCase(['HELLO', 'WORLD']));  // 출력: true

// 문제 12: 주어진 숫자 배열에서 적어도 하나의 숫자가 홀수인지 확인하는 함수를 작성하세요.
function someOddNumbers(arr) {
    return arr.some(num => num % 2 !== 0);
}
console.log('초급 문제 12:', someOddNumbers([2, 4, 6, 7]));  // 출력: true

// 문제 13: 주어진 문자열 배열을 문자열 길이 기준으로 오름차순 정렬하는 함수를 작성하세요.
function sortStringsByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
console.log('초급 문제 13:', sortStringsByLength(['a', 'abcd', 'abc', 'ab']));  // 출력: ['a', 'ab', 'abc', 'abcd']

// 문제 14: 주어진 숫자 배열에서 중복된 숫자를 제거하는 함수를 작성하세요.
function uniqueNumbers(arr) {
    return [...new Set(arr)];
}
console.log('초급 문제 14:', uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));  // 출력: [1, 2, 3, 4, 5]

// 문제 15: 주어진 문자열 배열을 알파벳 순으로 정렬하는 함수를 작성하세요.
function sortStringsAlphabetically(arr) {
    return arr.sort();
}
console.log('초급 문제 15:', sortStringsAlphabetically(['banana', 'apple', 'cherry']));  // 출력: ['apple', 'banana', 'cherry']

// 문제 16: 주어진 숫자 배열에서 가장 큰 숫자를 반환하는 함수를 작성하세요.
function maxNumber(arr) {
    return Math.max(...arr);
}
console.log('초급 문제 16:', maxNumber([1, 2, 3, 4, 5]));  // 출력: 5

// 문제 17: 주어진 숫자 배열에서 가장 작은 숫자를 반환하는 함수를 작성하세요.
function minNumber(arr) {
    return Math.min(...arr);
}
console.log('초급 문제 17:', minNumber([1, 2, 3, 4, 5]));  // 출력: 1

// 문제 18: 주어진 숫자 배열을 내림차순으로 정렬하는 함수를 작성하세요.
function sortNumbersDescending(arr) {
    return arr.sort((a, b) => b - a);
}
console.log('초급 문제 18:', sortNumbersDescending([1, 2, 3, 4, 5]));  // 출력: [5, 4, 3, 2, 1]

// 문제 19: 주어진 문자열 배열의 각 문자열을 뒤집은 배열을 반환하는 함수를 작성하세요.
function reverseStrings(arr) {
    return arr.map(str => str.split('').reverse().join(''));
}
console.log('초급 문제 19:', reverseStrings(['abc', 'def']));  // 출력: ['cba', 'fed']

// 문제 20: 주어진 숫자 배열에서 짝수와 홀수를 각각 세는 함수를 작성하세요.
function countEvenAndOdd(arr) {
    let evenCount = arr.filter(num => num % 2 === 0).length;
    let oddCount = arr.filter(num => num % 2 !== 0).length;
    return { even: evenCount, odd: oddCount };
}
console.log('초급 문제 20:', countEvenAndOdd([1, 2, 3, 4, 5, 6]));  // 출력: { even: 3, odd: 3 }
