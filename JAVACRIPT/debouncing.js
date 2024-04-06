let counter = 0;
function getData() {
  console.log("fetching", counter++);
}
// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     setTimeout(() => {
//       fn();
//     }, delay);
//   };
// }
function debounce(fn, delay) {
  let timer;
  return function (...arg) {
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(() => {
      fn();
    }, delay);
  };
}
const betterFunction = debounce(getData, 4000);
