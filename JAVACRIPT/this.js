"use strict";
console.log(this);
function test() {
  console.log(this);
}
test();
const test2 = {
  a: 20,
  x: function () {
    console.log(this);
  },
};
test2.x();
const k = () => {
  console.log(this);
};
k();
const test3 = {
  y: 56,
  z: () => {
    console.log(this);
  },
};
test3.z();
