// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// // let res1 = add(2);
// // let res2 = res1(3);
// // let finalResult = res2(4);
// // console.log(finalResult);

// // CURRYING---
// let finalResult = add(2)(3)(4);
// console.log(finalResult);

// INFINITE CURRYING

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
let finalResult = add(3)(4)(8)(12);
console.log(finalResult());
