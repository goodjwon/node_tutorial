//E1. 숫자 42를 resolve하는 단일 Promise를 만들어서 출력하기.

const sp = new Promise((resole)=>{
	resole(42)
});

sp.then((value)=>{
	console.log(value);
});


//E2. 2초 후에 "Data fetched successfully" 메시지를 반환하는 Promise를 만들어서 출력하기.

const sp2 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve('Data fetched successfully');
	}, 2000);
})

sp2.then((message)=>{
	console.log(message);
});


//E3. 숫자 5보다 큰 값이 입력되면 "Input too large" 에러를 반환하는 Promise를 만들어서, 에러 메시지 출력하기.

const checkInputSize = (num) => {
	return new Promise((resolve, reject)=>{
		if(num > 5){
			reject('Input too large');
		} else {
			resolve(num);
		}
		
	});	
}

checkInputSize(6).catch((error) => {
    console.log(error); // "Input too large"
});

//E4 첫 번째 Promise는 1초 후에 "First", 두 번째 Promise는 2초 후에 "Second"를 반환하게 해서, 두 결과를 함께 출력하기.

const firstPromise = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve('First');
	}, 1000);
});

const secondPromise = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve('Second');
	}, 2000);
});

Promise.all([firstPromise, secondPromise]).then((values)=>{
	console.log(values);
});

//E5. 3초 후에 "Time's up!" 메시지를 출력하는 Promise 만들기.

const timesUp = new Promise((resole)=>{
	setTimeout(()=>{
		console.log('Times up!');
	}, 3000);
});

timesUp.then((message)=>{
	console.log(message);
});


// M1. - 1초 후에 파일 내용을 반환하는 Promise를 만들어서, 파일이 없으면 "File not found" 에러를 반환하게 만들고 결과 출력하기.

const readFile = (fileName) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(fileName === 'file.txt'){
				resolve('File content');
			}else{
				reject('File not found');
			}
		}, 1000);
	});
}

readFile('file2.txt').then((content)=> console.log(content))
.catch((error)=> console.log(error));

// M2. 숫자를 입력 받아, 그 숫자를 2로 곱한 후 3을 더하고, 그 결과를 10으로 나누는 세 개의 Promise를 체인으로 연결해서 최종 결과 출력하기. (Promise chaining)

const multiplyBy2 = (num) => Promise.resolve(num * 2);
const add3 = (num) => Promise.resolve(num + 3);
const divideBy10 = (num) => Promise.resolve(num /10);

multiplyBy2(5)
.then(add3)
.then(divideBy10)
.then(result => console.log(`M2 result ${result}`));


// M3. 사용자 데이터를 가져오는 Promise와 그 데이터를 기반으로 사용자 권한을 확인하는 Promise를 만들어서 권한 정보 출력하기.

const getUserData = () => Promise.resolve({ id: 1, name: 'John'});
const checkUserPermission = (user) => user.id === 1 ?  Promise.resolve('Admin') : Promise.resolve("User");

getUserData()
	.then(checkUserPermission)
	.then((role)=>console.log(`M3 result is ${role}`));


// M4. 입력된 비밀번호가 "password123"일 때만 resolve하는 Promise를 만들어서, 비밀번호가 틀리면 "Invalid password" 에러를 출력하기.

const checkPassword = (password) => {
	return new Promise((res, rej)=>{
		if(password === 'password123'){
			res('Correct password');
		}else{
			rej('Invalid password');
		}
	});
}

checkPassword('password123!')
	.then((message)=>console.log(`M4 result is ${message}`))
	.catch((error)=>console.log(`M4 result is ${error}`));

// M5. 	주어진 키를 기반으로 데이터를 가져오는 Promise를 만들어서, 캐시된 데이터가 있는 경우 즉시 반환하고, 없으면 데이터를 가져와 캐시 후 반환하기.