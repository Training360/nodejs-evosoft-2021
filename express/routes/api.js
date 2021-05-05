var express = require('express');
var router = express.Router();
const { readFile } = require('fs').promises;
const { join } = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  next();
});

router.get('/users', async (req, res, next) => {
    const usersContent = await readFile( join(__dirname, '../db/users.json'), 'utf8' );
    res.json( JSON.parse(usersContent) );
});

router.get('/users/:id', async (req, res, next) => {
    const usersContent = await readFile( join(__dirname, '../db/users.json'), 'utf8' );
    const users = JSON.parse(usersContent);
    const id = Number(req.params.id);
    if (!id) {
        return next();
    }
    const user = users.filter( u => u.id === id )[0];

    if (!user) {
        return next();
    }

    res.json( user );
});

module.exports = router;
