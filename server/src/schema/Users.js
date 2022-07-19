'use strict';

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const budgetSchema = new Schema({
    monthlyIncome: { type: Number, required: false },
    monthlyLivingExpenses: { type: Number, required: false },
    additionalExpenses: { type: Number, required: false },
    personalSavings: { type: Number, required: false },
    retirementSavings: { type: Number, required: false }
});

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    token: { type: String, required: true },
    budget: { budgetSchema }
});

const userModel = model('Users', userSchema);

module.exports = userModel;
