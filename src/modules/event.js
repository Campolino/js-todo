import { Project } from "./project";
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
    let projectStorage = JSON.parse(localStorage.getItem('projects'));

    projectButton.forEach(button => {
      button.addEventListener('click', () => {
        
        PopulateArticle(projectStorage.find(project => project['name'] == button.innerHTML))
      })
    })
  }

  addProject();
  openProject();

  return {
    addProject,
    openProject
  }
}

export { 
  Events
}