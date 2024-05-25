// app.js

console.log("Hello, Node.js!");

console.log(message); // undefined

var message = "Hello, World!";
console.log(message); // Hello, World!


// Number와 BigInt의 차이점

// Number: 최대 안전 정수 범위 내의 값
let numberValue = 9007199254740991; // 2^53 - 1
console.log("Number value:", numberValue);
console.log("Number value + 1:", numberValue + 1); // 올바른 결과
console.log("Number value + 2:", numberValue + 2); // 정확하지 않은 결과

// BigInt: 큰 정수를 안전하게 표현
let bigIntValue = 9007199254740991n; // 2^53 - 1n
console.log("BigInt value:", bigIntValue);
console.log("BigInt value + 1n:", bigIntValue + 1n); // 올바른 결과
console.log("BigInt value + 2n:", bigIntValue + 2n); // 올바른 결과

// BigInt와 Number는 직접 연산이 불가능
let anotherNumberValue = 10;
try {
    console.log(bigIntValue + anotherNumberValue); // 오류 발생
} catch (error) {
    console.error("Error:", error.message);
}

// BigInt와 Number의 올바른 연산 방법
console.log("BigInt + Number (converted):", bigIntValue + BigInt(anotherNumberValue));
console.log("Number + BigInt (converted):", Number(bigIntValue) + anotherNumberValue);



let array = [1, 2, 3, 4, 5, 3, 2];
console.log("Array:", array);


let set = new Set([1, 2, 3, 4, 5, 3, 2]);
console.log("Set:", set);