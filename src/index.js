import './style.css';

'use strict';

const openTask = document.querySelector('#open-task');
const taskModal = document.querySelector('#task-modal');
const closeTask = document.querySelector('#close-task');

openTask.addEventListener('click', () => {
  taskModal.classList.add('visible');
});

closeTask.addEventListener('click', () => {
  taskModal.classList.remove('visible');
});