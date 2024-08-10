
//1 문제: 배열 [5, 10, 15, 20, 25]의 모든 요소가 5의 배수인지 확인하는 함수를 작성. 

const numbers1 = [5, 10, 15, 20, 25];
const result1 = numbers1.every(num=>num % 5 === 0);
console.log(result1);

// 2 문제: 배열 [2, 4, 6, 8, 10]의 모든 요소가 짝수인지 확인하는 함수를 작성.
const numbers2 = [2, 4, 6, 7, 10];
const result2 = numbers2.every(num=>num %2 === 0);
const result2_1 = numbers2.every((num)=>{
	if( num % 2 === 0 ){
		return true;
	}
	return false;
})
console.log(result2);
console.log(result2_1);


// 3. 문제: 문자열 배열 ["apple", "banana", "cherry"]의 모든 문자열이 5자 이상인지 확인하는 함수를 작성.
const fruits = ["apple", "banana", "cherry"];
const result3 = fruits.every(fruit=>fruit.length >= 5);
console.log(result3);

// 4. 문제: 숫자 배열 [1, 3, 5, 7, 9]의 모든 요소가 홀수인지 확인하는 함수를 작성.
const numbers3 = [1, 3, 5, 8, 9];
const result4 = numbers3.every(num => num % 2 !==0)
console.log(result4);

// 문제 5: 객체 배열 [ {age: 25}, {age: 30}, {age: 35} ]의 모든 객체가 20세 이상인지 확인하는 함수를 작성.
const people1 = [{age: 19}, {age: 30}, {age: 35}];
const result5 = people1.every(person => person.age >= 20)
console.log(result5);


// example_filtering.js
// 문제 1: 배열 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]에서 짝수만 필터링하는 함수를 작성.
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers4.filter(num => num % 2 === 0);
console.log(evens);

// 문제 2: 문자열 배열 ["apple", "banana", "cherry", "date"]에서 5자 이상인 문자열만 필터링하는 함수를 작성.
const words2 = ["apple", "banana", "cherry", "date"];
const longWords = words2.filter(word=> word.length >= 5);
console.log(longWords);


// 문제 3: 객체 배열 [ {name: "John", age: 25}, {name: "Jane", age: 20}, {name: "Jim", age: 30} ]에서 나이가 25세 이상인 객체만 필터링하는 함수를 작성.
const people2 = [
	{name: "John", age: 25},
	{name: "Jane", age: 20},
	{name: "Jim", age: 30}
  ];

const adults = people2.filter(person => person.age >= 25); 
console.log(adults);

// 문제 4: 숫자 배열 [12, 5, 8, 130, 44]에서 10보다 큰 숫자만 필터링하는 함수를 작성.
const numbers5 = [12, 5, 8, 130, 44];
const largeNumbers = numbers5.filter(num => num > 10);
console.log(largeNumbers); // [12, 130, 44]

// 문제 5: 배열 [true, false, true, false, true]에서 true 값만 필터링하는 함수를 작성.
const bools1 = [true, false, true, false, true];
const trues = bools1.filter(bool => bool === true);
console.log(trues); // [true, true, true]

// 문제 1: 배열 [5, 12, 8, 130, 44]에서 10보다 큰 첫 번째 값을 찾는 함수를 작성.
const numbers6 = [5, 12, 8, 130, 44];
const firstLargeNumber = numbers6.find(num => num > 10);
console.log(firstLargeNumber); // 12

// 문제 2: 문자열 배열 ["apple", "banana", "cherry", "date"]에서 "b"로 시작하는 첫 번째 문자열을 찾는 함수를 작성.
const words3 = ["apple", "banana", "cherry", "date"];
const firstBWord = words3.find(word => word.startsWith('b'));
console.log(firstBWord); // "banana"

// 문제 3: 객체 배열 [ {id: 1, name: "John"}, {id: 2, name: "Jane"}, {id: 3, name: "Jim"} ]에서 id가 2인 객체를 찾는 함수를 작성.
const people3 = [
  {id: 1, name: "John"},
  {id: 2, name: "Jane"},
  {id: 3, name: "Jim"}
];
const person = people3.find(person => person.id === 2);
console.log(person); // {id: 2, name: "Jane"}

