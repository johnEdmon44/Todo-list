import { addProjectToArray, addTask } from './function';
import '/dist/style.css';
'use strict';



tabSwitch();
taskModal();
// dropdown menu 
const openProjectBtn = document.querySelector('#open-project');
const dropdown = document.querySelector('.dropdown');

openProjectBtn.addEventListener('click' , () => {
  dropdown.classList.toggle('dropdown-active');
  openProjectBtn.classList.toggle('active-button');
});




// tab switching
export function tabSwitch() {
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
};


// Add project
const addProjectBtn = document.querySelector('#add-project');
addProjectBtn.addEventListener('click', e => {
    e.preventDefault();
    addProject();
    tabSwitch(); // call tabswitch to make it work on new project
    taskModal();//  call taskmodal to make it work on new task 
});

function addProject() {
  addProjectToArray();
  const dropdown = document.querySelector('.dropdown');
  const projectName = document.querySelector('#project-name');
  const dropdownButton = document.querySelector('#open-project');

  //reset
  dropdown.classList.remove('dropdown-active');
  projectName.value = '';
  dropdownButton.classList.remove('active-button');
}


// task modal 
function taskModal() {
  const openTaskButtons = document.querySelectorAll('.open-task');
  const cancelButton = document.querySelectorAll('.cancel'); 
  const taskForm = document.querySelector('#task-form');

  openTaskButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      taskForm.classList.add('active-form');
    });
  });

  cancelButton.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      taskForm.classList.remove('active-form');
    });
  });
};



// add  task
const addTaskBtn = document.querySelector('#add-task');
addTaskBtn.addEventListener('click', e => {
  e.preventDefault();
  addTask();
  // Reset 
  const taskForm = document.querySelector('#task-form');
  const getTaskName = document.querySelector('#task-name');
  const getDescription = document.querySelector('#description');

  taskForm.classList.remove('active-form');
  getTaskName.value = '';
  getDescription.value = '';
});