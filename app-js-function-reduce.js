const numbers = [1,2,3,4];

// forEach
let total = 0;
numbers.forEach((number)=>{
	total += number
});

console.log(total);

// reduce
const total2 = numbers.reduce((accumulator, currentVale)=>{
	return accumulator + currentVale
}, 0)

/*
v : 요소, a : accumulator, c : currentValue, r : return
v  a  c  r 
1  0  1  1
2  1  2  3
3  3  3  6
4  6  4  10
*/

console.log(total2);

const numbers2 = [10, 4, 2, 8];

const smallest = numbers2.reduce((accumulator, currentVale)=>{
	if(accumulator < currentVale){
		return accumulator;
	}else{
		return currentVale;
	}
})
console.log(smallest);

const smallest2 = numbers2.reduce((accumulator, currentVale)=>{
	return accumulator < currentVale ? accumulator : currentVale;
})

console.log(smallest2);

/*
v : 요소, a : accumulator, c : currentValue, r : return
v  a  c  r 
10 -  -  -
4  10 4  4
3  4  2  2
8  2  8  2 
*/


const cart = [
    { name: '사과', price: 500 },
    { name: '바나나', price: 700 },
    { name: '레몬', price: 300 }
];
// cart 에 담긴 과일의 합계 금액을 구하라.
const result = cart.reduce((acc, cur)=>{
	return acc + cur.price;
}, 0)

console.log(result);

let totalAmount = 0;
cart.forEach(item => {
    totalAmount += item.price;
});

console.log(totalAmount);


/**
 * 
 reduce를 사용하는 이유는 코드의 의도를 명확하게 표현할 수 있음. reduce는 배열의 각 요소를 누적하여 하나의 값을 도출하는데 특화된 메서드로, 합계를 구하는 것과 같은 작업을 할 때 매우 직관적임

명확한 의도: reduce를 사용하면 해당 코드가 배열의 모든 요소를 누적해서 하나의 결과를 도출하려는 의도가 있다.

불변성 유지: reduce는 누적값을 생성할 때 기존 배열을 변경하지 않고, 새로운 값을 반환. 반면 forEach를 사용하면 외부 변수(totalAmount)를 변경하는 방식으로 값을 누적.

함수형 프로그래밍 패러다임: reduce는 함수형 프로그래밍에서 자주 사용하는 메서드입니다. 함수형 프로그래밍을 지향하는 코드를 작성할 때, 사이드 이펙트(부작용)를 줄이고, 상태 변이를 최소화하는 것이 중요.

간결함: reduce를 사용하면 종종 forEach보다 코드를 더 간결하게 작성할 수 있습니다. 모든 계산이 하나의 함수 내부에서 이루어지기 때문에 코드의 길이도 줄어들고, 중간에 불필요한 상태 변화나 변수 사용을 줄일 수 있음.

 */