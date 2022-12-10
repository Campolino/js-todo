import { Project } from "./project";
import { Task } from "./task";
import { PopulateArticle, PopulateAside } from "./ui";

const Events = () => {
  function addProject() {
    const newProject = document.querySelector('#new-project');

    let projectStorage = JSON.parse(localStorage.getItem('projects'));
    if (projectStorage == null) projectStorage = [];

    newProject.addEventListener('keypress', (e) => {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();

        if (newProject.value != '') {
          projectStorage.push(Project(newProject.value));
          localStorage.setItem('projects', JSON.stringify(projectStorage));

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
        let projectStorage = JSON.parse(localStorage.getItem('projects'));
        PopulateArticle(projectStorage.find(project => project['name'] == button.innerHTML))
        addTask();
      })
    })
  }

  function addTask() {
    const taskButton = document.querySelector('#add-task');
    const projectTitle = document.querySelector('h1');

    taskButton.addEventListener('click', () => {
      let projectStorage = JSON.parse(localStorage.getItem('projects'));
      const changeProject = projectStorage.find(project => project['name'] == projectTitle.innerHTML)
      changeProject.addTask(
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