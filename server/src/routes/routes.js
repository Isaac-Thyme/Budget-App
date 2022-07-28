'use strict';

// Third party/ENV imports
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Esoteric imports
const Users = require('../schema/Users.js');
const Budget = require('../schema/Budget.js');

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

routeObject.login = async function (req, res) {
    let userFound = await Users.findOne({ username: req.body.username });
    if (userFound) {
        let flag = await bcrypt.compare(req.body.password, userFound.password);
        if (flag) {
            res.status(202).send(userFound);
        } else {
            res.status(404).send('Incorrect credentials provided.');
        }
    } else {
        res.status(404).send('Incorrect credentials provided.');
    }
}

routeObject.budget = async function (req, res) {
    try {
        let u = await Users.findOne({ token: req.body.token });
        let temp = {};
        temp.monthlyIncome = req.body.monthlyIncome || undefined;
        temp.monthlyLivingExpenses = req.body.monthlyLivingExpenses || undefined;
        temp.additionalExpenses = req.body.additionalExpenses || undefined;
        temp.personalSavings = req.body.personalSavings || undefined;
        temp.retirementSavings = req.body.retirementSavings || undefined;
        let createdBudget = await Budget.create(temp);
        // console.log(createdBudget);
        u.budget.push(createdBudget._id);
        u.save();
        // await Users.findByIdAndUpdate(push(Budget)u._id, { budget: temp });
        console.log("here");
        res.status(201).send(u);
    } catch {
        res.status(500).send('Incorrect credentials.')
    }
}

module.exports = routeObject;
