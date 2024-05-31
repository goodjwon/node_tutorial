// 고급 문제

// 문제 1: 주어진 숫자 배열에서 모든 숫자의 팩토리얼을 계산하여 새로운 배열을 반환하는 함수를 작성하세요.
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
function factorialArray(arr) {
    return arr.map(factorial);
}
console.log('고급 문제 1:', factorialArray([1, 2, 3, 4, 5]));  // 출력: [1, 2, 6, 24, 120]

// 문제 2: 주어진 배열에서 모든 객체의 특정 키 값을 더하는 함수를 작성하세요.
function sumByKey(arr, key) {
    return arr.reduce((sum, obj) => sum + (obj[key] || 0), 0);
}
console.log('고급 문제 2:', sumByKey([{a: 1}, {a: 2}, {a: 3}], 'a'));  // 출력: 6

// 문제 3: 주어진 배열에서 중복된 숫자를 모두 제거하고 남은 숫자들을 정렬하여 반환하는 함수를 작성하세요.
function uniqueSortedArray(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
}
console.log('고급 문제 3:', uniqueSortedArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // 출력: [1, 2, 3, 4, 5, 6, 9]

// 문제 4: 주어진 배열에서 각 숫자를 2진수 문자열로 변환하여 반환하는 함수를 작성하세요.
function toBinaryArray(arr) {
    return arr.map(num => num.toString(2));
}
console.log('고급 문제 4:', toBinaryArray([1, 2, 3, 4, 5]));  // 출력: ['1', '10', '11', '100', '101']

// 문제 5: 주어진 배열에서 각 숫자를 제곱한 후 짝수인 숫자만 필터링하여 반환하는 함수를 작성하세요.
function squaredEvenNumbers(arr) {
    return arr.map(num => num * num).filter(num => num % 2 === 0);
}
console.log('고급 문제 5:', squaredEvenNumbers([1, 2, 3, 4, 5]));  // 출력: [4, 16]

// 문제 6: 주어진 문자열 배열에서 모든 문자열을 합치고, 중복된 문자는 제거한 문자열을 반환하는 함수를 작성하세요.
function uniqueConcatStrings(arr) {
    return [...new Set(arr.join(''))].join('');
}
console.log('고급 문제 6:', uniqueConcatStrings(['abc', 'bcd', 'cde']));  // 출력: 'abcde'

// 문제 7: 주어진 배열에서 각 숫자에 대해 소수 여부를 검사하여 반환하는 함수를 작성하세요.
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function primeCheckArray(arr) {
    return arr.map(isPrime);
}
console.log('고급 문제 7:', primeCheckArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  // 출력: [false, true, true, false, true, false, true, false, false, false]

// 문제 8: 주어진 배열에서 각 객체의 키를 기준으로 그룹화하는 함수를 작성하세요.
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const groupKey = obj[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(obj);
        return acc;
    }, {});
}
console.log('고급 문제 8:', groupBy([{a: 1}, {a: 2}, {a: 1}], 'a'));  // 출력: { '1': [ { a: 1 }, { a: 1 } ], '2': [ { a: 2 } ] }

// 문제 9: 주어진 숫자 배열에서 연속되는 숫자의 길이를 계산하여 배열로 반환하는 함수를 작성하세요.
function consecutiveLengths(arr) {
    if (arr.length === 0) return [];
    let lengths = [];
    let currentLength = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentLength++;
        } else {
            lengths.push(currentLength);
            currentLength = 1;
        }
    }
    lengths.push(currentLength);
    return lengths;
}
console.log('고급 문제 9:', consecutiveLengths([1, 2, 3, 5, 6, 7, 9]));  // 출력: [3, 3, 1]

// 문제 10: 주어진 배열에서 문자열의 등장 빈도를 계산하여 객체로 반환하는 함수를 작성하세요.
function frequencyCounter(arr) {
    return arr.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
}
console.log('고급 문제 10:', frequencyCounter(['a', 'b', 'a', 'c', 'b', 'a']));  // 출력: { a: 3, b: 2, c: 1 }

// 문제 11: 주어진 배열에서 문자열 길이가 짝수인 문자열만 필터링하여 길이를 반환하는 함수를 작성하세요.
function evenLengthStringsLength(arr) {
    return arr.filter(str => str.length % 2 === 0).map(str => str.length);
}
console.log('고급 문제 11:', evenLengthStringsLength(['a', 'ab', 'abc', 'abcd']));  // 출력: [2, 4]

// 문제 12: 주어진 배열에서 각 숫자를 두 배로 만들고, 결과 배열의 평균을 계산하는 함수를 작성하세요.
function averageDoubledArray(arr) {
    let doubled = arr.map(num => num * 2);
    let sum = doubled.reduce((acc, num) => acc + num, 0);
    return sum / doubled.length;
}
console.log('고급 문제 12:', averageDoubledArray([1, 2, 3, 4, 5]));  // 출력: 6

// 문제 13: 주어진 배열에서 가장 많이 등장한 문자열을 반환하는 함수를 작성하세요.
function mostFrequentString(arr) {
    let frequency = arr.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
    return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
}
console.log('고급 문제 13:', mostFrequentString(['a', 'b', 'a', 'c', 'b', 'a']));  // 출력: 'a'

// 문제 14: 주어진 배열에서 각 숫자에 대해 n제곱을 계산하여 배열로 반환하는 함수를 작성하세요.
function powerArray(arr, n) {
    return arr.map(num => Math.pow(num, n));
}
console.log('고급 문제 14:', powerArray([1, 2, 3, 4, 5], 3));  // 출력: [1, 8, 27, 64, 125]

// 문제 15: 주어진 배열에서 문자열을 구분자(",")로 결합하여 반환하는 함수를 작성하세요.
function joinWithComma(arr) {
    return arr.join(',');
}
console.log('고급 문제 15:', joinWithComma(['a', 'b', 'c']));  // 출력: 'a,b,c'

// 문제 16: 주어진 배열에서 모든 숫자를 16진수 문자열로 변환하여 배열로 반환하는 함수를 작성하세요.
function toHexArray(arr) {
    return arr.map(num => num.toString(16));
}
console.log('고급 문제 16:', toHexArray([10, 15, 255]));  // 출력: ['a', 'f', 'ff']

// 문제 17: 주어진 배열에서 각 숫자를 세 제곱하여 반환하는 함수를 작성하세요.
function cubeArray(arr) {
    return arr.map(num => num * num * num);
}
console.log('고급 문제 17:', cubeArray([1, 2, 3, 4, 5]));  // 출력: [1, 8, 27, 64, 125]

// 문제 18: 주어진 배열에서 각 문자열을 역순으로 정렬하여 반환하는 함수를 작성하세요.
function reverseSortStrings(arr) {
    return arr.map(str => str.split('').reverse().join('')).sort();
}
console.log('고급 문제 18:', reverseSortStrings(['banana', 'apple', 'cherry']));  