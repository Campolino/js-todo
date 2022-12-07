import { Project } from "./project";
import { PopulateArticle, PopulateAside } from "./ui";

const Events = () => {
  const projectList = [];

  function addProject() {
    const newProject = document.querySelector('#new-project');

    newProject.addEventListener('keypress', (e) => {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();

        if (newProject.value != '') {
          projectList.push(Project(newProject.value));

          localStorage.setItem('project-name', JSON.stringify(projectList));

          PopulateAside(newProject.value);

          PopulateArticle(projectList[projectList.length - 1]);
        }

        newProject.value = '';
      }
    })

    return newProject;
  }

  addProject();

  return {
    addProject
  }
}

export { Events };