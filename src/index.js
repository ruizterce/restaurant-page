import './style.css';
import loadHome from "./loadHome.js";

loadHome();


const homeBtn = document.querySelector('#homeBtn')
homeBtn.addEventListener('click', () => { loadHome(); });

const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', () => { });

const aboutBtn = document.querySelector('#aboutBtn');
menuBtn.addEventListener('click', () => { });
