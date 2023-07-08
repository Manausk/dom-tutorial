const mainButton = document.querySelector("button");
// console.log(mainButton);
const body = document.querySelector("body");
const currentColor = document.querySelector(".currentColor");
//
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}

mainButton.addEventListener("click", () => {
  const randomColor = randomColorGenerator();
  console.log(randomColor);
  body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
});
