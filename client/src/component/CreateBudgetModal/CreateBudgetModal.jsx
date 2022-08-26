import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function CreateBudgetModal({ open, handleClose, handleInput, handleSubmit }) {
    return (
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
                    label="Budget Name"
                    fullWidth
                    variant="standard"
                    onChange={handleInput}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="income"
                    label="Monthly Income"
                    fullWidth
                    variant="standard"
                    type="number"
                    onChange={handleInput}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="expenses"
                    label="Monthly Expenses"
                    fullWidth
                    variant="standard"
                    type="number"
                    onChange={handleInput}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="additional-expenses"
                    label="Additional Monthly Expenses"
                    fullWidth
                    variant="standard"
                    type="number"
                    onChange={handleInput}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="retirement-savings"
                    label="$ Amount to Save for Retirement"
                    fullWidth
                    variant="standard"
                    type="number"
                    onChange={handleInput}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="personal-savings"
                    label="$ Amount of Desired Monthly Savings"
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
    );
}

export default CreateBudgetModal;
