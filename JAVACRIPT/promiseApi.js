const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("p1 success");
  }, 10000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("p2 fail");
  }, 2000);
});
const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("p3 success");
  }, 3000);
});
// Promise.all([p1, p2, p3])
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch((e) => console.error(e));

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((e) => console.error(e));

// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((e) => console.error(e));

// Promise.any([p1, p2, p3]).then(function (res) {
//   console.log(res);
// });
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((e) => console.error(e));
