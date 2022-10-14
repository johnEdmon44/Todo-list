import './style.css';

'use strict';

const modal = (function () {
  const openProject = document.querySelector('#open-project');
  const projectModal = document.querySelector('#project-modal');
  const closeProject = document.querySelector('#close-project');
  const openTask = document.querySelector('#open-task');
  const taskModal = document.querySelector('#task-modal');
  const closeTask = document.querySelector('#close-task');

  //Project modal
  openProject.addEventListener('click', () => {
    projectModal.classList.add('visible');
    taskModal.classList.remove('visible');
  });

  closeProject.addEventListener('click', () => {
    projectModal.classList.remove('visible');
  });

  //Task modal
  openTask.addEventListener('click', () => {
    taskModal.classList.add('visible');
    projectModal.classList.remove('visible');
  });

  closeTask.addEventListener('click', () => {
    taskModal.classList.remove('visible');
  });

  return {
    projectModal,
  }
})();


//tab switching
(function () {
 const inbox = document.querySelector('#inbox');
 const todayTask = document.querySelector('#today');
 const weekTask = document.querySelector('#week');

 
 const inboxBtn = document.querySelector('#tab-inbox');
 const todayBtn = document.querySelector('#tab-today');
 const weekBtn = document.querySelector('#tab-week');

 inboxBtn.addEventListener('click', () => {
    inbox.classList.add('visible');
    todayTask.classList.remove('visible');
    weekTask.classList.remove('visible');
 });

 todayBtn.addEventListener('click', () => {
  inbox.classList.remove('visible');
  todayTask.classList.add('visible');
  weekTask.classList.remove('visible');
});

weekBtn.addEventListener('click', () => {
  inbox.classList.remove('visible');
  todayTask.classList.remove('visible');
  weekTask.classList.add('visible');
});
})();

//set a minimum date
(function () {
  let minDate = new Date().toISOString().split('T')[0];
  document.querySelector('#start').value = minDate;
  document.querySelector('#start').setAttribute('min', minDate);
})();


//create projects
const project = (function () {
  const project = document.querySelector('#project-name');
  const addProjectBtn = document.querySelector('#add-project');
  const projects = [{title: 'qwe'}];
  
  const createProjects = title => {
    return {title};
  }
  
  function addProject () {

    projects.forEach(titles => {
      if(titles.title == project.value) {
        alert('Project already exist');
      } else if(!project.value) {
        alert('Please enter a project name');
      } else {
        projects.push(createProjects(project.value));
        modal.projectModal.classList.remove('visible');
        displayProject.displayProject();
      }
    });
  }
  
  addProjectBtn.addEventListener('click', () => {
    addProject();
  });

  return {
    project,
  }
})();


//display projects 
const displayProject = (function () {
  function displayProject () {
    const projects = document.querySelector('#nav-projects');
    const projectList = document.createElement('li');
    const projectBtn = document.createElement('button');
    projectBtn.textContent = project.project.value;
    projects.appendChild(projectList);
    projectList.appendChild(projectBtn);
  }

  return {
    displayProject
  }
})();