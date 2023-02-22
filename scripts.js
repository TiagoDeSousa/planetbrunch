/*global document: false */
var sectionEl;
sectionEl = document.getElementsByTagName('section')[0];
function fadeIn() {
  "use strict";
  sectionEl.classList.add('fade-in');
}

window.addEventListener("load", fadeIn);