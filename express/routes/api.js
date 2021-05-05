var express = require('express');
var router = express.Router();
const { readFile } = require('fs').promises;
const { join } = require('path');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  name: String,
  email: String,
  created: Date,
  address: String
});

const UserModel = mongoose.model('User', UserSchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  next();
});

router.post('/users', async (req, res, next) => {
    const instance = new UserModel({
        name: 'Arnold',
        email: 'schwarczi@gmail.com',
        created: new Date(),
        address: 'Los Angeles'
    });
    instance.save( (err) => {
        if (err) {
            return res.json(err);
        }
        res.json({success: true});
    });
});







// Json based database.
// router.get('/users', async (req, res, next) => {
//     const usersContent = await readFile( join(__dirname, '../db/users.json'), 'utf8' );
//     res.json( JSON.parse(usersContent) );
// });

// router.get('/users/:id', async (req, res, next) => {
//     const usersContent = await readFile( join(__dirname, '../db/users.json'), 'utf8' );
//     const users = JSON.parse(usersContent);
//     const id = Number(req.params.id);
//     if (!id) {
//         return next();
//     }
//     const user = users.filter( u => u.id === id )[0];

//     if (!user) {
//         return next();
//     }

//     res.json( user );
// });

module.exports = router;
