const todoInput = document.querySelector(".NewItem-input--input");
const todoButton = document.querySelector(".NewItem-create");
const todoList = document.querySelector(".todo-list");
todoButton.addEventListener("click", adToDo);

function adToDo(event) {
  console.log("Click");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  
  // CHECK MARK BUTTON
  const completeButton = document.createElement("div");
  completeButton.innerHTML ='<div class="completeButton-default"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="#CBCBCB"/></svg></div>'+
'<div class="completeButton-hovered"><svg width="12" height="12" viewBox="0 0 12 12" fill="rgb(124, 124, 124)" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="#CBCBCB"/></svg></dir>';
  completeButton.classList.add("completeButton");

  newTodo.appendChild(completeButton);

//TEXT
const text = document.createElement("div");
  text.innerHTML =todoInput.value;
  completeButton.classList.add("todo-item-text");
  newTodo.appendChild(text);


  // CHECK TRASH BUTTON
  const trashButton = document.createElement("div");
  trashButton.innerHTML ='<div class="trashButton-default"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/><rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4" transform="rotate(45 10.6971 6.73724)" fill="#EB3D3D"/><rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4" transform="rotate(-45 6.73726 7.30292)" fill="#EB3D3D"/></svg></div>'+
'<div class="trashButton-hovered"><svg width="18" height="18" viewBox="0 0 18 18" fill="#EB3D3D" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/><rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4" transform="rotate(45 10.6971 6.73724)" fill="white"/><rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4" transform="rotate(-45 6.73726 7.30292)" fill="white"/></svg></dir>';
  trashButton.classList.add("trashButton");
  newTodo.appendChild(trashButton);
  todoList.appendChild(todoDiv);

  todoInput.value ="";
}
