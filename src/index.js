import './css/style.css';

import { Header, Main } from './modules/ui';

import { Task } from './modules/task';
import { Project } from './modules/project';

const project = Project("House");
project.addTask(Task("Sweep Floor", "Sweep and Mop the Floor", "12/12/2022", "normal"));
project.addTask(Task("Do Dishes", "Do Dishes and Dry Sink", "12/12/2022", "normal"));

console.table(project.list);

document.addEventListener('DOMContentLoaded', () => {
  Header();
  Main();
})