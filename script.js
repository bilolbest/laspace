// const url = "https://jsonplaceholder.typicode.com/posts";

// const form = document.querySelector(".form");
// const userName = document.querySelector(".userName");
// const range = document.querySelector(".range");
// const sendButton = document.querySelector(".send__button");

// fetch(url).then((data , fail) => {
//     return data.json();
// }).then((response) => console.log(response));

// async function request() {
//   let body = {
//     userName: userName.value,
//     range: range.value,
//   };

//   body = JSON.stringify(body);
//   const response = await fetch(url, { method: "POST", body });

//   // const answer = await response.json();
//   // console.log(answer);
// }

// sendButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   request();
// });

// const map = new Map();

// map.set("user", "Space");
// map.set(true, "LAsp");

// console.log(map.size);
// console.log(map.get("user"));
// console.log(map, keys().next());

// const set = new Set("12133");

// set.add("Space");

// console.log(set);

// const weakMap = new WeakMap(weakMap.set({ name: "Space" }, "Bilol"));

// console.log(weakMap.get());

// const users = ["Bilol", "Space"];

// users.forEach((element, index, array) => {
//   console.log(`${element} has ${index} in ${array}`);
// });

// const users = ["Bilol", "Space"];

// const obj = {
//   academy: "Step",
// };

// users.map((element, index, array) => {
//   console.log(`${element} has ${index} in ${array}`);
// });

// try {
//   const box = document.querySelector(".box");
//   box.classList.add("active");
// } catch (e) {
//   const error = new Error(e);
//   console.log(error);
// }

// const form = document.querySelector(".form");
// const userName = document.querySelector(".userName");
// const range = document.querySelector(".range");
// const sendButton = document.querySelector(".send__button");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const request = async (e) => {
//   e.preventDefault();
//   const body = new FormData(form);
//   const response = fetch(url, { method: "POST", body });
// };

// sendButton.addEventListener("click", request);

const arr = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
];

const start = [];
const finish = [];

arr.forEach(([a, b]) => {
  start.push(a);
  finish.push(b);
});

const result = finish.filter((f) => {
  return ~start.includes(f);
});

console.log(result);
