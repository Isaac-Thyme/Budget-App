import './BudgetTable.css';
import { TextField } from '@mui/material';
import { budgetObject, handleCreateBudgetInput as handleInput } from '../../functions/handleInputHome';

function BudgetTable({ budget, openConditionalEdit }) {
    budgetObject.budgetName = budget.budgetName;
    return (
        <div id="budgetDisplay">
            <div className="flexChildren">
                <h2>Selected Budget: {budget ? budget.budgetName : ""}</h2>
            </div>
            <div className="flexChildren">
                <h2>Monthly Income: {budget.monthlyIncome}</h2>
                {openConditionalEdit ? (
                    <>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="income"
                            label="New Monthly Income"
                            fullWidth
                            variant="standard"
                            type="number"
                            onChange={handleInput}
                        />
                    </>
                ) : null}
            </div>
            <div className="flexChildren">
                <h2>Monthly Living Expenses: {budget.monthlyLivingExpenses}</h2>
                {openConditionalEdit ? (
                    <>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="expenses"
                            label="New Monthly expenses"
                            fullWidth
                            variant="standard"
                            type="number"
                            onChange={handleInput}
                        />
                    </>
                ) : null}
            </div>
            <div className="flexChildren">
                <h2>Monthly Personal Savings: {budget.personalSavings}</h2>
                {openConditionalEdit ? (
                    <>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="personal-savings"
                            label="New $ amount of desired monthly savings"
                            fullWidth
                            variant="standard"
                            type="number"
                            onChange={handleInput}
                        />
                    </>
                ) : null}
            </div>
            <div className="flexChildren">
                <h2>Monthly Additional Retirement Savings: {budget.retirementSavings}</h2>
                {openConditionalEdit ? (
                    <>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="retirement-savings"
                            label="New $ of income to save for retirement"
                            fullWidth
                            variant="standard"
                            type="number"
                            onChange={handleInput}
                        />
                    </>
                ) : null}
            </div>
            <div className="flexChildren">
                <h2>Additional Monthly Expenses: {budget.additionalExpenses}</h2>
                {openConditionalEdit ? (
                    <>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="additional-expenses"
                            label="New Additional Monthly Expenses"
                            fullWidth
                            variant="standard"
                            type="number"
                            onChange={handleInput}
                        />
                    </>
                ) : null}
            </div>
            <div className="flexChildren">
                <h2>Money Remaining for Monthly Use: ${budget.moneyRemainingMonthly}</h2>
            </div>
            <div className="flexChildren">
                <h2>Money Remaining for Daily Use: ${budget.moneyRemainingDaily}</h2>
            </div>
        </div>
    );
}

export default BudgetTable;
