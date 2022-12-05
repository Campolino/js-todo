const Events = () => {
  const newProject = document.querySelector('#new-project');
  newProject.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();;

      if (newProject.value != '' &&) {
        const ul = document.querySelector('.projects');
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.textContent = newProject.value;
  
        li.appendChild(a);
        ul.appendChild(li);
  
        newProject.value = '';
      }
    }
  })

  return {
    newProject
  }
}

export { Events };