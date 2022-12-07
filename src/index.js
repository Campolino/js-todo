import './css/style.css';

import { Header, Main, InitialAside } from './modules/ui';
import { Events } from './modules/event';

document.addEventListener('DOMContentLoaded', () => {
  Header();
  Main();
  InitialAside();
  Events();
})

console.log(localStorage)