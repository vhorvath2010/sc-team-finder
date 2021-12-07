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
    const interests = ['Sustainability']
    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter your information below to help us find the perfect teammates for your group!
                </DialogContentText>
                <DialogTitle>Personal Information</DialogTitle>
                {makeTextField('name', 'Name')}
                {makeTextField('contact', 'Contact Info')}
                <FormControlLabel control={<Switch checked={props.user['needsTeam']} />} label="Looking for a team?" />
                <DialogTitle>Skills</DialogTitle>
                <FormGroup row>
                    {skills.map(skill => {
                        return (<FormControlLabel control={<Checkbox defaultChecked />} label={skill} id={skill} />)
                    })}
                </FormGroup>
                <DialogTitle>Interests</DialogTitle>
                <FormGroup row>
                    {interests.map(interest => {
                        return (<FormControlLabel control={<Checkbox defaultChecked />} label={interest} id={interest} />)
                    })}
                </FormGroup>
                <DialogTitle>Looking for People with: </DialogTitle>
                <FormGroup row>
                    {skills.map(skill => {
                        return (<FormControlLabel control={<Checkbox defaultChecked />} label={skill} id={skill} />)
                    })}
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Update Profile</Button>
            </DialogActions>
        </Dialog>
    )
}