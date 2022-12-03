export const Project = (name) => {
  const list = [];

  function addTask(task) {
    list.push(task);
  }

  return {
    name,
    list,
    addTask
  }
}