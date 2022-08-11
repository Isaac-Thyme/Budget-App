function BudgetTable({ budget }) {
    return (
        <div id="budgetDisplay">
            <div className="flexChildren">
                <h2>Selected Budget: {budget.budgetName}</h2>
            </div>
            <div className="flexChildren">
                <h2>Monthly Income: {budget.monthlyIncome}</h2>
            </div>
            <div className="flexChildren">
                <h2>Monthly Living Expenses: {budget.monthlyLivingExpenses}</h2>
            </div>
            <div className="flexChildren">
                <h2>Monthly Personal Savings: {budget.personalSavings}</h2>
            </div>
            <div className="flexChildren">
                <h2>Monthly Additional Retirement Savings: {budget.retirementSavings}</h2>
            </div>
            <div className="flexChildren">
                <h2>Additional Monthly Expenses: {budget.additionalExpenses}</h2>
            </div>
            <div className="flexChildren">
                {console.log(budget)}
                <h2>Money Remaining for Monthly Use: $ {budget.moneyRemainingMonthly}</h2>
            </div>
            <div className="flexChildren">
                <h2>Money Remaining for Daily Use: $ {budget.moneyRemainingDaily}</h2>
            </div>
        </div>
    )
};

export default BudgetTable;