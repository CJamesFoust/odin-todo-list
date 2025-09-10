
const newTaskNameInput = document.querySelector('#new-task-name-input');
const newTaskDescInput = document.querySelector('#new-task-desc-input');
const newTaskDateInput = document.querySelector('#new-task-date-input');
const newTaskPriorityInput = document.querySelector('#new-task-priority-input');
const newTaskListInput = document.querySelector('#new-task-list-input');
const newTaskCreateButton = document.querySelector('#new-task-create-button');

newTaskCreateButton.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(newTaskNameInput.value, newTaskDescInput.value, newTaskDateInput.value, newTaskPriorityInput.value, newTaskListInput.value);
})