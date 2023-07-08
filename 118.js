//static list vs live list

//queryselectorall humein static list degi
//getElement by something humein live list degi

//
// const ul = document.querySelector(".todo-list");
//
// const listItems = document.querySelectorAll(".todo-list li");
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.append(sixthLi);
console.log(listItems);
