import './style.css';
import loadHome from './loadHome.js';
import loadMenu from './loadMenu.js';
import loadAbout from './loadAbout.js';

loadHome();


const homeBtn = document.querySelector('#homeBtn')
homeBtn.addEventListener('click', () => loadHome());

const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', () => loadMenu());

const aboutBtn = document.querySelector('#aboutBtn');
aboutBtn.addEventListener('click', () => loadAbout());
