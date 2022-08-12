import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { handleInput, budgetObject } from '../../functions/handleInputHome.js';
import axios from 'axios';
import { getRemainingDays } from "../../functions/getDate";
import BudgetTable from "../BudgetTable/BudgetTable.jsx";
import Modal from '../Modal/Modal.jsx';
import fakeBudget from "../../functions/fakeBudget.js";
const REACT_APP_SERVER = process.env.REACT_APP_SERVER;

function Home() {

    const [data, setData] = useState('');
    const [open, setOpen] = useState(false);
    const [budget, setBudget] = useState({});
    const [token, setToken] = useState('');

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('userData')));
        setToken(JSON.parse(localStorage.getItem('token')));
    }, [setData, setToken]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        budgetObject.token = JSON.parse(localStorage.getItem("token"));
        let result = await axios.post(`${REACT_APP_SERVER}/budget`, budgetObject);
        localStorage.setItem('userData', JSON.stringify(result.data));
        setData(result.data);
        handleClose();
    };

    const displayBudget = async (budgetName) => {
        // Todo: Create weekly remaining budget
        let tempToken = JSON.parse(localStorage.getItem("token"));
        let params = { budgetName: budgetName, token: tempToken };
        let { data } = await axios.get(`${REACT_APP_SERVER}/budget`, { params });
        let moneyRemainingMonthly = data.monthlyIncome - data.personalSavings - data.retirementSavings - data.monthlyLivingExpenses - data.additionalExpenses;
        moneyRemainingMonthly = Math.round(moneyRemainingMonthly * 100) / 100;
        let moneyRemainingDaily = Math.round((moneyRemainingMonthly / getRemainingDays()) * 100) / 100;
        data.moneyRemainingMonthly = moneyRemainingMonthly;
        data.moneyRemainingDaily = moneyRemainingDaily;
        setBudget(data);
    };

    return (
        <div id="home">
            {token ? (
                <div id="loggedInView">
                    <Button variant="outlined" onClick={handleClickOpen}>Create your budget!</Button>
                    <div id="budget">
                        <p>Your budgets: </p>
                        {data.budget ? data.budget.map((item, idx) => (
                            <div key={idx}>
                                <Button onClick={() => displayBudget(item)}>{item}</Button>
                            </div>
                        )) : (
                            <p>No budgets yet...</p>
                        )}
                        {/* Todo: Add functionality to these buttons, maybe add the ability to subtract income or daily expenses */}
                        <Button variant="outlined">Add a daily expense</Button>
                        <Button variant="outlined">Add a daily additional income</Button>
                    </div>
                    {data.budget.length ? (
                        <BudgetTable budget={budget} />
                    ) : (
                        <BudgetTable budget={fakeBudget} />
                    )}
                </div>
            ) : null}
            <Modal handleClose={handleClose} open={open} handleInput={handleInput} handleSubmit={handleSubmit} />
        </div>
    );
}

export default Home;
