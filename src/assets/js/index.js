// Main js file

const data = require('./scripts/description.js');
const scroll = require('./scripts/scroll.js');



$(document).ready(() => {
    new WOW().init();
    data;
    scroll;
});

