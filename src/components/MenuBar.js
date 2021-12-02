import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAuth0 } from "@auth0/auth0-react";

function MenuBar(props) {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-nav-menu';
    let properMobileButtons;
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    if (!props.userLoggedIn) {
        properMobileButtons = (
            <Box>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }}>
                        Find Teammates
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }} onClick={() => loginWithRedirect()}>
                        Log in
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }} onClick={() => loginWithRedirect()}>
                        Sign up
                    </Button>
                </MenuItem>
            </Box>
        )
    } else {
        properMobileButtons = (
            <Box>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }}>
                        Find Teammates
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }}>
                        Profile
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }} onClick={() => logout()}>
                        Logout
                    </Button>
                </MenuItem>
            </Box>
        )
    }

    let properButtons;
    if (!props.userLoggedIn) {
        properButtons = (

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>Find Teammates</Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }} onClick={() => loginWithRedirect()}>Log in</Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }} onClick={() => loginWithRedirect()}>Sign up</Button>
            </Box>
        )
    } else {
        properButtons = (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>Find Teammates</Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>Profile</Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }} onClick={() => logout()}>Logout</Button>
            </Box>
        )
    }

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {properMobileButtons}
        </Menu>);

    return (
        <div>
            <Box>
                <AppBar style={{ background: 'royalblue', marginBottom: 50 }} position="static">
                    <Toolbar>
                        <Grid container alignItems="center">
                            <Grid item sm={6} lg={8}>
                                <Typography variant="h4">
                                    Solutions Challenge Team Finder
                                </Typography>
                            </Grid>
                            <Grid item sm={6} lg={4}>
                                {properButtons}
                                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="medium"
                                        aria-label="show more"
                                        aria-haspopup="true"
                                        color="inherit"
                                        onClick={handleMobileMenuOpen}
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </Box>
        </div>
    )
}

export default MenuBar;
