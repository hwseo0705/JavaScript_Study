// external js file loading
// import { x, hello } from './kim.mjs';

import * as k from './kim.mjs'
import * as p from './park.mjs'

// app.js - main file

const $box = document.querySelector('.box');
// console.log($box);
$box.textContent = 'Hello';

/////////////////////////////////////////////

console.log(p.x);
k.hello();