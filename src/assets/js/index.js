// Main js file

const scroll = require('./scripts/scroll.js');
const toggleMenu = require('./scripts/ToggleMenu.js');


$(document).ready(() => {
    new WOW().init();
    scroll;
    toggleMenu;
});

