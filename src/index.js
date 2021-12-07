import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './Search.js'

ReactDOM.render(
  <Auth0Provider
    domain="dev-8ptulv-q.us.auth0.com"
    clientId="rmNsOFt2r9W67KN6QuE090Pv3BRGVVuG"
    redirectUri={window.location.origin}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindTeammates" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);
