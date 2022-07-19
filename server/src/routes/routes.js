'use strict';

// Third party/ENV imports
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Esoteric imports
const Users = require('../schema/Users.js');

const routeObject = {};

routeObject.signup = async function (req, res) {
    let alreadyExists = await Users.find({ email: req.body.email });
    if (alreadyExists.length === 0) {
        req.body.token = jwt.sign({ email: req.body.email }, SECRET);
        req.body.password = await bcrypt.hash(req.body.password, 10);
        let result = await Users.create(req.body);
        res.json(result);
    } else {
        res.status(500).send("A user with that email already exists.");
    }
}

routeObject.signin = async function (req, res) {
    let userFound = await Users.findOne({ username: req.body.username });
    if (userFound) {
        let flag = await bcrypt.compare(req.body.password, userFound.password);
        if (flag) {
            res.send({ token: userFound.token });
        } else {
            res.status(404).send('Incorrect credentials provided.');
        }
    } else {
        res.status(404).send('Incorrect credentials provided.');
    }
}

routeObject.budget = async function (req, res) {
    let userFound = await Users.findOne({ token: req.body.token });
    console.log(userFound);
    res.send('Route hit');
}

module.exports = routeObject;
