'use strict';

//  Display projects on nav bar
export function displayProject() {
  const getProjectName = document.querySelector('#project-name').value;
  const projectsContainer = document.querySelector('#project-container');
  const list = document.createElement('li');
  const projectTab = document.createElement('button');
  const deleteProjectBtn = document.createElement('button');

  deleteProjectBtn.textContent = 'X';
  projectsContainer.appendChild(list);
  list.appendChild(projectTab);
  list.appendChild(deleteProjectBtn);
  projectTab.textContent = getProjectName;
  projectTab.setAttribute('data-tab-target', `#${getProjectName}`);

  deleteProjectBtn.classList.add('delete-project');
  list.classList.add('projects');
  projectTab.classList.add('tabs');
  list.setAttribute('data-project', projectId());

  //Project panel
  const main = document.querySelector('main');
  const section = document.createElement('section');
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const taskButton = document.createElement('button');

  main.appendChild(section);
  section.appendChild(header);
  header.appendChild(h1);
  header.appendChild(taskButton);

  taskButton.textContent = 'Add task';
  h1.textContent = getProjectName;
  section.setAttribute('id', getProjectName);
  section.classList.add('project-container');
  section.setAttribute('data-tab-content', '');
  header.classList.add('project-header');
  taskButton.classList.add('open-task');
}

let idProject = 0;
function projectId() {
  return idProject++;
}




export function displayTask() {
  // <div class="task-container">
    // <input type="checkbox">
    // <p>Refactor</p>
    // <p>Description...</p>
    // <p>29/10/2022</p>
    // <button>Edit</button>
    // <button>Delete</button>
  // </div>
  const main = document.querySelector('main');
  const section = document.querySelector('.active-content');
  const container = document.createElement('div');
  const checkBox = document.createElement('input');
  const taskName = document.createElement('p');
  const description = document.createElement('p');
  const dueDate = document.createElement('p');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  checkBox.type = 'checkbox';

  main.appendChild(section);
  section.appendChild(container);
  container.appendChild(checkBox);
  container.appendChild(taskName);
  container.appendChild(description);
  container.appendChild(dueDate);
  container.appendChild(editBtn);
  container.appendChild(deleteBtn);
  
  container.classList.add('task-container');
  deleteBtn.classList.add('delete-task');

  const getTaskName = document.querySelector('#task-name').value;
  const getPriority = document.querySelector('#priority').value;
  const getDescription = document.querySelector('#description').value;
  const getDueDate = document.querySelector('#due-date').value;

  taskName.textContent = getTaskName;
  description.textContent = getDescription;
  dueDate.textContent = getDueDate;
  editBtn.textContent = 'Edit';
  deleteBtn.textContent = 'Delete';

  container.setAttribute('data-task', taskId());

  switch (+getPriority) {
    case 1:
      container.style = 'border: 2px solid green;   outline:1px  solid black;';
      break;
    case 2:
      container.style = 'border: 2px solid yellow;   outline:1px  solid black;';
      break;
    case 3:
      container.style ='border: 2px solid red;  outline:1px  solid black;';
  }
}

// add data attribute for task 
let counter = 0;
function taskId() {
  return counter ++;
}


// use today as minimum date
(function () {
  let minDate = new Date().toISOString().split('T')[0];
  document.querySelector('#due-date').value = minDate;
  document.querySelector('#due-date').setAttribute('min', minDate);
})();