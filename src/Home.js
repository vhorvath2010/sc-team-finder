import './Home.css'
import React from 'react'
import { Grid } from '@material-ui/core';
import { CssBaseline } from '@mui/material';
import MenuBar from './components/MenuBar';
import gdsc_img from './imgs/gdsc_2021_header_1920.png';
import sdg_img from './imgs/sdg_square_image_960.png';
import dsc_img from './imgs/gdsc_hero.svg';

export default function Home() {

  return (
    <div className="App">
      <CssBaseline />
      <MenuBar />
      <Grid container spacing={1} justifyContent="center" alignContent="center">
        <Grid item xs={false} lg={1}></Grid>
        <Grid item className="left-head" xs={12} lg={5}>
          <h1>Find Solution Challenge Teammates!</h1>
          <p>Welcome to the Solution Challenge Team Finder! This website is made to help you find teammates for the Google Solution Challenge</p>
        </Grid>
        <Grid item className="right-head" xs={12} lg={5}>
          <img src={gdsc_img} alt="evironmental artwork"></img>
        </Grid>
        <Grid item xs={false} lg={1}></Grid>
      </Grid>
      <Grid style={{ paddingTop: 80 }} container spacing={1}>
      <Grid item xs={false} lg={1}></Grid>
        <Grid item className="left-desc" xs={12} lg={5}>
          <h1>What is the Google Solution Challenge?</h1>
          <p>The Google Solution Challenge is the biggest event held by Google for DSC chapters across the globe. It is Google's semester-long Hackathon where participation is exclusive to DSC members. This is the perfect opportunity for students looking to explore Google Developer technologies with support and connections from Google mentors and engineers. GT DSC will provide check-ins and office hours twice a month to help teams develop quality projects. <strong>Top finalists will have the chance to fly out to Google's global conference to presetnt their ideas and receive prizes from GT DSC!</strong></p>
        </Grid>
        <Grid item className="right-desc" xs={12} lg={5}>
          <img src={sdg_img} alt="UN Sustainable Development Goals"></img>
        </Grid>
        <Grid item xs={false} lg={1}></Grid>
      </Grid>
      <Grid style={{ paddingTop: 50, marginBottom: 100 }} container spacing={1}>
      <Grid item xs={false} lg={1}></Grid>
        <Grid item className="left-more" xs={12} lg={5}>
          <h1>Who is GT DSC?</h1>
          <p>Developer Student Clubs (DSC) are university based community groups for students. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. Georgia Tech's DSC chapter focuses on teaching student's real-world technologies and fostering connections between memebers and industry leaders from companies like Google, Amazon, and Meta. <a href='https://dscgt.club/'>Learn more!</a></p>
        </Grid>
        <Grid item className="right-more" xs={12} lg={5}>
          <img src={dsc_img} alt="Students working on a laptop"></img>
        </Grid>
        <Grid item xs={false} lg={1}></Grid>
      </Grid>
    </div>
  );
}
