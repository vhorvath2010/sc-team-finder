import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, List, ListItem, ListItemText, ListSubheader, Typography } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

function CardList(props) {
    return (
        <List sx={{ color: "black" }}>
            <ListSubheader sx={{ color: "black", backgroundColor: "whitesmoke", fontSize: 20 }}>{props.title}</ListSubheader>
            {props.items.map(item => (
                <ListItem>
                    <ListItemText primary={item}></ListItemText>
                </ListItem>
            ))}
        </List>
    );
}

export default function ProfileCard(props) {
    // Return loading card if user is null
    if (props.user == null) {
        return (
            <ThemeProvider theme={theme}>
                <Card sx={{ minWidth: 100, backgroundColor: "whitesmoke" }} variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }}>
                            Loading...
                        </Typography>
                    </CardContent>
                </Card>
            </ThemeProvider>
        );
    }

    // Load user data
    var name = props.user['name'],
        contact = props.user['contact'],
        skills = props.user['skills'],
        interests = props.user['interests'],
        wants = props.user['needs'];

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 100, backgroundColor: "whitesmoke" }} variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 20 }}>
                        Name: {name}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }}>
                        Contact: {contact}
                    </Typography>
                    <CardList items={skills} title="Skills"></CardList>
                    <CardList items={interests} title="Interests"></CardList>
                    <CardList items={wants} title="Looking for"></CardList>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}