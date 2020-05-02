//Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.my-tasks');
const clearBtn = document.getElementById('clear-button');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#new-task');

//Load all event listeners
loadEventListeners();

//Function loadEventListeners()
function loadEventListeners (){
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear all task event
  clearBtn.addEventListener('click', clearAll);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//AddTask Function
function addTask(e){
  if (taskInput.value === ''){
    alert('Add a task');
  }

  //Create the li element
  const li = document.createElement('li');
  // Add class
  li.className = 'my-task-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class to the link
  link.className = 'delete-task';
  // Add icon html
  link.innerHTML = '<i class="fas fa-times-circle"></i>';
  // Append the link to the li
  li.appendChild(link);

  // Append the li to the ul
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = '';

  e.preventDefault();
}


// Remove task function
function removeTask (e){
  if (e.target.parentElement.classList.contains('delete-task')){
    if (confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }

  }
}

// Clear all function
function clearAll(e){

  // Faster
  while (taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

}

// Functio to filter
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.my-task-item').forEach(function (task){
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else {
      task.style.display = 'none';
    }
  });
}