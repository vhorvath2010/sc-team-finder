import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, List, ListSubheader, Typography } from "@mui/material";
import { ListItemText } from '@material-ui/core';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

function CardList(props) {
    let items = props.items[0];
    for (let i = 1; i < props.items.length; ++i) {
        items += ", " + props.items[i];
    }
    return (
        <List sx={{ color: "black" }}>
            <ListSubheader key="header" sx={{ color: "black", backgroundColor: "whitesmoke", fontSize: 20 }}>{props.title}</ListSubheader>
            <ListItemText key="items">{items}</ListItemText>
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