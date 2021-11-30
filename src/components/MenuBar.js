import { AppBar, Button, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MenuBar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-nav-menu';
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
        </Menu>);

    return (
        <div>
            <CssBaseline />
            <Box>
                <AppBar style={{ background: 'royalblue', marginBottom: 50 }} position="static">
                    <Toolbar>
                        <Typography variant="h4">
                            Solutions Challenge Team Finder
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button variant="text" style={{ color: 'white', padding: 20 }}>Find Teammates</Button>
                            <Button variant="text" style={{ color: 'white', padding: 20 }}>Login</Button>
                            <Button variant="text" style={{ color: 'white', padding: 20 }}>Create Account</Button>
                        </Box>
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
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </Box>
        </div>
    )
}

export default MenuBar;
