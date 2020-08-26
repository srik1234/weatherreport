import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Modules/Home/Home'
// Import Components
import Container from './Components/container';


// Global Style
//

// Main page
const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};




export default App;

