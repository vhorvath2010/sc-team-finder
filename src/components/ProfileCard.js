import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, List, ListItem, ListItemText, ListSubheader, Typography } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

function CardList(props) {
    return (
        <List sx={{ color: "black"}}>
            <ListSubheader sx={{ color: "black", backgroundColor: "whitesmoke", fontSize: 20}}>{props.title}</ListSubheader>
            {props.items.map(item => (
                <ListItem>
                    <ListItemText primary={item}></ListItemText>
                </ListItem>
            ))}
        </List>
    );
}

export default function ProfileCard(props) {
    // Load data (would be done using database calls for profileID in props)
    var name = "Vince",
        year = "Freshman",
        skills = ["Java", "Python", "React"],
        wants = ["Backend", "Data Science"]

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 100, backgroundColor: "whitesmoke" }} variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 20}}>
                        Name: {name}
                    </Typography>
                    <Typography sx={{ fontSize: 20}}>
                        Year: {year}
                    </Typography>
                    <CardList items={skills} title="Skills"></CardList>
                    <CardList items={wants} title="Looking for"></CardList>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}