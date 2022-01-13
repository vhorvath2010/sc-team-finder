import { Checkbox, FormControlLabel, Grid, List, Paper, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import FilteredSearchResults from "./FilteredSearchResults";

const skills = ['Web Dev', 'Machine Learning', 'Data Science', 'Mobile Apps', 'Python', 'Java', 'C#'];
const interests = ['Poverty', 'Hunger', 'Health', 'Education', 'Gender Equality', 'Clean Water and Sanitation', 'Clean Energy', 'Sustainability', 'Ethical Economics'];

function removeFromArray(item, array) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

export default function SearchResults(props) {
    const [skillFilters, setSkillFilters] = useState([]);
    const [interestFilters, setInterestFilters] = useState([]);
    const [needFilters, setNeedFilters] = useState([]);
    if (props.users != null) {
        if (props.users.length === 0) {
            return (<Typography variant="h4" align="center">No profiles to view! Sign in and be the first to create one!</Typography>)
        }
        return (
            <Box style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Grid container item spacing={4} key="filters" justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <h2>Filters</h2>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Box p={1}>
                                <h3>Skills</h3>
                                <List dense>
                                    {skills.map(skill => {
                                        return (
                                            <FormControlLabel
                                                control={<Checkbox inputProps={{ 'aria-label': 'controlled' }} />}
                                                label={skill}
                                                key={skill}
                                                id={"filter.skill." + skill}
                                                onChange={event => {
                                                    const newFilters = [...skillFilters];
                                                    if (event.target.checked) {
                                                        newFilters.push(skill);
                                                    } else {
                                                        removeFromArray(skill, newFilters)
                                                    }
                                                    setSkillFilters(newFilters);
                                                }}
                                            />)
                                    })}
                                </List>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Box p={1}>
                                <h3>Interests</h3>
                                <List dense>
                                    {interests.map(interest => {
                                        return (
                                            <FormControlLabel
                                                control={<Checkbox inputProps={{ 'aria-label': 'controlled' }} />}
                                                label={interest}
                                                key={interest}
                                                id={"filter.interest." + interest}
                                                onChange={event => {
                                                    const newFilters = [...interestFilters];
                                                    if (event.target.checked) {
                                                        newFilters.push(interest);
                                                    } else {
                                                        removeFromArray(interest, newFilters)
                                                    }
                                                    setInterestFilters(newFilters);
                                                }}
                                            />)
                                    })}
                                </List>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper>
                            <Box p={1}>
                                <h3>Looking For</h3>
                                <List dense>
                                    {skills.map(skill => {
                                        return (
                                            <FormControlLabel
                                                control={<Checkbox inputProps={{ 'aria-label': 'controlled' }} />}
                                                label={skill}
                                                key={skill}
                                                id={"filter.need." + skill}
                                                onChange={event => {
                                                    const newFilters = [...needFilters];
                                                    if (event.target.checked) {
                                                        newFilters.push(skill);
                                                    } else {
                                                        removeFromArray(skill, newFilters)
                                                    }
                                                    setNeedFilters(newFilters);
                                                }}
                                            />)
                                    })}
                                </List>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                <br></br>
                <FilteredSearchResults
                    users={props.users}
                    skillFilters={skillFilters}
                    interestFilters={interestFilters}
                    needFilters={needFilters} />
            </Box>
        );
    } else {
        return (
            <Typography variant="h4" align="center">Loading Results...</Typography>)
    }

}