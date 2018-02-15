'use strict';

const program = require('commander');
const { getNextMeetup } = require('../service/service');

var clc = require('cli-color');

console.log('     ___                     _                   __   _');
console.log('    /   |                   | |                 /  | / | ');
console.log('   / /| |_____    __ _ _   _| | ___ _ _ __     /   |/  | _');
console.log('  / __  |  __  \\/  _` | | | | |/  _` | \'__|   /        |/ ');
console.log(' / /  | | |  | |  |_| | |_| | |  |_| | |     / /|  /|  | ');
console.log('/_/   |_|_|  |_|\\__,  |\\__,_|_|\\___,_|_|    /_/ |_/ |__| ');
console.log('                 |___/                                  ');

program
    .version('0.1.0')
    .usage('<meetup> [opciones]')
    .option('-n, --next', 'next meetup')
    .description('Obten la info next meetup');


program
    .command('meetup')
    .description('Obten la info next meetup')
    .option('-n, --next', 'next meetup')
    .action((cmd) => {
        if (cmd.parent.rawArgs[3] === '-n' || cmd.parent.rawArgs[3] === '--next') {
            console.log('\n');
            getNextMeetup()
                .then(resp => {

                    resp.map(item => {

                        console.log(clc.blue.bgWhite(item.name));
                        console.log("Fecha: " + item.local_date);

                    })

                });
        } else {
            program.help();
        }

    });

program.parse(process.argv);

// console.log(clc.red('Text in red'));
// console.log(clc.red.bgWhite.underline('Underlined red text on white background.'));

