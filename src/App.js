import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Modules/Home/Home';

// Main page
const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
};




export default App;

