async function fetching() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);
}
fetching();
console.log("");
