import { Projects } from "./projects";
export {project};

//  open/close project modal
const projectModal = (function () {
  const projectForm = document.querySelector('#project-modal');
  const projectFormButton = document.querySelector('#open-project');
  const closeProjectFormButton = document.querySelector('#cancel-project');

  function openProjectModal () {
    projectForm.classList.add('active-content');
  }

  function closeProjectModal () {
    projectForm.classList.remove('active-content');
  }

  projectFormButton.addEventListener('click', openProjectModal);
  closeProjectFormButton.addEventListener('click', closeProjectModal);

  return {
    closeProjectModal
  }
})();


//Create project
const project = (function () {
  const projects = [];
  const projectName = document.querySelector('#project-name');
  const addProjectButton = document.querySelector('#add-project');

  function createProject () {
    if (!projectName.value) {
      alert('Please enter project name');
    } else {
      projects.push(new Projects(projectName.value, createId()));
      createProjectTab();
      createProjectPanel();
      projectName.value = '';
      projectModal.closeProjectModal();
      tabSwitch(); // RUn it so it applies to newly created project tab
      taskModal();
      console.log(projects);
      createId();
    }
  };

  function createId () {
    projects.forEach((item, id) => {
      item.id = id + 1;
    })
  }

  function createProjectTab () {
    const tabContainer = document.querySelector('#tab-container');
    const tabList = document.createElement('li');
    const tabButton = document.createElement('button');

    tabContainer.appendChild(tabList);
    tabList.appendChild(tabButton);

    tabButton.textContent = projectName.value;
    tabButton.setAttribute('data-tab-target', `#${projectName.value}`);

  }

  function createProjectPanel () {
    const projectPanelContainer = document.querySelector('#main');
    const projectSection = document.createElement('section');
    const projectHeader = document.createElement('header');
    const projectTitle = document.createElement('h1');
    const taskButton = document.createElement('button');

    projectPanelContainer.appendChild(projectSection);
    projectSection.appendChild(projectHeader);
    projectHeader.appendChild(projectTitle);
    projectTitle.textContent = projectName.value;
    projectHeader.appendChild(taskButton);
    taskButton.textContent = '+Add task';

    taskButton.classList.add('task-button');
    projectSection.classList.add('hidden');
    projectHeader.classList.add('content-header');
    projectSection.setAttribute('id', projectName.value);
    projectSection.setAttribute('data-tab-content', "");
  }

  function tabSwitch () {
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active-content');
        });
        tabs.forEach(tab => {
          tab.classList.remove('active-button');
        });
        tab.classList.add('active-button');
        target.classList.add('active-content');
      });
    });
  }

  function taskModal () {
    const taskButton = document.querySelectorAll('.task-button');
    const taskModal = document.querySelector('#task-modal');
  
    function openModal () {
      taskModal.classList.add('active-content');
    }
    
    taskButton.forEach(button => {
      button.addEventListener('click', openModal);
    })
  }

  addProjectButton.addEventListener('click', createProject);
  return {
    tabSwitch
  }
})();