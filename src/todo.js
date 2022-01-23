const toDoDiv = document.querySelector(".toDoForm");
const toDoForm = document.querySelector(".inputToDo");
const todoInput = toDoForm.querySelector("input");
const inputSubmitBtn = toDoForm.querySelector("button");
const toDoList = document.querySelector(".toDoList");

// const todoForm = document.querySelector(".todo");
// const todo = document.querySelector(".write input");

const todoUl = document.querySelector("ul");

let toDos=[];
  
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function removeList(event) {
  const removeItem = event.target.parentElement;
  removeItem.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(removeItem.id));
  saveToDos();
}

function writeTodos(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  
  const span = document.createElement("span");
  span.innerText=newToDo.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText="삭제";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);

  deleteBtn.addEventListener("click", removeList);
}

function inputToDo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value="";
  
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  writeTodos(newTodoObj);
  
  saveToDos();
}


const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos=parsedTodos;
  parsedTodos.forEach(writeTodos);
}


toDoForm.addEventListener("submit", inputToDo);
