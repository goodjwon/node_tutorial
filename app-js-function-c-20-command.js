// 문제 1: 팩토리얼 계산 함수
function calculateFactorials(numbers) {
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(factorial(numbers[i]));
    }
    return result;
}

// 문제 2: 객체 키 값 합산 함수
function sumObjectValues(objects, key) {
    let sum = 0;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].hasOwnProperty(key)) {
            sum += objects[i][key];
        }
    }
    return sum;
}

// 문제 3: 중복 제거 및 정렬 함수
function removeDuplicatesAndSort(numbers) {
    const uniqueSet = new Set(numbers);
    const uniqueArray = Array.from(uniqueSet);
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
}

// 문제 4: 2진수 변환 함수
function convertToBinary(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i].toString(2));
    }
    return result;
}

// 문제 5: 제곱 및 짝수 필터링 함수
function squareAndFilterEven(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        const squared = numbers[i] * numbers[i];
        if (squared % 2 === 0) {
            result.push(squared);
        }
    }
    return result;
}

// 문제 6: 문자열 합치기 및 중복 제거 함수
function concatAndRemoveDuplicates(strings) {
    let combinedString = '';
    for (let i = 0; i < strings.length; i++) {
        combinedString += strings[i];
    }
    
    const uniqueChars = new Set(combinedString);
    return Array.from(uniqueChars).join('');
}

// 테스트
console.log(calculateFactorials([1, 2, 3, 4, 5]));
console.log(sumObjectValues([{a: 1}, {a: 2}, {a: 3}], 'a'));
console.log(removeDuplicatesAndSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
console.log(convertToBinary([1, 2, 3, 4, 5]));
console.log(squareAndFilterEven([1, 2, 3, 4, 5]));
console.log(concatAndRemoveDuplicates(['abc', 'bcd', 'cde']));