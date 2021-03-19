import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Lobby from './components/Lobby'
import LobbiesContainer from './containers/LobbiesContainer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='bg-wraith bg-center bg-top bg-cover bg-no-repeat bg-fixed'>
        <div className='bg-red-900 bg-opacity-50'>
          <div className='bg-black bg-opacity-50'>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path="/lobbies" component={LobbiesContainer} />
            <Route path="/lobbies/:id" component={Lobby} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
