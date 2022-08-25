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
            budgetObject.monthlyIncome = e.target.value;
            break;
        case "expenses":
            budgetObject.monthlyLivingExpenses = e.target.value;
            break;
        case "additional-expenses":
            budgetObject.additionalExpenses = e.target.value;
            break;
        case "retirement-savings":
            budgetObject.retirementSavings = e.target.value;
            break;
        case "personal-savings":
            budgetObject.personalSavings = e.target.value;
            break;
        default:
            console.log("Something went wrong");
    }
}

export { handleCreateBudgetInput, handleEditExpensesInput, clearObject, budgetObject, editedExpensesObject };
