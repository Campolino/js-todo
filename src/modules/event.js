import { Project } from "./project";

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

          const ul = document.querySelector('.projects');
          ul.textContent = "";

          projectList.forEach(project => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.textContent = project['name'];
  
            li.appendChild(a);
            ul.appendChild(li);
          })
          
          newProject.value = '';
        }
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