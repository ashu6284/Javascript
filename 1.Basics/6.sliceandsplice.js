const testArr=["a","b","c","d","e"];
console.log(testArr.slice(0,2));
console.log(testArr);
// slice take 2 arugument start and ending+1 and return new array


const testArr2=[1,2,3,4,5,6];
// console.log(testArr2.splice(0,2));
console.log(testArr2.splice(0,2,"ashu"))
console.log(testArr2);
// splice takes 3 argument startingindex,howmany,new replace
// returns new array