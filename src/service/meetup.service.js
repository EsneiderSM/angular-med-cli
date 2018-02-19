'use strict';
const { Config } = require('../config/config')
const fetch = require('node-fetch');

const getAllMeetups = () => {
    return fetch(`${Config.baseMeetupApi}/events`)
        .then(response => response.json());
};

const getInfoMeetup = () => {
    return fetch(`${Config.baseMeetupApi}`)
        .then(response => response.json());
};

module.exports = {
    getAllMeetups,
    getInfoMeetup
};
