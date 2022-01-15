import { Grid } from "@material-ui/core";
import ProfileCard from "./ProfileCard";

function removeFromArray(item, array) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}


function getFilteredUsers(users, skillFilters, interestFilters, needFilters) {
    const filteredUsers = [...users];
    const toRemove = new Set();
    filteredUsers.forEach(user => {
        const userSkills = user['skills'];
        skillFilters.forEach(filter => {
            if (!userSkills.includes(filter)) {
                toRemove.add(user);
            }
        });
    })
    filteredUsers.forEach(user => {
        const userInterests = user['interests'];
        interestFilters.forEach(filter => {
            if (!userInterests.includes(filter)) {
                toRemove.add(user);
            }
        });
    })
    filteredUsers.forEach(user => {
        const userNeeds = user['needs'];
        console.log(userNeeds);
        needFilters.forEach(filter => {
            if (!userNeeds.includes(filter)) {
                toRemove.add(user);
            }
        });
    })
    toRemove.forEach(user => {
        removeFromArray(user, filteredUsers);
    })
    return filteredUsers;
}

export default function FilteredSearchResults(props) {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {getFilteredUsers(props.users, props.skillFilters, props.interestFilters, props.needFilters).map(user => {
                return (
                    <Grid item key={user['contact']} xs={12} sm={6} md={4} lg={3}>
                        <ProfileCard user={user} />
                    </Grid>
                );
            })}
        </Grid>
    )
}
