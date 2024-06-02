function createCounter(){
	let count = 0;

	return {
		increase: function(){
			count++;
			return count;
		},
		decrease: function(){
			count--;
			return count;
		},
		get: function(){
			return count;
		}
	};
}

const counter = createCounter();

console.log(counter.increase());  // 0
console.log(counter.increase());  // 0
console.log(counter.increase());  // 0
console.log(counter.increase());  // 0



(function() {
    let privateVar = 'I am private';
    console.log('문제 23:', privateVar);  // 출력: I am private
})();


let name2 = 'John';
let age3 = 25;
let greeting2 = `안녕하세요, 제 이름은 ${name2}이고 나이는 ${age3}살입니다.`;
console.log('문제 30:', greeting2);  // 출력: 안녕하세요, 제 이름은 John이고 나이는 25살입니다.