// 문제 4: 숫자 배열 [4, 6, 7, 8, 10]에서 짝수가 아닌 첫 번째 값을 찾는 함수를 작성.
const numbers7 = [4, 6, 7, 8, 10];
const firstOdd = numbers7.find(num => num % 2 !== 0);
console.log(firstOdd); // 7

// 문제 5: 배열 [true, false, false, true, false]에서 첫 번째 false 값을 찾는 함수를 작성.
const bools2 = [true, false, false, true, false];
const firstFalse = bools2.find(bool => bool === false);
console.log(firstFalse); // false

// example_map.js

// 문제 1: 배열 [1, 2, 3, 4, 5]의 각 요소에 2를 곱한 새 배열을 반환하는 함수를 작성.
const numbers8 = [1, 2, 3, 4, 5];
const doubled = numbers8.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 문제 2: 문자열 배열 ["apple", "banana", "cherry"]의 각 문자열을 대문자로 변환한 새 배열을 반환하는 함수를 작성.
const words4 = ["apple", "banana", "cherry"];
const upperCaseWords = words4.map(word => word.toUpperCase());
console.log(upperCaseWords); // ["APPLE", "BANANA", "CHERRY"]

// 문제 3: 객체 배열 [ {name: "John", age: 25}, {name: "Jane", age: 20}, {name: "Jim", age: 30} ]에서 각 객체의 나이를 1씩 증가시키는 새 배열을 반환하는 함수를 작성.
const people4 = [
  {name: "John", age: 25},
  {name: "Jane", age: 20},
  {name: "Jim", age: 30}
];
const olderPeople = people4.map(person => ({
  ...person,
  age: person.age + 1
}));
console.log(olderPeople);
// [{name: "John", age: 26}, {name: "Jane", age: 21}, {name: "Jim", age: 31}]

// 문제 4: 숫자 배열 [10, 20, 30, 40, 50]의 각 요소를 반으로 줄인 새 배열을 반환하는 함수를 작성.
const numbers9 = [10, 20, 30, 40, 50];
const halved = numbers9.map(num => num / 2);
console.log(halved); // [5, 10, 15, 20, 25]

// 문제 5: 배열 [true, false, true, false]의 각 값을 반대로 변환한 새 배열을 반환하는 함수를 작성.
const bools3 = [true, false, true, false];
const reversedBools = bools3.map(bool => !bool);
console.log(reversedBools); // [false, true, false, true]

// example_some.js

// 문제 1: 배열 [1, 2, 3, 4, 5]에서 하나라도 짝수가 있는지 확인하는 함수를 작성.
const numbers10 = [1, 2, 3, 4, 5];
const hasEven = numbers10.some(num => num % 2 === 0);
console.log(hasEven); // true

// 문제 2: 문자열 배열 ["apple", "banana", "cherry"]에서 하나라도 "a"를 포함하는 문자열이 있는지 확인하는 함수를 작성.
const words5 = ["apple", "banana", "cherry"];
const hasA = words5.some(word => word.includes('a'));
console.log(hasA); // true

// 문제 3: 객체 배열 [ {age: 25}, {age: 20}, {age: 30} ]에서 하나라도 25세 이상인 객체가 있는지 확인하는 함수를 작성.
const people5 = [
  {age: 25},
  {age: 20},
  {age: 30}
];
const hasAdult = people5.some(person => person.age >= 25);
console.log(hasAdult); // true

// 문제 4: 숫자 배열 [1, 3, 5, 7, 9]에서 하나라도 5의 배수가 있는지 확인하는 함수를 작성.
const numbers11 = [1, 3, 5, 7, 9];
const hasMultipleOfFive = numbers11.some(num => num % 5 === 0);
console.log(hasMultipleOfFive); // true

// 문제 5: 배열 [true, false, false, false]에서 하나라도 true가 있는지 확인하는 함수를 작성.
const bools4 = [true, false, false, false];
const hasTrue = bools4.some(bool => bool === true);
console.log(hasTrue); // true
