import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { handleCreateBudgetInput, handleEditBudgetInput, budgetObject, editedBudgetObject } from '../../functions/handleInputHome.js';
import axios from 'axios';
import { getRemainingDays } from "../../functions/getDate";
import BudgetTable from "../BudgetTable/BudgetTable.jsx";
import CreateBudgetModal from '../CreateBudgetModal/CreateBudgetModal.jsx';
import EditBudgetModal from '../EditBudgetModal/EditBudgetModal.jsx';
import fakeBudget from "../../functions/fakeBudget.js";
const REACT_APP_SERVER = process.env.REACT_APP_SERVER;

function Home() {

    const [data, setData] = useState('');
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [budget, setBudget] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('userData')));
        setToken(JSON.parse(localStorage.getItem('token')));
    }, [setData, setToken]);

    const handleCreateModalChange = () => {
        setOpenCreateModal(!openCreateModal);
    }

    const handleEditModalChange = () => {
        setOpenEditModal(!openEditModal);
    }

    const handleCreateBudgetSubmit = async () => {
        try {
            budgetObject.token = JSON.parse(localStorage.getItem("token"));
            let result = await axios.post(`${REACT_APP_SERVER}/budget`, budgetObject);
            localStorage.setItem('userData', JSON.stringify(result.data));
            setData(result.data);
            handleCreateModalChange();
        } catch (e) {
            console.error(e.message);
        }
    };

    const handleEditBudgetSubmit = async () => {
        try {
            // TODO: Create route on backend for PUT /budget, return full user once done
            // editedBudgetObject.token = JSON.parse(localStorage.getItem("token"));
            // let result = await axios.put(`${REACT_APP_SERVER}/budget`, editedBudgetObject);
            // localStorage.setItem('userData', JSON.stringify(result.data));
            // setData(result.data);
            // handleEditModalChange();
        } catch (e) {
            console.error(e.message);
        }
    }

    const displayBudget = async (budgetName) => {
        // Todo: Create weekly remaining budget
        let tempToken = JSON.parse(localStorage.getItem("token"));
        let params = { budgetName: budgetName, token: tempToken };
        let result = await axios.get(`${REACT_APP_SERVER}/budget`, { params });
        let tempCopy = result.data;
        let moneyRemainingMonthly = tempCopy.monthlyIncome - tempCopy.personalSavings - tempCopy.retirementSavings - tempCopy.monthlyLivingExpenses - tempCopy.additionalExpenses;
        moneyRemainingMonthly = Math.round(moneyRemainingMonthly * 100) / 100;
        let moneyRemainingDaily = Math.round((moneyRemainingMonthly / getRemainingDays()) * 100) / 100;
        tempCopy.moneyRemainingMonthly = moneyRemainingMonthly;
        tempCopy.moneyRemainingDaily = moneyRemainingDaily;
        setBudget(tempCopy);
    };

    return (
        <div id="home">
            {token ? (
                <div id="loggedInView">
                    <Button variant="outlined" onClick={handleCreateModalChange}>Create your budget!</Button>
                    <div id="budget">
                        <p>Your budgets: </p>
                        {data.budget ? data.budget.map((item, idx) => (
                            <div key={idx}>
                                <Button onClick={() => displayBudget(item)}>{item}</Button>
                            </div>
                        )) : (
                            <p>No budgets yet...</p>
                        )}
                    </div>
                    {budget ? (
                        <BudgetTable budget={budget} />
                    ) : (
                        <BudgetTable budget={fakeBudget} />
                    )}
                </div>
            ) : null}
            <Button variant="outlined">Edit Budget</Button>
            <Button variant="outlined" onClick={handleEditModalChange}>Add a daily expense or gain</Button>
            <CreateBudgetModal handleClose={handleCreateModalChange} open={openCreateModal} handleInput={handleCreateBudgetInput} handleSubmit={handleCreateBudgetSubmit} />
            <EditBudgetModal handleClose={handleEditModalChange} open={openEditModal} handleInput={handleEditBudgetInput} handleSubmit={handleEditBudgetSubmit} />
        </div>
    );
}

export default Home;
