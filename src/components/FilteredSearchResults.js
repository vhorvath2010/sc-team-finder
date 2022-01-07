import { Grid } from "@material-ui/core";
import ProfileCard from "./ProfileCard";

function removeFromArray(item, array) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}


function getFilteredUsers(users, skillFilters, interestFilters, needsFilters) {
    const filteredUsers = [...users];
    filteredUsers.forEach(user => {
        const userSkills = user['skills'];
        skillFilters.forEach(filterSkill => {
            if (userSkills.indexOf(filterSkill) === -1) {
                removeFromArray(user, filteredUsers);
            }
        })
        const userInterests = user['interests'];
        interestFilters.forEach(filterInterest => {
            if (userInterests.indexOf(filterInterest) === -1) {
                removeFromArray(user, filteredUsers);
            }
        })
        // TODO: fix promise error?
        const userNeeds = user['needs'];
        needsFilters.forEach(filterNeed => {
            if (userNeeds.indexOf(filterNeed) === -1) {
                removeFromArray(user, filteredUsers);
            }
        })
    })
    return filteredUsers;
}

export default function FilteredSearchResults(props) {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {getFilteredUsers(props.users, props.skillFilters, props.interestFilters, props.needsFilters).map(user => {
                return (
                    <Grid item key={user['contact']} xs={12} sm={6} md={4} lg={3}>
                        <ProfileCard user={user} />
                    </Grid>
                );
            })}
        </Grid>
    )
}
