'use strict';

const btnMenu = document.querySelector('#btn-menu');
const menuList = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
  menuList.classList.toggle('invisible')
})