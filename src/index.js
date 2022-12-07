import './css/style.css';

import { Header, Main } from './modules/ui';
import { Events } from './modules/event';

document.addEventListener('DOMContentLoaded', () => {
  Header();
  Main();
  Events();
})

console.log(localStorage);
localStorage.clear();