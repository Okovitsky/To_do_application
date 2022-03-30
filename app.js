const todoInput = document.querySelector(".NewItem-input--input");
const todoButton = document.querySelector(".NewItem-create");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelectorAll(".ListNavigation-items-name");
const navigationRectangle = document.querySelector(
  ".ListNavigation-ellipsis-rectangle"
);
const navigationButton = document.querySelector(".ListNavigation-ellipsis");

todoButton.addEventListener("click", () => adToDo(todoInput.value));
todoList.addEventListener("click", deleteAndCheckItem);
filterOption.forEach((e) => {
  e.addEventListener("click", filterTodo);
  filterOption[0].classList.add("selected1");
});
adToDo("Workout for 30 minutes at the gym");
adToDo("Clean the house and backyard");
adToDo("Clean the house and backyard");
let intervalid;
const navigation = document.querySelector(".ListNavigation-items");

navigationButton.addEventListener("click", function () {
  if (!navigation.classList.contains("open")) {
    navigation.classList.add("menu-active");
    setTimeout(() => {
      navigation.classList.add("open");
      navigationRectangle.classList.add(
        "ListNavigation-ellipsis-rectangle-shadow"
      );
    }, 0);
  }

  if (navigation.classList.contains("open")) {
    clearTimeout(intervalid);
    navigation.classList.remove("menu-active");
    intervalid = setTimeout(() => {
      navigation.classList.remove("open");
      navigationRectangle.classList.remove(
        "ListNavigation-ellipsis-rectangle-shadow"
      );
    }, 0);
  }
});

function adToDo(name) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //COMPLETED BUTTON
  const completeButton = document.createElement("div");
  completeButton.innerHTML =
    '<div class="completeButton-default"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="#CBCBCB"/></svg></div>' +
    '<div class="completeButton-hovered"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" fill="#4E4E4E" stroke="#4E4E4E"/><path d="M3 5.99997L5.00001 7.99998" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 8L9 4" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  completeButton.classList.add("completeButton");
  newTodo.appendChild(completeButton);

  //CHECKED ICON
  const checkedIcon = document.createElement("div");
  checkedIcon.innerHTML =
    '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" fill="#4E4E4E" stroke="#4E4E4E"/><path d="M3 5.99997L5.00001 7.99998" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 8L9 4" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  checkedIcon.classList.add("checkedIcon");
  newTodo.appendChild(checkedIcon);

  //DELETED ICON
  const deletedIcon = document.createElement("div");
  deletedIcon.innerHTML =
    '<svg width="18" height="18" viewBox="0 0 18 18" fill="#EB3D3D" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/><rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4" transform="rotate(45 10.6971 6.73724)" fill="white"/><rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4" transform="rotate(-45 6.73726 7.30292)" fill="white"/></svg>';
  deletedIcon.classList.add("deletedIcon");
  newTodo.appendChild(deletedIcon);

  //TEXT
  const text = document.createElement("div");
  text.innerText = name;
  completeButton.classList.add("todo-item-text");
  newTodo.appendChild(text);

  // TRASH BUTTON
  const trashButton = document.createElement("div");
  trashButton.innerHTML =
    '<div class="trashButton-default"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/><rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4" transform="rotate(45 10.6971 6.73724)" fill="#EB3D3D"/><rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4" transform="rotate(-45 6.73726 7.30292)" fill="#EB3D3D"/></svg></div>' +
    '<div class="trashButton-hovered"><svg width="18" height="18" viewBox="0 0 18 18" fill="#EB3D3D" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/><rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4" transform="rotate(45 10.6971 6.73724)" fill="white"/><rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4" transform="rotate(-45 6.73726 7.30292)" fill="white"/></svg></dir>';
  trashButton.classList.add("trashButton");
  newTodo.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}
function deleteAndCheckItem(e) {
  const item = e.target;
  console.log(item);
  if (item.classList[0] === "trashButton-hovered") {
    const todo = item.parentElement.parentElement.parentElement;
    todo.classList.add("removed");
    console.log(todo);
    todo.style.display = "none";
  }

  if (item.classList[0] === "completeButton-hovered") {
    const todo = item.parentElement.parentElement.parentElement;
    console.log(todo);
    todo.classList.add("completed");
    console.log(todo);
    todo.style.display = "none";
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    if (e.target.value === 1) {
      //inProgress
      filterOption[2].classList.remove("selected1");
      filterOption[1].classList.remove("selected1");
      filterOption[0].classList.add("selected1");
      todoInput.style.display = "flex";
      todoButton.style.display = "flex";
      todo.style.pointerEvents = "all";
      todo.querySelector(".trashButton").style.display = "flex";
      todo.querySelector(".completeButton").style.display = "flex";
      todo.querySelector(".checkedIcon").style.display = "none";
      todo.querySelector(".deletedIcon").style.display = "none";
      if (
        !todo.classList.contains("completed") &&
        !todo.classList.contains("removed")
      ) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
    } else if (e.target.value === 2) {
      //completed
      filterOption[1].classList.add("selected1");
      filterOption[0].classList.remove("selected1");
      filterOption[2].classList.remove("selected1");
      todoInput.style.display = "none";
      todoButton.style.display = "none";
      todo.style.pointerEvents = "none";
      todo.querySelector(".trashButton").style.display = "none";
      todo.querySelector(".completeButton").style.display = "none";
      todo.querySelector(".checkedIcon").style.display = "block";
      todo.querySelector(".deletedIcon").style.display = "none";

      if (todo.classList.contains("completed")) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
    } else if (e.target.value === 3) {
      //removed
      filterOption[2].classList.add("selected1");
      filterOption[0].classList.remove("selected1");
      filterOption[1].classList.remove("selected1");
      todoInput.style.display = "none";
      todoButton.style.display = "none";
      todo.style.pointerEvents = "none";
      todo.querySelector(".completeButton").style.display = "none";
      todo.querySelector(".trashButton").style.display = "none";
      todo.querySelector(".checkedIcon").style.display = "none";
      todo.querySelector(".deletedIcon").style.display = "block";
      if (todo.classList.contains("removed")) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
    }
  });
}
