import { Project } from "./project";
import { PopulateArticle, PopulateAside } from "./ui";

const Events = () => {
  function addProject() {
    const projectStorage = JSON.parse(localStorage.getItem('projects'));

    if (projectStorage == null) projectStorage = [];

    const newProject = document.querySelector('#new-project');

    newProject.addEventListener('keypress', (e) => {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();

        if (newProject.value != '') {
          projectStorage.push(Project(newProject.value));
          localStorage.setItem('projects', JSON.stringify(projectStorage));

          PopulateAside(newProject.value);

          PopulateArticle(projectList[projectList.length - 1]);
        }

        newProject.value = '';
      }
    });

    return newProject;
  }

  addProject();

  return {
    addProject
  }
}

export { Events };