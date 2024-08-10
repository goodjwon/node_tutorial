const numbers = Array.from({ length: 10000000 }, () => Math.floor(Math.random() * 100));

let total = 0;
let start = performance.now();
numbers.forEach((number) => {
	total += number;
});
let end = performance.now();
console.log(`forEach time: ${(end - start).toFixed(4)} ms`);

start = performance.now();
const total2 = numbers.reduce((accumulator, currentVale) => {
	return accumulator += currentVale;
}, 0);
end = performance.now();
console.log(`reduce time: ${(end - start).toFixed(4)} ms`);
