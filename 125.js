//practise using click events
const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(firstButton);
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "green";
    e.target.style.color = "#999";
  });
});
