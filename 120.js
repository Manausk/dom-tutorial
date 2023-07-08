//intro to events
//click
//event add karne ke 3 tareeke hain
//1)
//2)
// const btn = document.querySelector(".btn-headline");
// console.log(btn);

// btn.onclick = function () {
//   console.log("you clicked me!!!");
// };
//method add event listener
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click", () => {
  console.log("Clicked button , arrow ");
});
// btn.addEventListener("click", function clickMe() {
//   console.log("Clicked button");
// });
// const btn = document.querySelector(".btn-headline");
// function clickMe() {
//   console.log("you clicked me");
// }
// btn.addEventListener("click", clickMe);
