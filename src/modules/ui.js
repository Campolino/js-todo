const Header = () => {
  const header = document.createElement('header');
  header.innerHTML = `
    <p>Tasks</p>
    <p>Keep your obligations in check!</p>
  `;

  document.body.appendChild(header);
}

const Main = () => {
  const main = document.createElement('main');

  const menu = document.createElement('aside');
  menu.innerHTML = `
    <ul>
      <li><a href="#">Today</a></li>
      <li><a href="#">Upcoming</a></li>
    </ul>
    <hr>
    <ul class="projects-list">
    </ul>
    <ul>
      <li><input type="text" id="new-project" placeholder="Add new Project" minlength="3"></li>
    </ul>
  `;

  const article = document.createElement('article');

  main.appendChild(menu);
  main.appendChild(article);

  document.body.appendChild(main);
}

const InitialAside = () => {
  if (localStorage.getItem('projects')) {
    const ul = document.querySelector('.projects-list');
    ul.textContent = "";

    const projectList = JSON.parse(localStorage.getItem('projects'));

    projectList.forEach(project => {
      ul.innerHTML += `
        <li><a href="#" class="project-button">${project['name']}</a></li>
      `;
    })
  }
}

const PopulateAside = (project) => {
  const ul = document.querySelector('.projects-list');

  ul.innerHTML += `
    <li><a href="#" class="project-button">${project['name']}</a></li>
  `;
}

const PopulateArticle = (project) => {
  const article = document.querySelector('article');

  article.innerHTML = `
    <div>
      <h1>${project['name']}</h1>
      <button id="add-task">Add new Task</button>
    </div>
  `
}

const TaskForm = () => {
  const article = document.querySelector('article');
  
  article.innerHTML += `
    <form>
      <div>
        <label for="tasktitle">Title: </labe>
        <input type="text" id="tasktitle" name="tasktitle">
      </div>
      <div>
        <label for="taskdescription">Description: </labe>
        <input type="text" id="taskdescription" name="taskdescription">
      </div>
      <div>
        <label for="taskduetime">When: </labe>
        <input type="date" id="taskduetime" name="taskduetime">
      </div>
      <div>
        <label for="taskpriority">Priority: </label>
        <select name="taskpriority" id="taskpriority">
          <option value="normal">Normal</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Add new Task">
      </div>
    </form>
  `
}

export { Header, Main, InitialAside, PopulateArticle, PopulateAside, TaskForm };