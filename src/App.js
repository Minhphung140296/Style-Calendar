import React from 'react';
import './App.css';
import { Calendar } from './Calendar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
function App() {
  return (
    <Router>
      <Security issuer='https://{YourOktaDomain}/oauth2/default'
                clientId='{ClientId}'
                redirectUri={window.location.origin + '/callback'}
                pkce={true}
                >
                  <SecureRoute path='/' exact={true} conponent={Calendar} />
                  <Route path='/callback' component={LoginCallback} />
      </Security>
    </Router>
  );
}

export default App;
