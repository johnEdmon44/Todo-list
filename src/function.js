import { Projects } from "./projects";
import { Tasks } from "./task";


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
(function () {
  const projects = [];
  const projectName = document.querySelector('#project-name');
  const addProjectButton = document.querySelector('#add-project');

  function createProject () {
    if (!projectName.value) {
      alert('Please enter project name');
    } else {
      projects.push(new Projects(projectName.value));
      createProjectTab();
      createProjectPanel();
      projectName.value = '';
      projectModal.closeProjectModal();
      runTabSwitching();
    }
  };

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

    projectPanelContainer.appendChild(projectSection);
    projectSection.appendChild(projectHeader);
    projectHeader.appendChild(projectTitle);
    projectTitle.textContent = projectName.value;

    projectSection.classList.add('hidden');
    projectHeader.classList.add('content-header');
    projectSection.setAttribute('id', projectName.value);
    projectSection.setAttribute('data-tab-content', "");
  }
  
  function runTabSwitching() {
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
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

  addProjectButton.addEventListener('click', createProject);
})();



  
