import { Grid } from "@material-ui/core";
import { Box } from "@mui/system";
import ProfileCard from "./ProfileCard";

export default function SearchResults(props) {
    return (
        <Box style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                {props.users.map(user => {
                    return (
                        <Grid item xs={3}>
                            <ProfileCard user={user} />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}