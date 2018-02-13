'use strict';

const program = require('commander');
const { getCommunities } = require('./service/service');

var clc = require('cli-color');


console.log('     ___                     _                   __   _');
console.log('    /   |                   | |                 /  | / | ');
console.log('   /    |_____    __ _ _   _| | ___ _ _ __     /   |/  | _');
console.log('  / _   |  __  \\/  _` | | | | |/  _` | \'__|   /        |/ ');
console.log(' / /  | | |  | |  |_| | |_| | |  |_| | |     / /|  /|  | ');
console.log('/_/   |_|_|  |_|\\__,  |\\__,_|_|\\___,_|_|    /_/ |_/ |__| ');
console.log('                 |___/                                  ');

// console.log(clc.red('Text in red'));
// console.log(clc.red.bgWhite.underline('Underlined red text on white background.'));

getCommunities()
    .then(resp => {
        resp.comunidades.map(item =>{
            console.log(item.name);
        });
    });