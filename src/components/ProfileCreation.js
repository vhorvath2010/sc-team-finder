import { Dialog, DialogTitle, Button, Switch, FormGroup } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { getUserData } from './firebase';
import React from "react";

function makeTextField(id, label, defaultValue) {
    return (
        <TextField
            autoFocus
            margin="dense"
            id={id}
            label={label}
            type="text"
            defaultValue={defaultValue}
            fullWidth
            variant="standard"
        />
    )
}

export default class ProfileCreation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: null,
        }
    }

    componentDidMount() {
        if (this.props.user != null) {
            getUserData(this.props.user).then(data => {
                this.setState({
                    userData: data,
                });
            });
        }
    }

    componentDidUpdate() {
        if (this.props.user != null) {
            getUserData(this.props.user).then(data => {
                this.setState({
                    userData: data,
                });
            });
        }
    }

    render() {
        console.log(this.props.user);
        if (this.props.user == null || this.state.userData == null) {
            return (
                <Dialog open={this.props.open} onClose={this.props.setClosed}>
                    <DialogTitle>Loading user data...</DialogTitle>
                </Dialog>
            )
        }
        const skills = ['Web Dev', 'Machine Learning', 'Data Science', 'Mobile Apps', 'Python', 'Java', 'C#']
        const interests = ['Sustainability', 'Equality', 'Education', 'Finance', 'Gaming', 'Healthcare']
        return (
            <Dialog open={this.props.open} onClose={this.props.setClosed}>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your information below to help us find the perfect teammates for your group!
                    </DialogContentText>
                    <DialogTitle>Personal Information</DialogTitle>
                    {makeTextField('name', 'Name', this.state.userData['name'])}
                    {makeTextField('contact', 'Contact Info', this.state.userData['contact'])}
                    <FormControlLabel control={<Switch checked={this.state.userData['needsTeam']} />} label="Looking for a team?" />
                    <DialogTitle>Skills</DialogTitle>
                    <FormGroup row>
                        {skills.map(skill => {
                            return (<FormControlLabel control={<Checkbox defaultChecked={this.state.userData['skills'].includes(skill)} />} label={skill} id={"skill." + skill} />)
                        })}
                    </FormGroup>
                    <DialogTitle>Interests</DialogTitle>
                    <FormGroup row>
                        {interests.map(interest => {
                            return (<FormControlLabel control={<Checkbox defaultChecked={this.state.userData['interests'].includes(interest)} />} label={interest} id={"interest." + interest} />)
                        })}
                    </FormGroup>
                    <DialogTitle>Looking for People with: </DialogTitle>
                    <FormGroup row>
                        {skills.map(skill => {
                            return (<FormControlLabel control={<Checkbox defaultChecked={this.state.userData['needs'].includes(skill)} />} label={skill} id={"need." + skill} />)
                        })}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.setClosed}>Update Profile</Button>
                </DialogActions>
            </Dialog>
        )
    }
}