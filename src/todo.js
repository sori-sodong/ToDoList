const inputSubmitBtn = document.querySelector(".inputSubmitBtn");
const todoForm = document.querySelector(".todo");
const todo = document.querySelector(".write input");
const todoUl = document.querySelector("ul");

let toDos=[];
  
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}



function checkForm(event){
  const checkConfirm = event.target;
  const eraseSpan = checkConfirm.parentElement;
  
  
  if(checkConfirm.checked === true) {
    eraseSpan.style.textDecoration = "line-through";
  } else {
    eraseSpan.style.textDecoration = "none"
  }
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
  const checkDone = document.createElement("input");
  checkDone.type="checkbox";

  const span = document.createElement("span");
  span.innerText=newToDo.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText="delete";


  li.appendChild(checkDone);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoUl.appendChild(li);
  

  checkDone.addEventListener("click", checkForm);  
  let checkBox = checkForm;
  newToDo.check=checkBox;


  deleteBtn.addEventListener("click", removeList);
}

function inputToDo(event) {
  event.preventDefault();
  const newTodo = todo.value;
  const checkBox=false;
  todo.value="";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    check: checkBox
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


inputSubmitBtn.addEventListener("click", inputToDo);
