// 초급 문제

// 문제 1: 변수를 선언하고 숫자 5를 할당하세요.
let number = 5;
console.log('문제 1:', number);  // 출력: 5

// 문제 2: 두 개의 문자열 변수를 선언하고, 이를 결합한 결과를 새로운 변수에 저장하세요.
let str1 = 'Hello';
let str2 = 'World';
let combinedStr = str1 + ' ' + str2;
console.log('문제 2:', combinedStr);  // 출력: Hello World

// 문제 3: const를 사용하여 상수 변수를 선언하고 값 10을 할당하세요. 이 변수를 다시 할당하려고 하면 어떤 오류가 발생하나요?
const constantNumber = 10;
// constantNumber = 20;  // 오류 발생: Assignment to constant variable.
console.log('문제 3:', constantNumber);  // 출력: 10

// 문제 4: 세 개의 숫자 변수를 선언하고, 이들의 합을 출력하세요.
let num1 = 5;
let num2 = 10;
let num3 = 15;
let sum = num1 + num2 + num3;
console.log('문제 4:', sum);  // 출력: 30

// 문제 5: 불리언 변수를 선언하고 값을 true로 설정하세요. 이 변수를 false로 바꾸세요.
let isTrue = true;
console.log('문제 5 (변경 전):', isTrue);  // 출력: true
isTrue = false;
console.log('문제 5 (변경 후):', isTrue);  // 출력: false

// 문제 6: let과 var의 차이점을 설명하고 예제를 통해 보여주세요.
var varVariable = 'Hello';
var varVariable = 'World';
console.log('문제 6 (var):', varVariable);  // 출력: World

let letVariable = 'Hello';
// let letVariable = 'World';  // 오류 발생: Identifier 'letVariable' has already been declared
letVariable = 'World';
console.log('문제 6 (let):', letVariable);  // 출력: World

// 문제 7: 변수를 선언하지 않고 사용하면 어떤 일이 발생하나요? 이를 설명하는 코드를 작성하세요.
// console.log(notDeclaredVariable);  // 오류 발생: notDeclaredVariable is not defined
let declaredVariable = 'This is declared';
console.log('문제 7:', declaredVariable);  // 출력: This is declared

// 문제 8: 문자열 변수와 숫자 변수를 더했을 때의 결과를 보여주는 코드를 작성하세요.
let stringVariable = 'The number is ';
let numberVariable = 10;
let result = stringVariable + numberVariable;
console.log('문제 8:', result);  // 출력: The number is 10

// 문제 9: 변수를 선언하고 null 값을 할당한 후, 그 값을 출력하세요.
let nullVariable = null;
console.log('문제 9:', nullVariable);  // 출력: null

// 문제 10: 두 개의 변수를 선언하고, 그 값을 서로 교환하세요.
let a = 1;
let b = 2;
let temp = a;
a = b;
b = temp;
console.log('문제 10:', a, b);  // 출력: 2 1

// 중급 문제

// 문제 11: 변수의 유효 범위(scope)를 설명하고, 함수 내부와 외부에서 변수의 범위를 설명하는 코드를 작성하세요.
let globalVariable = 'I am global';

function scopeTest() {
    let localVariable = 'I am local';
    console.log('문제 11 (함수 내부):', globalVariable);  // 출력: I am global
    console.log('문제 11 (함수 내부):', localVariable);  // 출력: I am local
}

scopeTest();
// console.log(localVariable);  // 오류 발생: localVariable is not defined

// 문제 12: let을 사용하여 변수를 선언하고, 블록 범위 내에서 다른 값을 할당한 후, 범위 밖에서의 값을 출력하세요.
let blockScopeVariable = 'Outside Block';

if (true) {
    let blockScopeVariable = 'Inside Block';
    console.log('문제 12 (블록 내부):', blockScopeVariable);  // 출력: Inside Block
}

console.log('문제 12 (블록 외부):', blockScopeVariable);  // 출력: Outside Block

// 문제 13: 배열 변수를 선언하고, 세 개의 값을 추가한 후, 배열의 길이를 출력하세요.
let array = [1, 2, 3];
console.log('문제 13:', array.length);  // 출력: 3

// 문제 14: 객체 변수를 선언하고, 이름과 나이를 속성으로 추가하세요. 이름을 변경하는 코드를 작성하세요.
let person = {
    name: '홍길동',
    age: 30
};

person.name = '이순신';
console.log('문제 14:', person);  // 출력: { name: '이순신', age: 30 }

// 문제 15: 템플릿 리터럴을 사용하여 문자열 변수를 포함한 문장을 작성하세요.
let name = '홍길동';
let greeting = `안녕하세요, 제 이름은 ${name}입니다.`;
console.log('문제 15:', greeting);  // 출력: 안녕하세요, 제 이름은 홍길동입니다.

// 문제 16: typeof 연산자를 사용하여 변수의 자료형을 출력하는 코드를 작성하세요.
let number2 = 5;
let string2 = 'Hello';
let isTrue2 = true;

console.log('문제 16:', typeof number2);  // 출력: number
console.log('문제 16:', typeof string2);  // 출력: string
console.log('문제 16:', typeof isTrue2);  // 출력: boolean

// 문제 17: 삼항 연산자를 사용하여 조건에 따라 다른 값을 변수에 할당하세요.
let age2 = 20;
let canVote = age2 >= 18 ? 'Yes' : 'No';
console.log('문제 17:', canVote);  // 출력: Yes

