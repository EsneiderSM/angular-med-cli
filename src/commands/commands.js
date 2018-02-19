'use strict';

const program = require('commander');
const { getAllMeetups, getInfoMeetup } = require('../service/meetup.service');
const { remplaceHtml } = require('../utils/remplaceHtml');

var clc = require('cli-color');
var Table = require('cli-table');

textAngularMed();

program
    .version('1.0.0')
    .usage('<meetup> [opciones]')
    .option('-i, --info', 'Información sobre Angular Medellín')
    .description('Conoce la información de los próximos meetups de Angular Medellín');

program
    .command('meetup')
    .description('Conoce la info de los próximos meetups')
    .action((cmd) => {
        console.log('... \n');
        if (cmd.parent.rawArgs.length <= 3) {
            allMeetups();
        }
        else {

            if (cmd.parent.rawArgs[3] === '-i' || cmd.parent.rawArgs[3] === '--info') {
                infoMeetup();
            }
            else {
                program.help();
            }
        }
    });

program.parse(process.argv);

function textAngularMed() {
    console.log(clc.red('     ___                     _               ') + clc.blue('    __   _ ____  _____        '));
    console.log(clc.red('    /   |                   | |              ') + clc.blue('   /  | / |  __||     \\      '));
    console.log(clc.red('   / /| |_____    __ _ _   _| | ___ _ _ __   ') + clc.blue('  /   |/  | |__ |  |\\  |     '));
    console.log(clc.red('  / __  |  __  \\/  _` | | | | |/  _` | \'__|') + clc.blue('   /        |  __||  | | |    '));
    console.log(clc.red(' / /  | | |  | |  |_| | |_| | |  |_| | |     ') + clc.blue('/ /|  /|  | |__ |  |/  |_     '));
    console.log(clc.red('/_/   |_|_|  |_|\\__,  |\\__,_|_|\\___,_|_|  ') + clc.blue('  /_/ |_/ |__|____||_____/|_| '));
    console.log(clc.red('                |____/                       ') + clc.blue('                              '));
};

function allMeetups() {
    getAllMeetups()
        .then(resp => {

            console.log('⭐️ ¡Bienvenido a Angular Medellín!⭐️ \n');

            if (resp.length > 0) {
                resp.map(event => {

                    console.log(clc.black.bgYellow("Evento:") + " " + event.name);
                    console.log(clc.black.bgYellow("Fecha:") + " " + event.local_date + " " + clc.black.bgYellow("Hora:") + " " + event.local_time);
                    if (event.venue) {
                        console.log(clc.black.bgYellow("Lugar:") + " " + event.venue.address_1);
                    };

                    console.log(clc.black.bgYellow("\nDetalles:\n") + remplaceHtml(event.description));
                    console.log("\n");
                })
            }
            else {
                console.log(clc.black.bgYellow("Proximamente publicaremos toda la información de nuestros próximos meetups"));
                console.log("\n");
            }
        });
};

function infoMeetup() {
    getInfoMeetup()
        .then(resp => {
            console.log(clc.white.bgBlue(" " + resp.name + " "));
            console.log(resp.localized_location);
            console.log(resp.link + "\n");
            console.log(remplaceHtml(resp.description));
            console.log("\n");
        })
};