let button = document.getElementById('add');
let todoList = document.getElementById('todoList');
let input = document.getElementById('input');

let todos = [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addTodo(todo));
}

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        todos.push(input.value);
        localStorage.setItem('todos', JSON.stringify(todos));
        addTodo(input.value);
        input.value = '';
    }
});

function addTodo(todo) {
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para);

    para.addEventListener('click', () => {
        toggleCompleted(para);
        updateLocalStorage();
    });

    para.addEventListener('dblclick', () => {
        todoList.removeChild(para);
        remove(todo);
    });
}

function isCompleted(todo) {
    return todos.includes('completed-' + todo);
}

function toggleCompleted(para) {
    const todoText = para.innerText;
    if (isCompleted(todoText)) {
        para.style.textDecoration = 'none';
        remove('completed-' + todoText);
    } else {
        para.style.textDecoration = 'line-through';
        todos.push('completed-' + todoText);
    }
}

function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}