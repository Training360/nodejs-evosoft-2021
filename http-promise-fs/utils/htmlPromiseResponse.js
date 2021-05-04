const { createReadStream } = require('fs');
const { readFile } = require('fs').promises;
const { join } = require('path');

const htmlResponse = async (res, file, statusCode = 200) => {
    const filePath = join(__dirname, `../views/${file}.html`);

    try {
        const content = await readFile(filePath, 'utf-8');
        res.writeHead(statusCode, {
            'Content-Type': 'text/html'
        });
        res.write(content);
    } catch (err) {
        res.writeHead(500, {
            'Content-Type': 'text/html'
        });
        switch (err.errno) {
            case -4058: res.write('File not found...');
            break;
            default: res.write(`<h1>Server Error</h1>`);
        }
    } finally {
        res.end();
    }

};

module.exports = htmlResponse;
