// const obj1 = {
//   name: "ashu",
// };
// const obj2 = {
//   age: 19,
//   __proto__: obj1,
// };
// console.log(obj2.name);

const obj1 = {
  name: "ashu",
  getname: function () {
    console.log(this.name);
  },
};
const obj2 = {
  name: "aarav",
  __proto__: obj1,
};
const obj3 = {
  age: 18,
  __proto__: obj2,
};
function ashu() {}
obj3.getname();
Function.prototype.show = function () {
  console.log("hey");
};
ashu.show();
