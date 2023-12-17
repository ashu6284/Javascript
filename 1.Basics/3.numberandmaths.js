const testNumber=100000;
const testNumber2=34569.67643;
console.log(testNumber.toFixed(2));
// 1000000.00
console.log(testNumber.toLocaleString());
// 100,000 for default,or en-IN gives 1,00,000
console.log(testNumber2.toPrecision(4));
// ==========================================================================

console.log(Math.round(4.6));
// 5
console.log(Math.ceil(4.1));
// 5
console.log(Math.floor(2.9));
// 2


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// generating random numbers
// Math.floor(Math.random()*(max*min-1)+min)