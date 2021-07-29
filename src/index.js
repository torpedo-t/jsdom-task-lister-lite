const textField = document.findElementById("new-task-description")
const tasks = document.findElementById("tasks")
const form = document.getElementById('create-task-form')

function logSubmit(event) {
  event.preventDefault();
  let newTask = textField.value
  let taskItem = document.createElement("li");
  taskItem.innerHTML = newTask
  tasks.appendChild(newTask);
  form.reset()
}

form.addEventListener("submit", logSubmit);

document.addEventListener("DOMContentLoaded", function() {
});