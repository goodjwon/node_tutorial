/*


*/

// 1. 로그인
function login(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(username);
        }, 1000);
    });
}

// 로그인 사용 예
login('Mike').then((username) => {
    console.log(`${username} 님이 로그인 했습니다.`);
});

// 2. 장바구니에 담기
function addCart(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item);
        }, 1000);
    });
}

// 3. 결제하기
function makePayment(cardNumber, product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ cardNumber, product });
        }, 1000);
    });
}

// 4. 이전 작업에 종속되게 만들기
login('Mike').then((username) => {
    console.log(`${username} 님이 로그인 했습니다.`);
    return addCart('감자');
}).then((item) => {
    console.log(`${item} 을 장바구니에 넣었습니다.`);
    return makePayment('1234-1234-1234-1234', item);
}).then(({ cardNumber, product }) => {
    console.log(`${product} 상품이 ${cardNumber} 로 결제되었습니다.`);
}).catch((error) => {
    console.error('오류 발생:', error);
});


// async/await 로 구현한 함수
async function processOrder() {
    try {
        const username = await login('Mike');
        console.log(`${username} 님이 로그인 했습니다.`);

        const item = await addCart('감자');
        console.log(`${item} 을 장바구니에 넣었습니다.`);

        const { cardNumber, product } = await makePayment('1234-1234-1234-1234', item);
        console.log(`${product} 상품이 ${cardNumber} 로 결제되었습니다.`);
    } catch (error) {
        console.error('오류 발생:', error);
    }
}

// 주문 처리 실행
processOrder();