// 문제 18: const로 선언된 객체에 새로운 속성을 추가할 수 있는지 실험해보세요.
const car = {
    make: '현대',
    model: '소나타'
};

car.year = 2021;
console.log('문제 18:', car);  // 출력: { make: '현대', model: '소나타', year: 2021 }

// 문제 19: 함수를 작성하여 두 개의 변수를 받아, 그 합을 반환하세요.
function add(a, b) {
    return a + b;
}

let sum2 = add(5, 10);
console.log('문제 19:', sum2);  // 출력: 15

// 문제 20: 전역 변수와 지역 변수의 차이를 설명하고, 이를 보여주는 코드를 작성하세요.
let globalVar = 'I am global';

function testScope() {
    let localVar = 'I am local';
    console.log('문제 20 (함수 내부):', globalVar);  // 출력: I am global
    console.log('문제 20 (함수 내부):', localVar);  // 출력: I am local
}

testScope();
// console.log(localVar);  // 오류 발생: localVar is not defined

// 21번부터 30번까지의 문제

// 문제 21: 변수 호이스팅이 무엇인지 설명하고, 예제를 통해 보여주세요.
console.log('문제 21 (호이스팅 전):', hoistedVar);  // 출력: undefined
var hoistedVar = 'This is hoisted';
console.log('문제 21 (호이스팅 후):', hoistedVar);  // 출력: This is hoisted

// 문제 22: 클로저(closure)를 사용하여 변수를 은닉하는 방법을 설명하고 예제를 작성하세요.
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log('문제 22 (1):', counter());  // 출력: 1
console.log('문제 22 (2):', counter());  // 출력: 2

// 문제 23: 즉시 실행 함수 표현식(IIFE)을 사용하여 변수를 캡슐화하는 방법을 보여주세요.
(function() {
    let privateVar = 'I am private';
    console.log('문제 23:', privateVar);  // 출력: I am private
})();
// console.log(privateVar);  // 오류 발생: privateVar is not defined

// 문제 24: let과 const를 사용하여 변수를 선언할 때의 차이점을 설명하고, 적절한 예제를 작성하세요.
let letVariable2 = 'Hello';
letVariable2 = 'World';
console.log('문제 24 (let):', letVariable2);  // 출력: World

const constVariable = 'Hello';
// constVariable = 'World';  // 오류 발생: Assignment to constant variable.
console.log('문제 24 (const):', constVariable);  // 출력: Hello

// 문제 25: 프리미티브 타입과 참조 타입의 차이를 설명하고, 이를 비교하는 코드를 작성하세요.
let primitive1 = 5;
let primitive2 = primitive1;
primitive2 = 10;
console.log('문제 25 (프리미티브1):', primitive1);  // 출력: 5
console.log('문제 25 (프리미티브2):', primitive2);  // 출력: 10

let reference1 = { value: 5 };
let reference2 = reference1;
reference2.value = 10;
console.log('문제 25 (참조1):', reference1.value);  // 출력: 10
console.log('문제 25 (참조2):', reference2.value);  // 출력: 10

// 문제 26: Object.freeze를 사용하여 객체를 불변으로 만들고, 속성을 변경하려고 할 때의 결과를 보여주세요.
let frozenObject = {
    name: 'Alice',
    age: 30
};

Object.freeze(frozenObject);

frozenObject.age = 35;  // 변경되지 않음
console.log('문제 26 (변경 후):', frozenObject.age);  // 출력: 30

frozenObject.newProperty = 'New';  // 추가되지 않음
console.log('문제 26 (새 속성):', frozenObject.newProperty);  // 출력: undefined

// 문제 27: var로 선언된 변수가 함수 범위를 갖는다는 것을 설명하고, 예제를 작성하세요.
function testVarScope() {
    if (true) {
        var functionScopedVar = 'I am function scoped';
    }
    console.log('문제 27:', functionScopedVar);  // 출력: I am function scoped
}

testVarScope();
// console.log(functionScopedVar);  // 오류 발생: functionScopedVar is not defined

// 문제 28: 변수에 함수 자체를 할당하고 호출하는 코드를 작성하세요.
let sayHello = function() {
    return 'Hello!';
};

console.log('문제 28:', sayHello());  // 출력: Hello!

// 문제 29: 함수 스코프와 블록 스코프의 차이를 설명하고, 이를 보여주는 코드를 작성하세요.
function testScopes() {
    if (true) {
        var functionScopedVar = 'I am function scoped';
        let blockScopedLet = 'I am block scoped';
        const blockScopedConst = 'I am also block scoped';
    }
    console.log('문제 29 (함수 스코프):', functionScopedVar);  // 출력: I am function scoped
    // console.log(blockScopedLet);  // 오류 발생: blockScopedLet is not defined
    // console.log(blockScopedConst);  // 오류 발생: blockScopedConst is not defined
}

testScopes();

// 문제 30: 템플릿 리터럴에서 표현식을 사용하여 동적으로 문자열을 생성하는 방법을 예제로 작성하세요.
let name2 = 'John';
let age3 = 25;
let greeting2 = `안녕하세요, 제 이름은 ${name2}이고 나이는 ${age3}살입니다.`;
console.log('문제 30:', greeting2);  // 출력: 안녕하세요, 제 이름은 John이고 나이는 25살입니다.
