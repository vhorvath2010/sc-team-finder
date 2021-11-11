import './App.css'
import React from 'react'
import { Grid } from '@material-ui/core';
import { AppBar, Toolbar, Typography, CssBaseline, Box, IconButton, Button, Menu, MenuItem } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';

function App() {
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
    <div className="App">
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ background: 'royalblue', marginBottom: 25 }} position="static">
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} variant="h4">
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
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item className="left-head" xs={10} md={5}>
          <h1>Find Solutions Challenge Teammates!</h1>
          <p>Welcome to the Solutions Challenge Team Finder! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis diam sem, id scelerisque purus ullamcorper quis. Morbi pharetra odio est. Sed quis libero vestibulum, pharetra neque accumsan, mollis lorem. Maecenas semper eu est non placerat. Donec eget sapien ipsum. Phasellus imperdiet eros sem, eget vulputate massa mattis sit amet. Donec posuere dolor non elit vehicula, vel consectetur leo pretium. Donec varius turpis ac accumsan dapibus.</p>
        </Grid>
        <Grid item className="right-head" xs={10} md={5}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis diam sem, id scelerisque purus ullamcorper quis. Morbi pharetra odio est. Sed quis libero vestibulum, pharetra neque accumsan, mollis lorem. Maecenas semper eu est non placerat. Donec eget sapien ipsum. Phasellus imperdiet eros sem, eget vulputate massa mattis sit amet. Donec posuere dolor non elit vehicula, vel consectetur leo pretium. Donec varius turpis ac accumsan dapibus.</p>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid style={{paddingTop: 50}} container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item className="left-desc" xs={10} md={5}>
          <h1>What is the Google Solutions Challenge?</h1>
          <p>Explain this general idea + this year's focus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis diam sem, id scelerisque purus ullamcorper quis. Morbi pharetra odio est. Sed quis libero vestibulum, pharetra neque accumsan, mollis lorem. Maecenas semper eu est non placerat. Donec eget sapien ipsum. Phasellus imperdiet eros sem, eget vulputate massa mattis sit amet. Donec posuere dolor non elit vehicula, vel consectetur leo pretium. Donec varius turpis ac accumsan dapibus.</p>
        </Grid>
        <Grid item className="right-desc" xs={10} md={5}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis diam sem, id scelerisque purus ullamcorper quis. Morbi pharetra odio est. Sed quis libero vestibulum, pharetra neque accumsan, mollis lorem. Maecenas semper eu est non placerat. Donec eget sapien ipsum. Phasellus imperdiet eros sem, eget vulputate massa mattis sit amet. Donec posuere dolor non elit vehicula, vel consectetur leo pretium. Donec varius turpis ac accumsan dapibus.</p>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid style={{paddingTop: 50}} container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item className="left-more" xs={10} md={5}>
          <h1>Who is GT DSC?</h1>
          <p>Explain who we are as a club (beyond the Google Solutions Challenge and like to ways to get involved). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis diam sem, id scelerisque purus ullamcorper quis. Morbi pharetra odio est. Sed quis libero vestibulum, pharetra neque accumsan, mollis lorem. Maecenas semper eu est non placerat. Donec eget sapien ipsum. Phasellus imperdiet eros sem, eget vulputate massa mattis sit amet. Donec posuere dolor non elit vehicula, vel consectetur leo pretium. Donec varius turpis ac accumsan dapibus.</p>
        </Grid>
        <Grid item className="right-more" xs={10} md={5}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis diam sem, id scelerisque purus ullamcorper quis. Morbi pharetra odio est. Sed quis libero vestibulum, pharetra neque accumsan, mollis lorem. Maecenas semper eu est non placerat. Donec eget sapien ipsum. Phasellus imperdiet eros sem, eget vulputate massa mattis sit amet. Donec posuere dolor non elit vehicula, vel consectetur leo pretium. Donec varius turpis ac accumsan dapibus.</p>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default App;
