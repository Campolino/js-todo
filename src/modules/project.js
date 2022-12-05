export const Project = (name) => {
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  }

  return {
    name,
    tasks,
    addTask
  }
}