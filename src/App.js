import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import WebcamCapture from './WebcamCapture';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app__body">
          <Switch>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
