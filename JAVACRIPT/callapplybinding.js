// const test1 = {
//   a: 10,
//   c: function () {
//     console.log(this);
//   },
// };
// const test2 = {
//   b: 20,
// };
// const test3 = {
//   c: "asas",
// };

// CALL
// test1.c.call(test3);

const test1 = {
  firstName: "ashu",
  lastName: "jaiswal",
  c: function (city, classes) {
    console.log(
      `i am ${this.firstName} ${this.lastName}, i m from ${city},i m in class ${classes} `
    );
  },
};
const test2 = {
  firstName: "shailendra",
  lastName: "jaiswal",
};
test1.c.call(test2, "noida", "btech");

test1.c.apply(test2, ["noida", "btech"]);
test1.c.bind(test2, "noida", "btech");
