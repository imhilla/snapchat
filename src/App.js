import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app__body">
          <Switch>
            <Route path="/preview">
              <Preview />
            </Route>
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
