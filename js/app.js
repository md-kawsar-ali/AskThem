// AOS - Animation
AOS.init();

// Copyright Year
const yearElem = document.querySelector('#year');

const date = new Date();
const year = date.getFullYear();
yearElem.textContent = year;