const todoForm = document.querySelector(".form-todo");
// console.log(todoForm);
const todoInput = document.querySelector(".form-todo input[type=text]");
// console.log(todoInput);
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("form submitted");
  //   console.log(todoInput.value);
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = `
          <span class="text">${newTodoText}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
        `;
  newLi.innerHTML = newLiInnerHTML;
  //   console.log(newLi);
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  //   console.log(e.target);
  //check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    // console.log("You want to remove something");
    const liRemove = e.target.parentNode.parentNode;
    // console.log(liRemove);
    liRemove.remove();
  }
  if (e.target.classList.contains("done")) {
    // console.log(" create something?");
    const liSpan = e.target.parentNode.previousElementSibling;
    // console.log(liSpan);
    liSpan.style.textDecoration = "line-through";
  }
});
