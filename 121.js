//this keyword
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
  console.log("Clicked button");
  console.log("value of this");
  console.log(this);
});
// btn.addEventListener("click", function clickMe() {
//   console.log("Clicked button");
//   console.log("value of this");
//   console.log(this);
// });
