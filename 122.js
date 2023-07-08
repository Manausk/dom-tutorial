// console.log("Arthur");
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
// allButtons.addEventListener("click", function () {
//   console.log("you cliked me");
// });

// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     // console.log("You clicked me");
//     console.log(this.textContent);
//   });
// }

// for (let i = 0; i < allButtons.length; i++) {

//   allButtons[i].addEventListener("click", function () {
//     console.log(this.textContent);
//   });
// }

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(this.textContent);
  });
});
