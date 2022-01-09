import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import ProfileCreation from "./ProfileCreation";
import { removeIfNewUser } from "./firebase";

export default function MenuBar(props) {
    const { user } = useAuth0();

    // Profile
    const [editingProfile, setEditingProfile] = React.useState(false);
    const handleProfileEditorOpen = () => {
        setEditingProfile(true);
    }
    const handleProfileEditorClose = () => {
        setEditingProfile(false);
    }

    // Open profile if user logged in for first time
    if (removeIfNewUser(user)) {
        handleProfileEditorOpen();
    }

    // Show user creation if needed
    const profileCreation = (
        <ProfileCreation
            open={editingProfile && user != null}
            user={user}
            setClosed={handleProfileEditorClose} />
    );

    // Mobile menu operations
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const mobileMenuId = 'primary-nav-menu';

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    // Auth0 authentication methods
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    // Acquire proper buttons
    let properMobileButtons;
    let homeLink = (
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            Solutions Challenge Team Finder
        </Link>
    )
    if (user == null) {
        properMobileButtons = (
            <Box>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }} onClick={handleProfileEditorOpen}>
                        <Link to='/FindTeammates' style={{ textDecoration: 'none', color: 'royalblue' }}>
                            Find Teammates
                        </Link>
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
                    <Button variant="text" style={{ color: 'royalblue' }} onClick={handleProfileEditorOpen}>
                        <Link to='/FindTeammates' style={{ textDecoration: 'none', color: 'royalblue' }}>
                            Find Teammates
                        </Link>
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" style={{ color: 'royalblue' }} onClick={handleProfileEditorOpen}>
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
    if (user == null) {
        properButtons = (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>
                    <Link to='/FindTeammates' style={{ textDecoration: 'none', color: 'white' }}>
                        Find Teammates
                    </Link>
                </Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }} onClick={() => loginWithRedirect()}>Log in</Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }} onClick={() => loginWithRedirect()}>Sign up</Button>
            </Box>
        )
    } else {
        properButtons = (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="text" style={{ color: 'white', padding: 20 }}>
                    <Link to='/FindTeammates' style={{ textDecoration: 'none', color: 'white' }}>
                        Find Teammates
                    </Link>
                </Button>
                <Button variant="text" style={{ color: 'white', padding: 20 }} onClick={handleProfileEditorOpen}>Profile</Button>
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
            {profileCreation}
            <Box>
                <AppBar style={{ background: 'rgb(66, 133, 244)', marginBottom: 50 }} position="static">
                    <Toolbar>
                        <Grid container alignItems="center">
                            <Grid item sm={6} lg={8}>
                                <Typography variant="h4">
                                    {homeLink}
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
                                        <MoreVertIcon />
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
