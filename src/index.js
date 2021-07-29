document.addEventListener("DOMContentLoaded", () => {
});

const taskList = document.querySelector("#tasks")
const taskForm = document.querySelector('#create-task-form')

taskForm.addEventListener("submit", function(event){
  event.preventDefault()
  let newTask = document.querySelector("#new-task-description").value
  let taskItem = document.createElement("li");
  taskItem.innerText = newTask
  // when we appendchild we append an HTML element
  taskList.appendChild(taskItem)
  taskForm.reset()
});

// a delete function that will remove tasks from your list



