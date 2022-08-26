// Engineering masterpiece

import { getRemainingDays } from "./getDate.js";

let fakeBudget = {
    budgetName: "Example Budget",
    monthlyIncome: 1800,
    monthlyLivingExpenses: 750,
    additionalExpenses: 320,
    personalSavings: 50.67,
    retirementSavings: 10
}

let tempCopy = fakeBudget;
let moneyRemainingMonthly = tempCopy.monthlyIncome - tempCopy.personalSavings - tempCopy.retirementSavings - tempCopy.monthlyLivingExpenses - tempCopy.additionalExpenses;
moneyRemainingMonthly = Math.round(moneyRemainingMonthly * 100) / 100;
let moneyRemainingDaily = Math.round((moneyRemainingMonthly / getRemainingDays()) * 100) / 100;
tempCopy.moneyRemainingMonthly = moneyRemainingMonthly;
tempCopy.moneyRemainingDaily = moneyRemainingDaily;

export default fakeBudget;
