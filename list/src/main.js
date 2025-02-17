// Select DOM elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//Add a task function
function addTask(event){
    event.preventDefault(); //avoid the page from reloading

    const taskText = taskInput.value.trim(); //remove whitespace before and after the string
    if (taskText === '')
    return;

    //Create & add class elements to the list
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    li.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.textContent = 'Supprimer';
    deleteButton.onclick = () => {
        taskList.removeChild(li);
    };

    //Add the button at the end of the task
    li.appendChild(deleteButton);

    //Add the task to the list
    taskList.appendChild(li);

    //Reload text input
    taskInput.value ='';
}

// Add an event Listener to add the form
taskForm.addEventListener('submit', addTask);