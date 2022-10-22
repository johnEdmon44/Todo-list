import { Projects } from "./projects";
import { Tasks } from "./task";
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
      projects.push(new Projects(projectName.value, projectName.value));
      createProjectTab();
      createProjectPanel();
      projectName.value = '';
      projectModal.closeProjectModal();
      tabSwitch(); // RUn it so it applies to newly created project tab
      taskModal();
    }
  };


  function createProjectTab () {
    const tabContainer = document.querySelector('#tab-container');
    const tabList = document.createElement('li');
    const tabButton = document.createElement('button');

    tabContainer.appendChild(tabList);
    tabList.appendChild(tabButton);

    tabButton.textContent = projectName.value;
    tabButton.setAttribute('data-project-id', projectName.value)
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
    taskButton.setAttribute('data-project', projectName.value);


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
    const closeBtn = document.querySelectorAll('.cancel');
  
    function openModal () {
      taskModal.classList.add('active-content');
    }

    function closeModal() {
      taskModal.classList.remove('active-content');
    }
    
    taskButton.forEach(button => {
      button.addEventListener('click', () => {
        openModal();
      });
    });

    closeBtn.forEach(close => {
      close.addEventListener('click', closeModal);
    });

    addTask.addEventListener('click', (e) => {
      const taskForm = document.querySelector('#task-form');
      e.stopImmediatePropagation();
      addTaskToProject();
      closeModal();
      taskForm.reset()
    });

  
  }

  const taskList = [];
  const addTask = document.querySelector('#add-task');

  
  function addTaskToProject() {
    const getId = document.querySelector('.active-content');
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    const description = document.querySelector('#description');
    const projectid = getId.getAttribute('id');

    const newTask = new Tasks( projectid, taskName.value, dueDate.value, description.value, priority.value );
    const foo = projects.find(p => p.id === projectid);
    foo.tasks.push(newTask);
    displayTask();
    console.log(projects)

    function displayTask() {
      const section = document.querySelector('.active-content');
      const taskContainer = document.createElement('div');
      const dTaskContainer = document.createElement('div');
      const dTaskInfoContainer = document.createElement('div');
      const dTaskName = document.createElement('p');
      const dDescription = document.createElement('p');
      const dDate = document.createElement('p');
      

      const taskBtnContainer = document.createElement('div');
      const editBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');

      section.appendChild(taskContainer);
      taskContainer.appendChild(dTaskContainer);
      dTaskContainer.appendChild(dTaskInfoContainer);
      dTaskInfoContainer.appendChild(dTaskName);
      dTaskInfoContainer.appendChild(dDescription);
      dTaskInfoContainer.appendChild(dDate);

      dTaskInfoContainer.appendChild(taskBtnContainer);
      taskBtnContainer.appendChild(editBtn);
      taskBtnContainer.appendChild(deleteBtn);

      taskContainer.classList.add('task-absolute');
      dTaskContainer.classList.add('tasks');
      dTaskInfoContainer.classList.add('tasks-description');
      taskBtnContainer.classList.add('tasks-button');

      dTaskName.textContent = taskName.value;
      dDescription.textContent = description.value;
      dDate.textContent = description.value;  

      editBtn.textContent = 'Edit';
      deleteBtn.textContent = 'X';
    }
  }

  addProjectButton.addEventListener('click', createProject);
  return {
    tabSwitch
  }
})();