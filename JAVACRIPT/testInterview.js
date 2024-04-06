// try {
//   console.log("try");
//   throw new Error();
//   console.log("king");
// } catch (e) {
//   console.log("catch");
// } finally {
//   console.log("finally");
// }
// console.log("hi");

new Promise((res, rej) => {
  console.log(" hi");
  res("resolve");
}).then((res) => console.log(res));
console.log("after promise");
