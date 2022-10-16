import {Projects} from './projects';
'use strict';


// Inbox, Today, This week tab switching
(function () {
  const inbox = document.querySelector('#inbox');
  const today = document.querySelector('#today');
  const thisWeek = document.querySelector('#this-week');

  const inboxBtn = document.querySelector('#inbox-button');
  const todayBtn = document.querySelector('#today-button');
  const thisWeekBtn = document.querySelector('#this-week-button');

  inboxBtn.addEventListener('click', () => {
    inbox.classList.add('active-content');
    inboxBtn.classList.add('active-button');

    today.classList.remove('active-content');
    todayBtn.classList.remove('active-button');

    thisWeek.classList.remove('active-content');
    thisWeekBtn.classList.remove('active-button');
  });


  todayBtn.addEventListener('click', () => {
    inbox.classList.remove('active-content');
    inboxBtn.classList.remove('active-button');

    today.classList.add('active-content');
    todayBtn.classList.add('active-button');

    thisWeek.classList.remove('active-content');
    thisWeekBtn.classList.remove('active-button');
  });


  thisWeekBtn.addEventListener('click', () => {
    inbox.classList.remove('active-content');
    inboxBtn.classList.remove('active-button');

    today.classList.remove('active-content');
    todayBtn.classList.remove('active-button');

    thisWeek.classList.add('active-content');
    thisWeekBtn.classList.add('active-button');
  });
})();



//Open/close project modal
(function () {
  const projectModal = document.querySelector('#project-modal');
  const openProject = document.querySelector('#open-project');
  const closeProject = document.querySelector('#cancel-project');

  openProject.addEventListener('click', () => {
    projectModal.classList.add('active-content');
  });

  closeProject.addEventListener('click', () => {
    projectModal.classList.remove('active-content');
  });
})();



//Create projects
(function () {
  const projectsArray = []; 
  const addProject = document.querySelector('#add-project');
  const projectName = document.querySelector('#project-name');
  const projectModal = document.querySelector('#project-modal');
  const projectNamesContainer = document.querySelector('#project-name-container');
  const createProjectList = document.createElement('li');
  const createProjectButton = document.createElement('button')
  
  function pushProjectName () {
    projectsArray.push(new Projects(projectName.value));
    projectsArray.forEach(names => {
      console.log(names.projectName)
    });
  }

  function resetProjectInput () {
    projectName.value = '';
    projectModal.classList.remove('active-content');
  }

  function displayProjectName () {
    projectNamesContainer.appendChild(createProjectList);
    createProjectList.appendChild(createProjectButton);
    createProjectButton.textContent = projectName.value;
    createProjectButton.classList.add('projects');
  }

  function createProjectTabs () {
    const mainContainer = document.querySelector('#main');
    const projectTabs = document.createElement('section');
    const projectHeaderContainer = document.createElement('header');
    const projectTitle = document.createElement('h1');
    
    projectTabs.classList.add('hidden');
    projectHeaderContainer.classList.add('content-header');
    projectTabs.classList.add('tabs');

    mainContainer.appendChild(projectTabs);
    projectTabs.appendChild(projectHeaderContainer);
    projectHeaderContainer.appendChild(projectTitle);
    projectTitle.textContent = projectName.value;
  }

  addProject.addEventListener('click', () => {
    pushProjectName();
    displayProjectName();
    createProjectTabs();
    resetProjectInput();
  });
})();