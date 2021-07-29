const textField = document.findElementById("new-task-description")
const tasks = document.findElementById("tasks")
const form = document.getElementById('create-task-form')

function logSubmit(event) {
  tasks.textContent = `${textField.textContent}`
  event.preventDefault();
}

form.addEventListener("submit", logSubmit);

document.addEventListener("DOMContentLoaded", function() {
  logSubmit()
});