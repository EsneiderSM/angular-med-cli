'use strict';

const remplaceHtml = (string) => {
    var str = string;
    return str.replace(/<\/p> <p>/g, '\n \n').replace(/<br\/>/g, '\n').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
}

module.exports = {
    remplaceHtml
};