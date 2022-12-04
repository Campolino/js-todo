const Events = () => {
  const newProject = document.querySelector('#new-project');
  newProject.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      console.log(newProject.value);
      newProject.value = '';
    }
  })

  return {
    newProject
  }
}

export { Events };