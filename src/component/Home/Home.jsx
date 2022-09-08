import './Home.css';
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { handleCreateBudgetInput, handleEditExpensesInput, clearObject, budgetObject, editedExpensesObject } from '../../functions/handleInputHome.js';
import axios from 'axios';
import { getRemainingDays } from "../../functions/getDate";
import BudgetTable from "../BudgetTable/BudgetTable.jsx";
import CreateBudgetModal from '../CreateBudgetModal/CreateBudgetModal.jsx';
import EditBudgetModal from '../EditExpensesModal/EditExpensesModal.jsx';
import fakeBudget from "../../functions/fakeBudget.js";
const REACT_APP_SERVER = process.env.REACT_APP_SERVER;

function Home() {

    const [data, setData] = useState('');
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openConditionalEdit, setOpenConditionalEdit] = useState(false);
    const [budget, setBudget] = useState('');
    const [token, setToken] = useState('');
    const [selectedBudget, setSelectedBudget] = useState('');

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('userData')));
        setToken(JSON.parse(localStorage.getItem('token')));
    }, [setData, setToken]);

    const handleCreateModalChange = () => {
        clearObject();
        setOpenCreateModal(!openCreateModal);
    }

    const handleEditModalChange = () => {
        clearObject();
        setOpenEditModal(!openEditModal);
    }

    const handleConditionalEdit = () => {
        clearObject();
        setOpenConditionalEdit(!openConditionalEdit);
    }

    const handleCreateBudgetSubmit = async () => {
        try {
            budgetObject.token = JSON.parse(localStorage.getItem("token"));
            let { data } = await axios.post(`${REACT_APP_SERVER}/budget`, budgetObject);
            localStorage.setItem('userData', JSON.stringify(data));
            setData(data);
            handleCreateModalChange();
        } catch (e) {
            console.error(e.message);
        }
    };

    const handleEditBudgetSubmit = async () => {
        try {
            budgetObject.token = JSON.parse(localStorage.getItem("token"));
            let { data } = await axios.put(`${REACT_APP_SERVER}/editBudget`, budgetObject);
            setBudget(data);
            displayBudget(selectedBudget);
            handleConditionalEdit();
        } catch (e) {
            console.error(e.message);
        }
    }

    const handleEditExpensesSubmit = async () => {
        try {
            editedExpensesObject.token = JSON.parse(localStorage.getItem("token"));
            editedExpensesObject.budgetName = selectedBudget;
            let { data } = await axios.put(`${REACT_APP_SERVER}/editExpenses`, editedExpensesObject);
            setBudget(data);
            displayBudget(selectedBudget);
            handleEditModalChange();
        } catch (e) {
            console.error(e.message);
        }
    }

    const displayBudget = async (budgetName) => {
        // Todo: Create weekly remaining budget
        setSelectedBudget(budgetName);
        let tempToken = JSON.parse(localStorage.getItem("token"));
        let params = { budgetName: budgetName, token: tempToken };
        let { data } = await axios.get(`${REACT_APP_SERVER}/budget`, { params });
        let moneyRemainingMonthly = data.monthlyIncome - (data.personalSavings || 0) - (data.retirementSavings || 0) - (data.monthlyLivingExpenses || 0) - (data.additionalExpenses || 0);
        moneyRemainingMonthly = Math.round(moneyRemainingMonthly * 100) / 100;
        let moneyRemainingDaily = Math.round((moneyRemainingMonthly / getRemainingDays()) * 100) / 100;
        data.moneyRemainingMonthly = moneyRemainingMonthly;
        data.moneyRemainingDaily = moneyRemainingDaily;
        setBudget(data);
    };

    return (
        <div id="home">
            {!token ? (
                <>
                    <h3 id="loggedOutView">Please log in or sign up to begin creating budgets!</h3>
                    <BudgetTable budget={fakeBudget} />
                </>
            ) : null}
            {token ? (
                <div id="loggedInView">
                    <Button variant="outlined" onClick={handleCreateModalChange}>Create your budget!</Button>
                    <div id="budget">
                        <p>Your budgets: </p>
                        {data.budget.length ? data.budget.map((item, idx) => (
                            <div key={idx}>
                                <Button onClick={() => displayBudget(item)}>{item}</Button>
                            </div>
                        )) : (
                            <p>No budgets yet...</p>
                        )}
                    </div>
                    {budget ? (
                        <BudgetTable budget={budget} openConditionalEdit={openConditionalEdit} />
                    ) : (
                        <BudgetTable budget={fakeBudget} />
                    )}
                    {selectedBudget ? (
                        <div>
                            <Button variant="outlined" onClick={handleConditionalEdit} id='editBtns'>Edit Budget</Button>
                            <Button variant="outlined" onClick={handleEditModalChange} id='editBtns'>Add a daily expense or gain</Button>
                        </div>
                    ) : null}
                </div>
            ) : null}
            {openConditionalEdit ? (
                <>
                    <Button variant="outlined" onClick={handleEditBudgetSubmit}>Submit Budget Change</Button>
                </>
            ) : null}
            <CreateBudgetModal handleClose={handleCreateModalChange} open={openCreateModal} handleInput={handleCreateBudgetInput} handleSubmit={handleCreateBudgetSubmit} />
            <EditBudgetModal handleClose={handleEditModalChange} open={openEditModal} handleInput={handleEditExpensesInput} handleSubmit={handleEditExpensesSubmit} />
        </div>
    );
}

export default Home;
