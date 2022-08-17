import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function EditBudgetModal({ open, handleClose, handleInput, handleSubmit }) {
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
                    id="decrease"
                    label="Enter dollar amount spent"
                    fullWidth
                    variant="standard"
                    type="number"
                    onChange={handleInput}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="increase"
                    label="Enter dollar amount gained"
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

export default EditBudgetModal;
