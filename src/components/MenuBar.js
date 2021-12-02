import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    if (!props.userLoggedIn) {
        properMobileButtons = (
            <Box>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }}>
                        Find Teammates
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }}>
                        Login
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }}>
                        Create Account
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
            </Box>
        )
    }

    let properButtons;
    if (!props.userLoggedIn) {
        properButtons = (

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>Find Teammates</Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>Login</Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>Create Account</Button>
            </Box>
        )
    } else {
        properButtons = (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>Find Teammates</Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>Profile</Button>
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
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: 'royalblue', marginBottom: 50 }} position="static">
                    <Toolbar>
                        <Grid container alignItems="center">
                            <Grid item sm={6} lg={8}>
                                <Typography sx={{ flexGrow: 1 }} variant="h4">
                                    Solutions Challenge Team Finder
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                {properButtons}
                                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
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
