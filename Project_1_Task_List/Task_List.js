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
}