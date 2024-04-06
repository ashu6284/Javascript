//1. function statements aka function declaration
function a() {
  console.log("a is called");
}

//2. function expression
let b = function () {
  console.log("b is called");
};

a();
b();
// the major differnce is hoisting

//3. named function expression
let c = function xyz() {
  console.log("c is called");
};
c();
// xyz() gives error because xyz is locally scoped not in global scoped

// ----->difference between arguments and parameters
// parameters are those which is passed in function declaration and arguments are actual value

// 4.the ability to use function as value is called FIRST CLASS FUNCTION aka FIRST CLASS CITIZENS
