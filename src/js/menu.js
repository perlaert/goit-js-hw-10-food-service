import menuList from '../menu.json';

import menuTemplate from '../templates/menu.hbs';

const newMenu = menuTemplate(menuList);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('afterbegin', newMenu);
