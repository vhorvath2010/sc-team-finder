import { Grid } from '@mui/material';
import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <p>Welcome to the site!</p>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={3}>
          <ProfileCard></ProfileCard>
        </Grid>
        <Grid item xs={3}>
          <ProfileCard></ProfileCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
