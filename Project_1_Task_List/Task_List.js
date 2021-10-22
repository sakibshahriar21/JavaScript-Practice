//define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

//define event listeners 
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded',getTasks); //

//Define function
//Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert("Add a task!");
    } else {
        //create  li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#'); //# is to look like x as clickable
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);

        //Storing tasks in local storage
        storeTaskInLocalStrage(taskInput.value);

        taskInput.value = '';

    }
    e.preventDefault();
}

//Remove Task
function removeTask(e) {
    if(e.target.hasAttribute('href')){
        if(confirm("Are you sure ?")){
            let ele = e.target.parentElement;
            ele.remove();
            //console.log(ele);
            removeFromLS(ele);
        }
    }
}

//Clear task

function clearTask(e) {
    //taskList.innerHTML = ""; //easier approach but slower!

    //Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}

//Filter Task
function filterTask(e){
    let text = e.target.value.toLowerCase();
    //console.log(text);

    document.querySelectorAll('li').forEach(task => { //takes user input
        let item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text)!= -1){ //check if it matches with any tasks 
            task.style.display = 'block'; // it will show the related task  
        } else {
            task.style.display = 'none'; // it won't show
        }
    });
}

// Store in local storage
function storeTaskInLocalStrage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) { //check of local strage have any item name tasks ,if no items found then array will be empty
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }
    tasks.push(task); // push items in empty array

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Get tasks
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) { //check of local strage have any item name tasks ,if no items found then array will be empty
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }

    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task  + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#'); //# is to look like x as clickable
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}

//Remove from local storage

function removeFromLS(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) { //check of local strage have any item name tasks ,if no items found then array will be empty
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }

    //let str = taskItem.textContent.trim;
    let li = taskItem;
    li.removeChild(li.lastChild); // <a></a> , we will take only name portion of tasks

    tasks.forEach((task, index) => {
        if(li.textContent.trim() === task){
            tasks.splice(index, 1); //splice() add or remove objects in array
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}