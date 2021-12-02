import './Home.css'
import React from 'react'
import { Grid } from '@material-ui/core';
import { CssBaseline } from '@mui/material';
import MenuBar from './components/MenuBar';
import { useAuth0 } from '@auth0/auth0-react';
import { getUserData } from './firebase';

function Home() {

  const { user } = useAuth0();

  if (user != null) {
    getUserData(user).then((data) => {
      console.log(data);
    });
  }

  return (
    <div className="App">
      <CssBaseline />
      <MenuBar userLoggedIn={user != null} />
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
      <Grid style={{ paddingTop: 80 }} container spacing={1}>
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
      <Grid style={{ paddingTop: 50, marginBottom: 100 }} container spacing={1}>
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

export default Home;
