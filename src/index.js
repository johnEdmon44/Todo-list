import './style.css';

'use strict';

(function () {
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
})();