// bubbling
document.querySelector(".container").addEventListener("click", () => {
  console.log("parents");
});
document.querySelector("button").addEventListener("click", () => {
  console.log("child");
});
