import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import ProfileCard from "./ProfileCard";

export default function SearchResults(props) {
    if (props.users != null) {
        if (props.users.length === 0) {
            return (<Typography variant="h4" align="center">No profiles to view! Sign in and be the first to create one!</Typography>)
        }
        return (
            <Box style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {props.users.map(user => {
                        return (
                            <Grid item key={user['contact']} xs={12} sm={6} md={4} lg={3}>
                                <ProfileCard user={user} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        );
    } else {
        return (
            <Typography variant="h4" align="center">Loading Results...</Typography>)
    }

}