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
    );
}

export default CreateBudgetModal;
