import { displayProject, displayTask } from "./DOM";
import { project } from "./projects";
import { task } from "./task";
'use strict';


const projectList = [];
const taskList = [];



export function addProjectToArray() {
  const getProjectName = document.querySelector('#project-name').value;

  if(getProjectName === '') {
    alert('Please input project name');
  } else {
    projectList.push(project(getProjectName, projectId()));
    displayProject();
  }
}




export function addTask() {
  const getId = document.querySelector('.active-content');
  const projectId = getId.getAttribute('id');
  const getTaskName = document.querySelector('#task-name').value;
  const getPriority = document.querySelector('#priority').value;
  const getDescription = document.querySelector('#description').value;
  const getDueDate = document.querySelector('#due-date').value;

  if (getTaskName === '' || getDescription === '' || getDueDate === '') {
    alert('Please complete the field');
  } else if (getTaskName.length >= 14) {
    alert('Task name too long');
  } else if (getDescription.length >= 58) {
    alert('Description too long');
  } else {
    displayTask();
    taskList.push(task(projectId, taskId(), getTaskName, getDescription,getPriority, getDueDate));
  }
}



// create task id
let idTask = 0;
function taskId() {
  return idTask++;
}


let idProject = 0;
function projectId() {
  return idProject++
}



// delete task
const ul = document.querySelector('.active-content');

ul.addEventListener('click', e => {
  if(e.target.className === 'delete-task') {
    const taskId = e.target.parentNode.dataset.task;  
    const fooBar = taskList.findIndex(f => f.id === +taskId);
    taskList.splice(fooBar, 1);
    e.target.parentNode.remove();
  }
});



//  delete project
const container = document.querySelector('#project-container');

container.addEventListener('click', e => {
  if(e.target.className === 'delete-project') {
    const projectId = e.target.parentNode.dataset.project;
    const foobar = projectList.findIndex(p => p.id === +projectId);
    projectList.splice(foobar, 1);
    e.target.parentNode.remove();
  }
});