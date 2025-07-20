let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const todoList = document.getElementById('todo-list');

function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>
                <input type="checkbox" ${task.done ? 'checked' : ''} onclick="toggleTask(${index})">
                ${task.text}
            </span>
            <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;
        todoList.appendChild(li);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const newTask = document.getElementById('new-task').value.trim();
    if (newTask) {
        tasks.push({ text: newTask, done: false });
        document.getElementById('new-task').value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
