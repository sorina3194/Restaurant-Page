import { initializePage } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import Icon from './icon.png';
import './attributes/style.css'


const img = document.createElement('img')
img.src = Icon
const body = document.querySelector("body")
body.appendChild(img)

const homeTab = document.getElementById("nav-home-tab")
const menuTab = document.getElementById("nav-menu-tab")
const contactTab = document.getElementById("nav-contact-tab")


homeTab.addEventListener('click', initializePage);

menuTab.addEventListener ('click', menu);

contactTab.addEventListener('click', contact);

window.addEventListener('load', initializePage);
