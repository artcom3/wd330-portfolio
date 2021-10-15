  
const tasksContainer   = document.querySelector('.tasks-container');
const newTaskInput     = document.querySelector('#input-task');
const taskCount        = document.querySelector('#task-count');

const addTaskButton    = document.querySelector('#addTask');
const taskTemplate     = document.querySelector('#task-template');

// Get the container element
const btnContainer = document.getElementById("filters");

// Get all buttons with class="btn" inside the container
const btns = btnContainer.getElementsByClassName("btn");

let activeFilter = 'filter-all'

// Loop through the buttons and add the active class to the current/touchend button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("touchend", function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        activeFilter = this.id
        render();
    });
}


// Local Storage Keys
const LOCAL_STORAGE_KEY = 'tasks-key';

let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

function createTask(name) {
    return {
        id: Date.now().toString(),
        name: name,
        complete: false
    };
}

// Checking the tasks
tasksContainer.addEventListener('touchend', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        const selectedTask = tasks.find(task => task.id === e.target.parentElement.id)
        selectedTask.complete = e.target.checked;
        save();
        render();
    }
})

// Adding New Task
addTaskButton.addEventListener('touchend', e => {
    e.preventDefault();
    const inputTask = newTaskInput.value;

    if (inputTask == null || inputTask == '') 
        return;

    const task = createTask(inputTask);
    newTaskInput.value = null;
    tasks.push(task);
    save();
    render();
})

function removeTask(element) {
    taskId = element.parentElement.id

    let index = tasks.map( task => task.id).indexOf(taskId);

    tasks.splice(index, 1)
    save();
    render();
}

// Save to the Local Storage
function save() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

function clearTasksContainer() {
    tasksContainer.textContent = '';
}


function toRender() {
    let tasksToRender = [];

    switch (activeFilter) {
        case 'filter-all':
            tasksToRender = tasks;
            break;
        case 'filter-active':
            tasksToRender = tasks.filter(task => !task.complete);
            break;
        case 'filter-completed':
            tasksToRender = tasks.filter(task => task.complete);
            break;
    }
    // console.log(tasksToRender);

    return tasksToRender;
}

function renderTaskCount() {
    const incompleteTasks = tasks.filter(task => !task.complete).length;
    const taskString = incompleteTasks === 1 ? "task" : "tasks";
    taskCount.textContent = `${incompleteTasks} ${taskString} left`;
}

function render() {

    clearTasksContainer();

    renderTasks = toRender()

    renderTasks.forEach(task => {

        const taskHtmlElement = document.importNode(taskTemplate.content, true);
        
        const taskDiv = taskHtmlElement.querySelector('.task');
        taskDiv.id = task.id;
        
        const checkbox = taskHtmlElement.querySelector('input');

        checkbox.checked = task.complete;
        
        const label = taskHtmlElement.querySelector('label');
        label.textContent = task.name;
        label.htmlFor = task.id;
        
        tasksContainer.appendChild(taskHtmlElement);
    })

    renderTaskCount()
}

render();