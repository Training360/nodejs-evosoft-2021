const htmlResponse = require('../utils/htmlResponse');
const htmlPromiseResponse = require('../utils/htmlPromiseResponse');

const index = res => htmlPromiseResponse(res, 'inde');
const about = res => htmlPromiseResponse(res, 'about');
const contact = res => htmlPromiseResponse(res, 'contact');
const error404 = res => htmlPromiseResponse(res, '404', 404);

module.exports = Object.freeze({
    index,
    about,
    contact,
    error404,
});
