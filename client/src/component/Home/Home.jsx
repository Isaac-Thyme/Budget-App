import { Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState, useEffect } from "react";
import { handleInput, budgetObject } from '../../functions/handleInputHome.js';
import axios from 'axios';
const REACT_APP_SERVER = process.env.REACT_APP_SERVER;

function Home() {

    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('userData')));
    }, [setData]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        budgetObject.token = data.token;
        let result = await axios.post(`${REACT_APP_SERVER}/budget`, budgetObject);
        localStorage.setItem('userData', JSON.stringify(result.data));
        handleClose();
    };

    const displayBudget = async (budgetName) => {
        let result = await axios.get(`${REACT_APP_SERVER}/budget?budgetName=${budgetName}`);
        console.log(result);
    };

    return (
        <div id="home">
            {data.token ? (
                <div id="loggedInView">
                    <Button variant="outlined" onClick={handleClickOpen}>Create your budget!</Button>
                    <Box id="budget">
                        <p>Your budgets: </p>
                        {data.budget.map((item, idx) => (
                            <div key={idx}>
                                <Button onClick={() => displayBudget(item)}>{item}</Button>
                            </div>
                        ))}
                        <Button variant="outlined">Add a daily expense</Button>
                        <Button variant="outlined">Add a daily additional income</Button>
                    </Box>
                </div>
            ) : null}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create a budget</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill out the below questions to create a customized budget!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Budget name"
                        fullWidth
                        variant="standard"
                        onChange={handleInput}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="income"
                        label="Monthly income"
                        fullWidth
                        variant="standard"
                        type="number"
                        onChange={handleInput}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="expenses"
                        label="Monthly expenses"
                        fullWidth
                        variant="standard"
                        type="number"
                        onChange={handleInput}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="additional-expenses"
                        label="Additional monthly expenses"
                        fullWidth
                        variant="standard"
                        type="number"
                        onChange={handleInput}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="retirement-savings"
                        label="% of income to save for retirement"
                        fullWidth
                        variant="standard"
                        type="number"
                        onChange={handleInput}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="personal-savings"
                        label="$ amount of desired monthly savings"
                        fullWidth
                        variant="standard"
                        type="number"
                        onChange={handleInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Home;
