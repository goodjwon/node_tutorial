
// 1. Promise 는 생성자로 함수를 하나 전달 받는데 executer 라고 부르며 실재로 실행 할 함수를 전달 받는다. 생성시 바로 실행 된다.
const promise = new Promise(()=>{
	console.log('executer');
})


// 2. executer 는 두가지 인자를 전달 받는데 resolve 와 reject 이다. resolve 는 성공시에 호출하는 함수, reject 는 실패시에 호출하는 함수이다.
const promise2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		const data = {name: '미나'}
		console.log('Successfully Network request');
	}, 1000);
})

console.log('promise2: '+promise2)
// 브라우저에서 실행해 보면 pending 상태로 resolve를 호출 하지 않았기 때문이다.


//3. promise 는 몇가지 상태 값을 가지는데 pending, fulfilled, rejected 가 있다.
const promise3 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		const data = {name: '미나'}
		console.log('Successfully Network request');
		resolve(data);
	}, 1000);
})

setTimeout(()=>{
	console.log('promise3: '+ promise3)
}, 2000);
// 브라우저에서 실행해 보면 fulfilled 상태 처리에 성공 했음을 알려준다.



//4. promise 실패 했을 때는 rejected에 대항하는 함수를 호출 하도록 한다.
// const promise4 = new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		const data = null
// 		if(data) {
// 			console.log('Successfully Network request');
// 			resolve(data);
// 		} else {
// 			reject(new Error(`Network request failed`));
// 		}
// 	}, 1000);
// })

// setTimeout(()=>{
// 	console.log('promise4: '+ promise4)
// }, 2000);

// 5. promise 를 사용한 함수만들어 보기
function getDate(){
	const promise = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const data = {name: '미나'}
			console.log('Successfully Network request');
			resolve(data);
		}, 1000);
	})
	return promise;
}

const promise5= getDate();
setTimeout(()=>{
	console.log('promise5: '+ promise5)
}, 2000);

// 6. promise 객체의 후처리 하기 then(), catch(), finally()
const promise6= getDate();

promise6.then((date)=>{
	console.log('promise6 성공', date)
})

getDate().then((date)=>{
	console.log('바로호출도 성공', date)
});

getDate().then((date)=>{
	const name = date.name;
	console.log(`${name}님 안녕하세요?`)
});

function getDataError(){
	const promise4 = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const data = null
			if(data) {
				console.log('Successfully Network request');
				resolve(data);
			} else {
				reject(new Error(`Network request failed`));
			}
		}, 1000);
	})
	
}