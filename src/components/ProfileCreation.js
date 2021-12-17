import { Dialog, DialogTitle, Button, Switch, FormGroup } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { getUserData, enterUserData } from './firebase';
import React from "react";

export default class ProfileCreation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: null,
        }
    }

    updateStateWithUserData(userData) {
        this.setState({
            userData: userData,
            contact: userData['contact'],
            name: userData['name'],
            interests: [...userData['interests']],
            needs: [...userData['needs']],
            needsTeam: userData['needsTeam'],
            skills: [...userData['skills']],
        });
    }

    componentDidMount() {
        if (this.props.user != null) {
            this.setState({loading: true})
            getUserData(this.props.user).then(data => {
                this.updateStateWithUserData(data);
                this.setState({loading: false})
            });
        }
    }

    componentDidUpdate(nextProps) {
        if (this.props !== nextProps && nextProps.user != null) {
            this.setState({loading: true})
            getUserData(nextProps.user).then(data => {
                this.updateStateWithUserData(data);
                this.setState({loading: false})
            });
        }
    }

    render() {
        if (this.props.user == null || this.state.userData == null || this.state.loading) {
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
                    <TextField
                        autoFocus
                        margin="dense"
                        id={'name'}
                        label={'Name'}
                        type="text"
                        defaultValue={this.state.name}
                        fullWidth
                        onChange={(event) => {
                            this.setState({
                                name: event.target.value,
                            })
                        }}
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id={'contact'}
                        label={'Contact Info'}
                        type="text"
                        defaultValue={this.state.contact}
                        fullWidth
                        onChange={(event) => {
                            this.setState({
                                contact: event.target.value,
                            })
                        }}
                        variant="standard"
                    />
                    <FormControlLabel control={<Switch
                        checked={this.state.needsTeam} />}
                        label="Looking for a team?"
                        onChange={(event) => {
                            this.setState({
                                needsTeam: event.target.checked,
                            })
                        }}
                    />
                    <DialogTitle>Skills</DialogTitle>
                    <FormGroup row>
                        {skills.map(skill => {
                            return (
                                <FormControlLabel
                                    control={<Checkbox inputProps={{ 'aria-label': 'controlled' }}
                                        defaultChecked={this.state.skills.includes(skill)} />}
                                    label={skill}
                                    id={"skill." + skill}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            this.state.skills.push(skill);
                                        } else {
                                            const index = this.state.skills.indexOf(skill)
                                            if (index > -1) {
                                                this.state.skills.splice(index, 1);
                                            }
                                        }
                                    }}
                                />)
                        })}
                    </FormGroup>
                    <DialogTitle>Interests</DialogTitle>
                    <FormGroup row>
                        {interests.map(interest => {
                            return (
                                <FormControlLabel
                                    control={<Checkbox inputProps={{ 'aria-label': 'controlled' }}
                                        defaultChecked={this.state.interests.includes(interest)} />}
                                    label={interest}
                                    id={"interest." + interest}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            this.state.interests.push(interest)
                                        } else {
                                            const index = this.state.interests.indexOf(interest)
                                            if (index > -1) {
                                                this.state.interests.splice(index, 1)
                                            }
                                        }
                                    }}
                                />)
                        })}
                    </FormGroup>
                    <DialogTitle>Looking for People with: </DialogTitle>
                    <FormGroup row>
                        {skills.map(skill => {
                            return (
                                <FormControlLabel
                                    control={<Checkbox inputProps={{ 'aria-label': 'controlled' }}
                                        defaultChecked={this.state.needs.includes(skill)} />}
                                    label={skill}
                                    id={"need." + skill}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            this.state.needs.push(skill)
                                        } else {
                                            const index = this.state.needs.indexOf(skill)
                                            if (index > -1) {
                                                this.state.needs.splice(index, 1)
                                            }
                                        }
                                    }}
                                />)
                        })}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={
                        () => {
                            this.props.setClosed();
                            enterUserData(this.props.user, {
                                name: this.state.name,
                                needsTeam: this.state.needsTeam,
                                contact: this.state.contact,
                                skills: this.state.skills,
                                interests: this.state.interests,
                                needs: this.state.needs,
                            });
                        }}>Update Profile</Button>
                </DialogActions>
            </Dialog>
        )
    }
}