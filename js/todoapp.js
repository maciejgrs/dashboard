let newTask;
let idNumber = 0;

let editedTodo;
let task;

let completed;
let completedArray = [];
let intersections;

const todoInput = document.querySelector(".todo-input");
const alertInfo = document.querySelector(".alert-info");
const addBtn = document.querySelector(".add-btn");
const ulList = document.querySelector(".todo-list ul");
const allTasks = document.getElementsByTagName("li");
const popup = document.querySelector(".popup");
const popupInfo = document.querySelector(".popup-info");
const popupInput = document.querySelector(".popup-input");
const addPopupBtn = document.querySelector(".accept");
const closeTodoBtn = document.querySelector(".cancel");

let todos = [];

const addNewTask = () => {
  if (todoInput.value !== "") {
    newTask = document.createElement("li");
    newTask.innerText = todoInput.value;
   
    newTask.setAttribute("id", idNumber);
    ulList.appendChild(newTask);
    todoInput.value = "";
    alertInfo.innerText = "";
    createToolsArea();
    idNumber++;
  } else {
    alertInfo.innerText = "Wpisz treść zadania!";
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  newTask.appendChild(toolsPanel);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerText = "EDIT";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  toolsPanel.appendChild(completeBtn);
  toolsPanel.appendChild(editBtn);
  toolsPanel.appendChild(deleteBtn);
};

const checkClick = (e) => {
  if (e.target.classList.value !== "") {
    if (e.target.closest("button").classList.contains("complete")) {
      // e.target.closest("li").classList.toggle("completed");
      completeTask(e);
    } else if (e.target.closest("button").classList.contains("edit")) {
      editTask(e);
    } else if (e.target.closest("button").classList.contains("delete")) {
      deleteTask(e);
    }
  }
};

const editTask = (e) => {
  const oldTodo = e.target.closest("li").id;

  editedTodo = document.getElementById(oldTodo);
  popupInput.value = editedTodo.firstChild.textContent;

  // let smth = editedTodo.firstChild.textContent;

  task = editedTodo.firstChild.textContent;

  popup.style.display = "flex";
};

const changeTodo = () => {
  if (popupInput.value !== "") {
    editedTodo.firstChild.textContent = popupInput.value;

  

    popup.style.display = "none";

   
    popupInput.innerText = "";
  } else {
    popupInfo.innerText = "Musisz podać jakąś treść!";
  }
};

const deleteTask = (e) => {
  const todoTask = e.target.closest("li");
  todoTask.remove();



  if (allTasks.length === 0) {
    alertInfo.innerText = "Brak zadań na liście.";
  }
};

const closePopup = () => {
  popup.style.display = "none";
  popupInfo.innerText = "";
};

addBtn.addEventListener("click", addNewTask);
ulList.addEventListener("click", checkClick);
addPopupBtn.addEventListener("click", changeTodo);
closeTodoBtn.addEventListener("click", closePopup);




function completeTask(e) {
  const completedTask = e.target.closest("li").id;
  completed = document.getElementById(completedTask);
  let x = completed.firstChild.textContent;

  if (completed.classList.contains("completed")) {
    completed.classList.remove("completed");

 
  } else {
    completed.classList.add("completed");

   
  }
}


