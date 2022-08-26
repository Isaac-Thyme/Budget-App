import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function EditExpensesModal({ open, handleClose, handleInput, handleSubmit }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Expenses</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add or subtract from your additional expenses below
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

export default EditExpensesModal;
