const moment = require('moment');

const f = () => console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

let clock = setInterval(f, 1000);