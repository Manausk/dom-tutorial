//document.createElement()
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Arthur grinds";

// // const newTodoItemText = document.createTextNode("Arthur Grinds");
// // newTodoItem.append(newTodoItemText);
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);

// // newTodoItem.appendChild(newTodoItemText);
// console.log(newTodoItem);

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);
//

//

const newTodoItem = document.createElement("li");
const todoList = document.querySelector(".todo-list");
newTodoItem.textContent = "Arthur grinds";
// todoList.before(newTodoItem);
todoList.after(newTodoItem);
