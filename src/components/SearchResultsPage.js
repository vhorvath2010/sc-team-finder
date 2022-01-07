import { Checkbox, FormControlLabel, Grid, List, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import FilteredSearchResults from "./FilteredSearchResults";

const skills = ['Web Dev', 'Machine Learning', 'Data Science', 'Mobile Apps', 'Python', 'Java', 'C#']
const interests = ['Sustainability', 'Equality', 'Education', 'Finance', 'Gaming', 'Healthcare']

function removeFromArray(item, array) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

export default function SearchResults(props) {
    const [skillFilters, setSkillFilters] = useState([]);
    if (props.users != null) {
        if (props.users.length === 0) {
            return (<Typography variant="h4" align="center">No profiles to view! Sign in and be the first to create one!</Typography>)
        }
        return (
            <Box style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Grid container item spacing={0} key="filters" justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <h2>Filters</h2>
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                                            const newSkillFilters = [...skillFilters];
                                            if (event.target.checked) {
                                                newSkillFilters.push(skill);
                                            } else {
                                                removeFromArray(skill, newSkillFilters)
                                            }
                                            setSkillFilters(newSkillFilters);
                                        }}
                                    />)
                            })}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h3>Interests</h3>
                        <List dense>
                            {interests.map(interest => {
                                return (
                                    <FormControlLabel
                                        control={<Checkbox inputProps={{ 'aria-label': 'controlled' }} />}
                                        label={interest}
                                        key={interest}
                                        id={"filter.interest." + interest}
                                    />)
                            })}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h3>Looking For</h3>
                        <List dense>
                            {skills.map(skill => {
                                return (
                                    <FormControlLabel
                                        control={<Checkbox inputProps={{ 'aria-label': 'controlled' }} />}
                                        label={skill}
                                        key={skill}
                                        id={"filter.need." + skill}
                                    />)
                            })}
                        </List>
                    </Grid>
                </Grid>
                <FilteredSearchResults users={props.users} skillFilters={skillFilters} />
            </Box>
        );
    } else {
        return (
            <Typography variant="h4" align="center">Loading Results...</Typography>)
    }

}