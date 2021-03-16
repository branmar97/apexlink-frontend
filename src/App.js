import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Lobby from './components/Lobby'
import LobbiesContainer from './containers/LobbiesContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/lobbies" component={LobbiesContainer} />
        <Route path="/lobbies/:id" component={Lobby} />
      </div>
    </Router>
  );
}

export default App;
