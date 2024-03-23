import './style.css';
import { loadHome } from './home.js';
import { loadAbout } from './about.js';
import { loadMenu } from './menu.js';

function controlContent () {
  const home = document.getElementById('Home');
  const menu = document.getElementById('Menu');
  const about = document.getElementById('About');
  const contentDiv = document.getElementById('content');

  function clearContent () {
    contentDiv.innerHTML = "";
  };

  home.addEventListener('click', () => {
    clearContent();
    loadHome();
  });

  about.addEventListener('click', () => {
    clearContent();
    loadAbout();
  });

  menu.addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  loadHome();
};

controlContent();