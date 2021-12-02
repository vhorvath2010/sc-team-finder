import { Dialog, DialogTitle, Button, Switch } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormControlLabel from '@mui/material/FormControlLabel';

function makeTextField(id, label, defaultValue) {
    return (
        <TextField
            autoFocus
            margin="dense"
            id={id}
            label={label}
            type="text"
            fullWidth
            variant="standard"
        />
    )
}

export default function ProfileCreation(props, handleClose) {
    console.log(props.user);
    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter your information below to help us find the perfect teammates for your group!
                </DialogContentText>
                {makeTextField('name', 'Name')}
                {makeTextField('contact', 'Contact Info')}
                <FormControlLabel control={<Switch defaultChecked={true} />} label="Looking for a team?" />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    )
}