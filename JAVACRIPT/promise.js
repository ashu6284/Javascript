// // const promise = createUsrName("ashu");
// // promise.then(function showName(name) {
// //   console.log(name);
// // });

// // function createUsrName(name) {
// //   const pr = new Promise(function (resolve, reject) {
// //     if (true) {
// //       resolve(name);
// //     }
// //     if (false) {
// //       const err = new Error("wrong something");
// //       reject(err);
// //     }
// //   });
// //   return pr;
// // }
// const promise = createUserName();
// promise.then(function (namasase) {
//   console.log(namasase);
// });

// function createUserName() {
//   const password = "Ashu";
//   const pr = new Promise(function (resolve, reject) {
//     if (true) {
//       resolve(password);
//     }
//     if (false) {
//       const err = new Error("error");
//       reject(err);
//     }
//   });
//   return pr;
// }

// BASIC PROMISE CREATION

const pr = new Promise((resolve, reject) => {
  if (false) {
    resolve("resolved");
  } else if (true) {
    const err = new Error("not valid promise");
    reject(err);
  }
  return pr;
});
const promise = pr
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.error(e));
