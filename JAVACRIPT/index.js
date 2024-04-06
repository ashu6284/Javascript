// const users = [
//   {
//     firstName: "akshay",
//     lastName: "saini",
//     age: 26,
//   },
//   {
//     firstName: "donald",
//     lastName: "trump",
//     age: 75,
//   },
//   {
//     firstName: "elon",
//     lastName: "musk",
//     age: 50,
//   },
//   {
//     firstName: "deepika",
//     lastName: "padukone",
//     age: 26,
//   },
// ];

// const newArr = users.filter((x) => x.age > 30).map((x) => x.firstName);
// console.log(newArr);
// const ans = users.reduce((acc, curr) => {
//   if (curr.age > 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);
// console.log(ans);
// function age(x) {
//   if (x.age < 30) {
//     return x.firstName;
//   }
// }
// const output = users.filter(age);
// console.log(output);

// const a = [2, 3, 4, 1];
// const newArr = a.map((x) => x.toString(2));
// console.log(newArr);

// const a = [2, 1, 3, 4, 12, 67];
// const newArr = a.filter((x) => x > 5);
// console.log(newArr);

// const a = [1, 2, 3, 4, 12];
// function sum() {
//   let ans = 0;
//   for (let i = 0; i < a.length; i++) {
//     ans += a[i];
//   }
//   return ans;
// }
// console.log(sum());

// const output = a.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);

setTimeout(function () {
  console.log("hey");
}, 5000);
