let input = document.querySelector('#taskInput');
let addTaskBtn = document.querySelector('#addTaskButton');
let taskTable = document.querySelector('#taskTable tbody');
let clearTasksBtn = document.querySelector('#clearTasksButton');
let saveTasksBtn = document.querySelector('#saveTasksButton');
let loadTasksBtn = document.querySelector('#loadTasksButton');
let deleteAllTasksBtn = document.querySelector('#deleteAllTasksButton');

let taskCount = 0;

// Function to add a new task
addTaskBtn.addEventListener('click', () => {
    let taskText = input.value.trim();
    if (taskText === '') return;
    taskCount++;
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${taskCount}</td>
        <td>${taskText}</td>
        <td><button class="deleteTaskButton">Delete</button></td>
    `;

    taskTable.appendChild(newRow);
    input.value = '';
});

// Function to delete a specific task
taskTable.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteTaskButton')) {
        event.target.closest('tr').remove();
        taskCount--;
        updateTaskNumbers();
    }
});
// Function to update task numbers after deletion
function updateTaskNumbers() {
    let rows = taskTable.querySelectorAll('tr');
    rows.forEach((row, index) => {
        row.querySelector('td').textContent = index + 1;
    });
}   
// Function to clear all tasks
clearTasksBtn.addEventListener('click', () => {
    taskTable.innerHTML = '';
    taskCount = 0;
});
// Function to save tasks to local storage
saveTasksBtn.addEventListener('click', () => {
    let tasks = [];
    let rows = taskTable.querySelectorAll('tr');
    rows.forEach(row => {
        let taskText = row.querySelector('td:nth-child(2)').textContent;
        tasks.push(taskText);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
});
// Function to load tasks from local storage
loadTasksBtn.addEventListener('click', () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        taskTable.innerHTML = '';
        taskCount = 0;
        tasks.forEach(taskText => {
            taskCount++;
            let newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${taskCount}</td>
                <td>${taskText}</td>
                <td><button class="deleteTaskButton">Delete</button></td>
            `;
            taskTable.appendChild(newRow);
        });
    }
});
// Function to delete all tasks
deleteAllTasksBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete all tasks?')) {
        taskTable.innerHTML = '';
        taskCount = 0;
    }
});
// Function to handle Enter key for adding tasks
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});
// Function to handle Enter key for deleting all tasks
deleteAllTasksBtn.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        deleteAllTasksBtn.click();
    }
});