import './css/style.css';

import { Header, Main, InitialAside } from './modules/ui';
import { AddProject } from './modules/event';

document.addEventListener('DOMContentLoaded', () => {
  Header();
  Main();
  InitialAside();
  AddProject();
})

console.log(localStorage)