// Handle input function for Home.jsx

let budgetObject = {
    budgetName: "",
    monthlyIncome: NaN,
    monthlyLivingExpenses: NaN,
    additionalExpenses: NaN,
    personalSavings: NaN,
    retirementSavings: NaN
}

const handleInput = (e) => {
    switch (e.target.id) {
        case "name":
            budgetObject = {
                budgetName: e.target.value,
                monthlyIncome: budgetObject.monthlyIncome,
                monthlyLivingExpenses: budgetObject.monthlyLivingExpenses,
                additionalExpenses: budgetObject.additionalExpenses,
                personalSavings: budgetObject.personalSavings,
                retirementSavings: budgetObject.retirementSavings
            }
            break;
        case "income":
            budgetObject = {
                budgetName: budgetObject.budgetName,
                monthlyIncome: e.target.value,
                monthlyLivingExpenses: budgetObject.monthlyLivingExpenses,
                additionalExpenses: budgetObject.additionalExpenses,
                personalSavings: budgetObject.personalSavings,
                retirementSavings: budgetObject.retirementSavings
            }
            break;
        case "expenses":
            budgetObject = {
                budgetName: budgetObject.budgetName,
                monthlyIncome: budgetObject.monthlyIncome,
                monthlyLivingExpenses: e.target.value,
                additionalExpenses: budgetObject.additionalExpenses,
                personalSavings: budgetObject.personalSavings,
                retirementSavings: budgetObject.retirementSavings
            }
            break;
        case "additional-expenses":
            budgetObject = {
                budgetName: budgetObject.budgetName,
                monthlyIncome: budgetObject.monthlyIncome,
                monthlyLivingExpenses: budgetObject.monthlyLivingExpenses,
                additionalExpenses: e.target.value,
                personalSavings: budgetObject.personalSavings,
                retirementSavings: budgetObject.retirementSavings
            }
            break;
        case "retirement-savings":
            budgetObject = {
                budgetName: budgetObject.budgetName,
                monthlyIncome: budgetObject.monthlyIncome,
                monthlyLivingExpenses: budgetObject.monthlyLivingExpenses,
                additionalExpenses: budgetObject.additionalExpenses,
                personalSavings: e.target.value,
                retirementSavings: budgetObject.retirementSavings
            }
            break;
        case "personal-savings":
            budgetObject = {
                budgetName: budgetObject.budgetName,
                monthlyIncome: budgetObject.monthlyIncome,
                monthlyLivingExpenses: budgetObject.monthlyLivingExpenses,
                additionalExpenses: budgetObject.additionalExpenses,
                personalSavings: budgetObject.personalSavings,
                retirementSavings: e.target.value
            }
            break;
        default:
            console.log("Something went wrong");
    }
}

export { handleInput, budgetObject };
