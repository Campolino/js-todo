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
  `;

  const article = document.createElement('article');

  main.appendChild(menu);
  main.appendChild(article);

  document.body.appendChild(main);
}

export { Header, Main };