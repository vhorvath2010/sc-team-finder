import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography } from "@mui/material";

const theme = createTheme({
    palette: {
      mode: 'light',
    },
});

export default function ProfileCard(props) {
    // Load data (would be done using database calls for profileID in props)
    var name = "Vince";

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 100, backgroundColor: "whitesmoke" }} variant="outlined">
            <CardContent>
                <Typography color="MenuText">
                    Name: {name}
                </Typography>
            </CardContent>
        </Card>
        </ThemeProvider>
    );

}