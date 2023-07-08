//innerHtml to add html element

const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New Todo</li>";
todoList.innerHTML = todoList.innerHTML + "<li>New Todo</li>";
todoList.innerHTML = todoList.innerHTML + "<li>Another Todo</li>";
