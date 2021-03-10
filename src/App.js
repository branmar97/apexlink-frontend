import React from 'react';
import './App.css';
import LobbiesContainer from './containers/LobbiesContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/lobbies" component={LobbiesContainer} />
      </div>
    </Router>
  );
}

export default App;
