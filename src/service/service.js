'use strict';
const fetch = require('node-fetch');

const getNextMeetup = () => {
    return fetch('https://api.meetup.com/Angular-Medellin/events')
        .then(response => response.json());
};

module.exports = {
    getNextMeetup
};
