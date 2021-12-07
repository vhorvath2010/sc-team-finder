import { Dialog, DialogTitle, Button, Switch, Grid, FormGroup } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
    if (props.user == null) {
        return (
            <Dialog>
                <DialogTitle>User not found!</DialogTitle>
            </Dialog>
        )
    }
    const skills = ['Web Dev', 'Machine Learning', 'Data Science', 'Mobile Apps', 'Python', 'Java', 'C#']
    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter your information below to help us find the perfect teammates for your group!
                </DialogContentText>
                {makeTextField('name', 'Name')}
                {makeTextField('contact', 'Contact Info')}
                <FormControlLabel control={<Switch checked={props.user['needsTeam']} />} label="Looking for a team?" />
                <FormGroup row>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label1" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label2" />
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Update Profile</Button>
            </DialogActions>
        </Dialog>
    )
}