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
    const main = document.querySelector('#main');
    const section = document.createElement('section');
    const h1 = document.createElement('h1');
    const addTaskBtn = document.createElement('button');

    main.appendChild(section);
    section.appendChild(h1);
    section.appendChild(addTaskBtn);

    h1.textContent = projectName.value;
    addTaskBtn.textContent = '+ add task';

    section.setAttribute('data-tab-content', '');
    section.setAttribute('id', projectName.value);
    addTaskBtn.setAttribute('data-project', projectName.value);

    addTaskBtn.classList.add('task-button');
    section.classList.add('container');
    section.classList.add('hidden');
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


    const addTask = document.querySelector('#add-task');
    addTask.addEventListener('click', (e) => {
      const taskForm = document.querySelector('#task-form');
      e.stopImmediatePropagation();
      addTaskToProject();
      closeModal();
      taskForm.reset()
    });
  }



  function addTaskToProject(z) {
    const getId = document.querySelector('.active-content');
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    const description = document.querySelector('#description');
    const projectid = getId.getAttribute('id');
    if(!taskName.value && !description.value) {
      alert('Please complete the field');
      z.preventDefault();
    } else {
      const newTask = new Tasks( projectid, taskName.value, taskName.value, dueDate.value, description.value, priority.value );
      const foo = projects.find(p => p.id === projectid);
      foo.tasks.push(newTask);
      displayTask();
      console.log(projects);
      deleteTask()
    }
    

    function displayTask() {
      const main = document.querySelector('.active-content');
      const name = document.createElement('p');
      const container = document.createElement('div');
      const description1 = document.createElement('p');
      const date = document.createElement('p');
      const editBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      const checkbox = document.createElement('input');

      checkbox.type = 'checkbox';
      main.appendChild(container);
      container.appendChild(checkbox);
      container.appendChild(name);
      container.appendChild(description1);
      container.appendChild(date);
      container.appendChild(editBtn);
      container.appendChild(deleteBtn);

      name.textContent = taskName.value;
      description1.textContent = description.value;
      date.textContent = dueDate.value;
      editBtn.textContent = 'Edit';
      deleteBtn.textContent = 'X';

      deleteBtn.classList.add('delete-task');
      editBtn.classList.add('edit-task');
      date.disabled = true;
      container.classList.add('tasks');

      deleteBtn.setAttribute('data-delete', taskName.value);
      editBtn.setAttribute('data-edit', taskName.value);
    }
  }

  function deleteTask () {
    const delButton = document.querySelectorAll('.delete-task');
    delButton.forEach(del => {
      del.addEventListener('click', deletes);
    });

    
    function deletes(e) {
      const foo = e.target.dataset.delete;
      const bar = document.querySelector('.active-content');
      const foofoo = bar.id;
      const foobar = projects.find(p => p.name === foofoo);
      const barfoo = foobar.tasks.find(t => t.taskId === foo);
      foobar.tasks.splice(barfoo, 1);
      e.currentTarget.parentNode.remove();
      console.log(projects);
    }
  }



  addProjectButton.addEventListener('click', createProject);
  return {
    tabSwitch
  }
})();


(function () {
  let minDate = new Date().toISOString().split('T')[0];
  document.querySelector('#due-date').value = minDate;
  document.querySelector('#due-date').setAttribute('min', minDate);
})();