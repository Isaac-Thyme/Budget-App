'use strict';

// Third party/ENV imports
// const SECRET = process.env.SECRET;
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { signToken } = require('../utils/auth.js');

// Esoteric imports
const Users = require('../schema/Users.js');
const Budget = require('../schema/Budget.js');

const routeObject = {};

routeObject.signup = async function (req, res) {
    let alreadyExists = await Users.find({ email: req.body.email });
    if (alreadyExists.length === 0) {
        // req.body.token = jwt.sign({ email: req.body.email }, SECRET);
        req.body.password = await bcrypt.hash(req.body.password, 10);
        let user = await Users.create(req.body);
        const token = signToken(user);
        res.json({ user, token });
    } else {
        res.status(500).send("A user with that email already exists.");
    }
}

routeObject.login = async function (req, res) {
    let userFound = await Users.findOne({ username: req.body.username });
    if (userFound) {
        let flag = await bcrypt.compare(req.body.password, userFound.password);
        if (flag) {
            const token = signToken(userFound);
            res.status(202).send({ userFound, token });
        } else {
            res.status(404).send('Incorrect credentials provided.');
        }
    } else {
        res.status(404).send('Incorrect credentials provided.');
    }
}

routeObject.budget = async function (req, res) {
    try {
        let existingBudget = await Budget.findOne({ budgetName: req.body.budgetName });
        if (existingBudget) {
            res.status(500).send('Budget name already exists.');
        } else {
            let u = await Users.findOne({ token: req.body.token });
            let temp = {};
            temp.budgetName = req.body.budgetName;
            temp.monthlyIncome = req.body.monthlyIncome || undefined;
            temp.monthlyLivingExpenses = req.body.monthlyLivingExpenses || undefined;
            temp.additionalExpenses = req.body.additionalExpenses || undefined;
            temp.personalSavings = req.body.personalSavings || undefined;
            temp.retirementSavings = req.body.retirementSavings || undefined;
            let createdBudget = await Budget.create(temp);
            u.budget.push(createdBudget.budgetName);
            u.save();
            res.status(201).send(u);
        }
    } catch {
        res.status(500).send('Incorrect credentials.')
    }
}

routeObject.getBudget = async function (req, res) {
    try {
        let budget = await Budget.findOne({ budgetName: req.query.budgetName });
        res.status(200).send(budget);
    } catch {
        res.status(400).send('Budget not found')
    }
}

module.exports = routeObject;
