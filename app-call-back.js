/**
// 비동기 이해
console.log('시작')
setTimeout(()=>{
	console.log(2)
}
, 3000)
console.log(1)


//콜백함수 이해.
function main(callback) {
	console.log('main 함수 실행');
	callback();	//여기서 호출		//여기서 찍을까?
}

main(()=>{
	console.log('콜백함수 호출');	//여기서 찍을까?
});



function getData(callback) {
	setTimeout(()=>{
		console.log('1. Received Data');
		callback({name: 'Todos'});
	}, 2000);
}

getData((data)=>{
	console.log(`2. 전달받은 것은 ${data.name} 입니다.` )
});

*/

// 1. 로그인
function login(username, callback){
	setTimeout(()=>{
		callback(username);
	}, 1000);
}

// login('Mike', (username)=>{
// 	console.log(`${username} 님이 로그인 했습니다.`);
// });

// 2. 장바구니 넣기
function addCart(item, callback){
	setTimeout(()=>{
		callback(item);
	}, 1000);
}

// addCart('shoes', (item)=>{
// 	 console.log(`${item}이 장바구니에 담겼습니다.`);
//  });


// 3. 결제하기
function makePayment(cardNumber, product, callback){
	setTimeout(()=>{
		callback(cardNumber,product);
	}, 1000);
}

// makePayment('1234-1234-1234-1234', 'shoes', (cardNumber, product)=>{
// 	console.log(`${product} 상품이 ${cardNumber} 로 결제되었습니다.`);
// });

// 4. 이전작업에 종속되게 만들기.
login('Mike', (username)=>{
	console.log(`${username} 이 로그인 했습니다.`)
	addCart('감자', (item)=>{
		console.log(`${item} 을 장바구니에 넣었습니다.`)
		makePayment('1234-1234-1234-1234', item, (cardNumber, product)=>{
			console.log(`${product} 상품이 ${cardNumber} 로 결제되었습니다.`);
		});
	});
});


/**
// 콜백 함수를 인자로 받아 실행하는 함수
function greet(name, callback) {
    console.log('안녕하세요, ' + name + '님!');
    callback();
}

// 콜백으로 사용될 함수
function callbackFunction() {
    console.log('콜백 함수가 실행되었습니다.');
}

// greet 함수 호출
greet('홍길동', callbackFunction);

//2 setTimeout 함수에 콜백 함수 전달하기
// 네트워크 시간이 걸리는걸 가정해서 많이 한다.
function delayedMessage(message, delay, callback){
	setTimeout(()=>{
		console.log(message);
		callback();
	}, delay);
}
console.log("setTimeout 함수에 콜백 함수 전달하기");
delayedMessage('안녕하세요', 2000, ()=>{
	console.log('안녕히 가세요');
});

//3 배열의 요소를 모두 출력하는 함수
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
	console.log(`numbers[${index}]: ${number}`);
});

*/