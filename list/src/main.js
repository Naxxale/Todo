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
    li.classList.add('list-group-item', 'd-flex', 'align-items-center');
    li.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn');
    deleteButton.textContent = 'Supprimer';
    deleteButton.onclick = () => {
        taskList.removeChild(li);
    };

    //Create an update button
    const updateButton = document.createElement('button');
    updateButton.classList.add('btn');
    updateButton.textContent = "Modifier";
    updateButton.onclick = () => {

        //Onclick allow user to change text content
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText;
        input.classList.add('form-control', 'me-2');

        //create save button
        const saveButton = document.createElement('button');
        saveButton.classList.add('btn');
        saveButton.textContent = "Enregistrer";
        saveButton.onclick = () => {
            li.textContent = input.value; //replace old content with new content
            li.appendChild(updateButton);
            li.appendChild(deleteButton);
        };

        //Empty li content & add input + save button
        li.innerHTML = '';
        li.appendChild(input);
        li.appendChild(saveButton);
    };

    //Add the button at the end of the task
    li.appendChild(deleteButton);
    li.appendChild(updateButton);

    //Add the task to the list
    taskList.appendChild(li);

    //Reload text input
    taskInput.value ='';
}

// Add an event Listener to add the form
taskForm.addEventListener('submit', addTask);