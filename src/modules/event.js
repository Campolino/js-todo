import { Project } from "./project";
import { Task } from "./task";
import { PopulateArticle, PopulateAside } from "./ui";

const Events = () => {
  function addProject() {
    const newProject = document.querySelector('#new-project');

    const projectStorage = getLocalStorage();
    
    newProject.addEventListener('keypress', (e) => {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();

        if (newProject.value != '') {
          projectStorage.push(Project(newProject.value));
          setLocalStorage(projectStorage);

          PopulateAside(projectStorage[projectStorage.length - 1]);

          PopulateArticle(projectStorage[projectStorage.length - 1]);
        }

        newProject.value = '';
      }
    });
  }

  function openProject() {
    const projectButton = document.querySelectorAll('.project-button');

    projectButton.forEach(button => {
      button.addEventListener('click', () => {
        const projectStorage = getLocalStorage();
        PopulateArticle(filterLocalStorage(projectStorage, button.innerHTML))
        addTask();
      })
    })
  }

  function addTask() {
    const taskButton = document.querySelector('#add-task');
    const projectTitle = document.querySelector('h1');

    taskButton.addEventListener('click', () => {
      let projectStorage = getLocalStorage();
      const changeProject = filterLocalStorage(projectStorage, projectTitle.innerHTML);
      changeProject['tasks'].push(
        Task('Test Task', 'description', 'dueTime', 'priority')
      )
      console.log(changeProject)
    })
  }

  addProject();
  openProject();

  return {
    addProject,
    openProject,
    addTask
  }
}

export { 
  Events
}


// Auxiliary Functions

function getLocalStorage() {
  let storage = JSON.parse(localStorage.getItem('projects'));
  if (storage == null) storage = [];
  return storage;
}

function setLocalStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function filterLocalStorage(storage, filter) {
  return storage.find(project => project['name'] == filter)
}
