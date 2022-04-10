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
adToDo("Build a modern To do app");
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
    '<div class="completeButton-default"><img src="images/completeButton-default.svg"></div>' +
    '<div class="completeButton-hovered"><img src="images/completeButton-hovered.svg"></div>';
  completeButton.classList.add("completeButton");
  newTodo.appendChild(completeButton);

  //CHECKED ICON
  const checkedIcon = document.createElement("div");
  checkedIcon.innerHTML =
    '<img src="images/completeButton-hovered.svg">';
  checkedIcon.classList.add("checkedIcon");
  newTodo.appendChild(checkedIcon);

  //DELETED ICON
  const deletedIcon = document.createElement("div");
  deletedIcon.innerHTML =
    '<img src="images/trashButton-hovered.svg">';
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
    '<div class="trashButton-default"><img src="images/trashButton-default.svg"></div>' +
    '<div class="trashButton-hovered"><img src="images/trashButton-hovered.svg"></div>';
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
