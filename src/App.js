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
import Chats from './Chats';
import Chatview from './Chatview';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Switch>
          <Route path="/chats/view">
              <Chatview />
            </Route>
            <Route path="/chats">
              <Chats />
            </Route>
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
