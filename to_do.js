let input = document.querySelector('#taskInput');
let addTaskBtn = document.querySelector('#addTaskButton');
let taskList = document.querySelector('#taskList');
let clearTasksBtn = document.querySelector('#clearTasksButton');
let saveTasksBtn = document.querySelector('#saveTasksButton');
let loadTasksBtn = document.querySelector('#loadTasksButton');
let deleteAllTasksBtn = document.querySelector('#deleteAllTasksButton');

// Function to add a new task
addTaskBtn.addEventListener('click', () => {
    let taskText = input.value.trim();
    if (taskText === '') return;
    let newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', () => {
        newTask.style.textDecoration = newTask.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        newTask.style.color = newTask.style.textDecoration === 'line-through' ? 'gray' : 'black';
    });
    clearTasksBtn.addEventListener('click', () => {
        if (newTask.style.textDecoration === 'line-through') {
            taskList.removeChild(newTask);
        }
    });
    

    taskList.appendChild(newTask);
    input.value = '';
});