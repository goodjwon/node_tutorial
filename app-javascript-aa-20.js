// solutions.js

// 문제 1: 주어진 숫자 배열의 각 요소를 제곱하여 새로운 배열을 반환하는 함수
const squareArray = (arr) => {
    const squaredArray = [];
    for (let i = 0; i < arr.length; i++) {
        squaredArray.push(arr[i] ** 2);
    }
    return squaredArray;
};

// 문제 2: 주어진 문자열 배열의 길이를 반환하는 함수
const lengthsOfStrings = (arr) => {
    const lengthsArray = [];
    for (let i = 0; i < arr.length; i++) {
        lengthsArray.push(arr[i].length);
    }
    return lengthsArray;
};

// 문제 3: 숫자 배열의 모든 요소를 더하는 함수
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// 문제 4: 주어진 숫자 배열에서 짝수만 반환하는 함수
const evenNumbers = (arr) => {
    const evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
};

// 문제 5: 주어진 문자열 배열을 대문자로 변환하는 함수
const uppercaseStrings = (arr) => {
    const uppercasedArray = [];
    for (let i = 0; i < arr.length; i++) {
        uppercasedArray.push(arr[i].toUpperCase());
    }
    return uppercasedArray;
};

// 문제 6: 주어진 숫자 배열에서 3보다 큰 숫자만 반환하는 함수
const greaterThanThree = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3) {
            result.push(arr[i]);
        }
    }
    return result;
};

// 문제 7: 주어진 숫자 배열의 모든 요소를 곱하는 함수
const productArray = (arr) => {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
};

// 문제 8: 주어진 숫자 배열의 각 요소에 1을 더한 배열을 반환하는 함수
const incrementArray = (arr) => {
    const incrementedArray = [];
    for (let i = 0; i < arr.length; i++) {
        incrementedArray.push(arr[i] + 1);
    }
    return incrementedArray;
};

// 문제 9: 주어진 문자열 배열에서 길이가 4 이상인 문자열만 반환하는 함수
const lengthGreaterThanFour = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 4) {
            result.push(arr[i]);
        }
    }
    return result;
};

// 문제 10: 주어진 숫자 배열에서 모든 숫자가 짝수인지 확인하는 함수
const allEvenNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
};

// 문제 11: 주어진 문자열 배열에서 모든 문자열이 대문자인지 확인하는 함수
const allUppercaseStrings = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i].toUpperCase()) {
            return false;
        }
    }
    return true;
};

// 문제 12: 주어진 숫자 배열에서 적어도 하나의 숫자가 홀수인지 확인하는 함수
const atLeastOneOddNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return true;
        }
    }
    return false;
};

// 문제 13: 주어진 문자열 배열을 문자열 길이 기준으로 오름차순 정렬하는 함수
const sortByLength = (arr) => {
    return arr.sort((a, b) => a.length - b.length);
};


function sortStringsByLength2(strings) {
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

const mixedStrings2 = ['a', 'abcd', 'abc', 'ab'];
const sortedStrings2 = sortStringsByLength2(mixedStrings2);
console.log(sortedStrings2);




// 문제 14: 주어진 숫자 배열에서 중복된 숫자를 제거하는 함수
const removeDuplicates = (arr) => {
    const uniqueNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueNumbers.includes(arr[i])) {
            uniqueNumbers.push(arr[i]);
        }
    }
    return uniqueNumbers;
};

// 문제 15: 주어진 문자열 배열을 알파벳 순으로 정렬하는 함수
const sortAlphabetically = (arr) => {
    return arr.sort();
};

// 문제 16: 주어진 숫자 배열에서 가장 큰 숫자를 반환하는 함수
const maxNumber = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// 문제 17: 주어진 숫자 배열에서 가장 작은 숫자를 반환하는 함수
const minNumber = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

// 문제 18: 주어진 숫자 배열을 내림차순으로 정렬하는 함수
const sortDescending = (arr) => {
    return arr.sort((a, b) => b - a);
};

// 문제 19: 주어진 문자열 배열의 각 문자열을 뒤집은 배열을 반환하는 함수
const reverseStrings = (arr) => {
    const reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArray.push(arr[i].split('').reverse().join(''));
    }
    return reversedArray;
};

// 문제 20: 주어진 숫자 배열에서 짝수와 홀수를 각각 세는 함수
const countEvenOdd = (arr) => {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return { evenCount, oddCount };
};

// 테스트 실행
const numbers = [1, 2, 3, 4, 5];
const strings = ['hello', 'world'];
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const mixedStrings = ['a', 'abcd', 'abc', 'ab'];
const alphabeticalStrings = ['banana', 'apple', 'cherry'];
const stringsToReverse = ['abc', 'def'];

console.log('문제 1:', squareArray(numbers));
console.log('문제 2:', lengthsOfStrings(strings));
console.log('문제 3:', sumArray(numbers));
console.log('문제 4:', evenNumbers(numbers));
console.log('문제 5:', uppercaseStrings(strings));
console.log('문제 6:', greaterThanThree(numbers));
console.log('문제 7:', productArray(numbers));
console.log('문제 8:', incrementArray(numbers));
console.log('문제 9:', lengthGreaterThanFour(mixedStrings));
console.log('문제 10:', allEvenNumbers([2, 4, 6, 8]));
console.log('문제 11:', allUppercaseStrings(['HELLO', 'WORLD']));
console.log('문제 12:', atLeastOneOddNumber([2, 4, 6, 7]));
console.log('문제 13:', sortByLength(mixedStrings));
console.log('문제 14:', removeDuplicates(numbersWithDuplicates));
console.log('문제 15:', sortAlphabetically(alphabeticalStrings));
console.log('문제 16:', maxNumber(numbers));
console.log('문제 17:', minNumber(numbers));
console.log('문제 18:', sortDescending(numbers));
console.log('문제 19:', reverseStrings(stringsToReverse));
console.log('문제 20:', countEvenOdd([1, 2, 3, 4, 5, 6]));
