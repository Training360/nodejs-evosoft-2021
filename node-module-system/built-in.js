// fs: FileSystem
const { readFile, writeFile } = require('fs');

// path: system paths
const { join } = require('path');

// http: for http communication
// const http = require('http');

const users = [
    {
        id: 1, 
        name: 'Zoltán',
        email: 'j@gmail.com',
    },
    {
        id: 2, 
        name: 'Ádám',
        email: 'j@outlook.com',
    },
    {
        id: 3, 
        name: 'Alfréd',
        email: 'j@gmail.com',
    },
    {
        id: 4, 
        name: 'Géza',
        email: 'j@hotmail.com',
    },
];

console.time('writing');
const filePath = join(__dirname, 'data', 'users.json');
writeFile(
    filePath,
    JSON.stringify( users, null, 4 ),
    'utf8',
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Users are saved.');
        
        readFile(
            filePath,
            'utf8',
            (err, data) => {
                console.log(data);
            });
        
        console.timeEnd('writing');
    }
);
