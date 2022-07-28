import { Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState, useEffect } from "react";

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

    return (
        <div id="home">
            {console.log(data)}
            <Button variant="outlined" onClick={handleClickOpen}>Create your budget!</Button>
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
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="income"
                        label="Monthly income"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="expenses"
                        label="Monthly expenses"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="additional-expenses"
                        label="Additional monthly expenses"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="retirement-savings"
                        label="% of income to save for retirement"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="personal savings"
                        label="$ amount of desired monthly savings"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
            <Box id="budget">
                <p>view of budget</p>
                <Button variant="outlined">Add a daily expense</Button>
                <Button variant="outlined">Add a daily additional income</Button>
            </Box>
            <Box id="budget-view-btns">
                <Button variant="outlined">Daily View</Button>
                <Button variant="outlined">Weekly View</Button>
                <Button variant="outlined">Monthly View</Button>
            </Box>
        </div>
    );
}

export default Home;
