// 문제 1: 배열에서 가장 많이 등장한 요소 찾기
const numbers1 = [1, 3, 3, 2, 2, 2, 1, 3, 2];
const mostFrequent = numbers1.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
const mostFrequentElement = Object.keys(mostFrequent).reduce((a, b) => 
    mostFrequent[a] > mostFrequent[b] ? a : b);
console.log(`문제 1: 가장 많이 등장한 요소: ${mostFrequentElement}`);

// 문제 2: 객체 배열에서 중복 요소 제거하기
const objects2 = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 3 }];
const uniqueObjects = objects2.reduce((acc, obj) => {
    if (!acc.some(item => item.id === obj.id)) {
        acc.push(obj);
    }
    return acc;
}, []);
console.log('문제 2: 중복 제거된 객체 배열:', uniqueObjects);

// 문제 3: 이진수로 표현된 문자열의 1의 개수 세기
const binaryStrings3 = ['1101', '1010', '1111'];
const onesCount = binaryStrings3.reduce((acc, bin) => 
    acc + bin.split('').filter(bit => bit === '1').length, 0);
console.log(`문제 3: 1의 개수: ${onesCount}`);

// 문제 4: 객체 배열에서 특정 키의 모든 값을 합산하기
const objects4 = [{ value: 10 }, { value: 20 }, { value: 30 }];
const totalValue = objects4.reduce((acc, obj) => acc + obj.value, 0);
console.log(`문제 4: value 값의 합계: ${totalValue}`);

// 문제 5: 문자열 배열에서 단어의 총 길이 구하기
const words5 = ['apple', 'banana', 'cherry'];
const totalLength = words5.reduce((acc, word) => acc + word.length, 0);
console.log(`문제 5: 단어의 총 길이: ${totalLength}`);

// 문제 6: 배열 내 짝수와 홀수 개수 구하기
const numbers6 = [1, 2, 3, 4, 5, 6];
const evenOddCount = numbers6.reduce((acc, num) => {
    num % 2 === 0 ? acc.even++ : acc.odd++;
    return acc;
}, { even: 0, odd: 0 });
console.log('문제 6: 짝수와 홀수의 개수:', evenOddCount);

// 문제 7: 문자열 배열에서 알파벳 빈도수 계산
const words7 = ['hello', 'world'];
const letterFrequency = words7.join('').split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log('문제 7: 알파벳 빈도수:', letterFrequency);

// 문제 8: 객체 배열에서 가장 비싼 아이템 찾기
const items8 = [{ name: 'A', price: 30 }, { name: 'B', price: 50 }, { name: 'C', price: 40 }];
const mostExpensive = items8.reduce((expensive, item) => 
    item.price > expensive.price ? item : expensive, items8[0]);
console.log('문제 8: 가장 비싼 아이템:', mostExpensive);

// 문제 9: 두 배열의 교집합 찾기
const array9A = [1, 2, 3, 4];
const array9B = [3, 4, 5, 6];
const intersection = array9A.reduce((acc, num) => 
    array9B.includes(num) ? acc.concat(num) : acc, []);
console.log('문제 9: 두 배열의 교집합:', intersection);

// 문제 10: 두 배열의 합집합 구하기 (중복 제거)
const array10A = [1, 2, 3];
const array10B = [3, 4, 5];
const union = array10A.concat(array10B).reduce((acc, num) => {
    if (!acc.includes(num)) acc.push(num);
    return acc;
}, []);
console.log('문제 10: 두 배열의 합집합:', union);

// 문제 11: 문자열에서 중복 문자를 제거한 새로운 문자열 반환
const string11 = 'abbccddeeff';
const uniqueString = string11.split('').reduce((acc, char) => 
    acc.includes(char) ? acc : acc + char, '');
console.log(`문제 11: 중복 문자 제거: ${uniqueString}`);

// 문제 12: 객체 배열을 특정 키를 기준으로 그룹화하기
const items12 = [
    { group: 'A', name: 'X' },
    { group: 'B', name: 'Y' },
    { group: 'A', name: 'Z' }
];
const groupedItems = items12.reduce((acc, item) => {
    acc[item.group] = acc[item.group] || [];
    acc[item.group].push(item.name);
    return acc;
}, {});
console.log('문제 12: 그룹화된 객체:', groupedItems);

// 문제 13: 배열의 누적합 계산하기
const numbers13 = [1, 2, 3, 4, 5];
const cumulativeSum = numbers13.reduce((acc, num, idx) => {
    if (idx === 0) {
        acc.push(num);
    } else {
        acc.push(acc[idx - 1] + num);
    }
    return acc;
}, []);
console.log('문제 13: 배열의 누적합:', cumulativeSum);

// 문제 14: 배열에서 연속된 숫자의 길이 찾기
const numbers14 = [1, 2, 2, 2, 3, 4, 4];
const longestSequence = numbers14.reduce((acc, num) => {
    const last = acc[acc.length - 1];
    if (last && last.value === num) {
        last.count++;
    } else {
        acc.push({ value: num, count: 1 });
    }
    return acc;
}, []).reduce((a, b) => (a.count > b.count ? a : b)).count;
console.log(`문제 14: 가장 긴 연속된 숫자의 길이: ${longestSequence}`);

// 문제 15: 이중 배열의 평탄화(flatten)
const nestedArray15 = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray15.reduce((acc, arr) => acc.concat(arr), []);
console.log('문제 15: 평탄화된 배열:', flattenedArray);

// 문제 16: 중첩 객체에서 특정 키의 모든 값을 합산하기
const nestedObject16 = { a: { value: 10 }, b: { value: 20 }, c: { value: 30 } };
const totalNestedValue = Object.keys(nestedObject16).reduce((acc, key) => 
    acc + nestedObject16[key].value, 0);
console.log(`문제 16: 중첩 객체 value 값의 합계: ${totalNestedValue}`);

// 문제 17: 두 배열에서 유사한 값의 인덱스 반환
const array17A = [1, 2, 3, 4];
const array17B = [3, 2, 1, 4];
const matchingIndices = array17A.reduce((acc, num, idx) => {
    acc.push(num === array17B[idx]);
    return acc;
}, []);
console.log('문제 17: 유사한 값의 인덱스 일치 여부:', matchingIndices);

// 문제 18: 객체 배열을 특정 키를 기준으로 분류하여 배열로 반환
const items18 = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];
const categorizedItems = Object.values(items18.reduce((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item.name);
    return acc;
}, {}));
console.log('문제 18: 타입별 분류된 배열:', categorizedItems);

// 문제 19: 배열에서 값이 변할 때마다 그룹을 나누기
const numbers19 = [1, 1, 2, 2, 3, 1, 1];
const groupedByChange = numbers19.reduce((acc, num) => {
    const lastGroup = acc[acc.length - 1];
    if (!lastGroup || lastGroup[lastGroup.length - 1] !== num) {
        acc.push([num]);
    } else {
        lastGroup.push(num);
    }
    return acc;
}, []);
console.log('문제 19: 값이 변할 때마다 그룹화:', groupedByChange);

// 문제 20: 객체 배열에서 특정 키의 값
