// Handle input function for Home.jsx
let budgetObject = {}

let editedExpensesObject = {
    additionalExpenses: 0
}

const clearObject = () => {
    budgetObject = {};
}

const handleEditExpensesInput = (e) => {
    if (e.target.id === "increase") {
        editedExpensesObject.additionalExpenses = 0 - (e.target.value);
    } else {
        editedExpensesObject.additionalExpenses = e.target.value;
    }
}

const handleCreateBudgetInput = (e) => {
    switch (e.target.id) {
        case "name":
            budgetObject.budgetName = e.target.value;
            break;
        case "income":
            if (e.target.value !== '') {
                budgetObject.monthlyIncome = e.target.value;
            } else {
                delete budgetObject.monthlyIncome;
            }
            break;
        case "expenses":
            if (e.target.value !== '') {
                budgetObject.monthlyLivingExpenses = e.target.value;
            } else {
                delete budgetObject.monthlyLivingExpenses;
            }
            break;
        case "additional-expenses":
            if (e.target.value !== '') {
                budgetObject.additionalExpenses = e.target.value;
            } else {
                delete budgetObject.additionalExpenses;
            }
            break;
        case "retirement-savings":
            if (e.target.value !== '') {
                budgetObject.retirementSavings = e.target.value;
            } else {
                delete budgetObject.retirementSavings;
            }
            break;
        case "personal-savings":
            if (e.target.value !== '') {
                budgetObject.personalSavings = e.target.value;
            } else {
                delete budgetObject.personalSavings;
            }
            break;
        default:
            console.log("Something went wrong");
    }
}

export { handleCreateBudgetInput, handleEditExpensesInput, clearObject, budgetObject, editedExpensesObject };
