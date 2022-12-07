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
    <ul class="projects">
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

const PopulateArticle = (project) => {
  const article = document.querySelector('article');

  article.innerHTML = `
    <h1>${project['name']}</h1>
  `
}

export { Header, Main, PopulateArticle };