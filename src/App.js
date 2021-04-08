import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Dropdown from './components/Dropdown';
import Home from './components/Home';
import About from './components/About';
import Lobby from './components/Lobby'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import LobbiesContainer from './containers/LobbiesContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <Router>
        <div className='bg-wraith bg-center bg-top bg-cover bg-no-repeat bg-fixed pb-72'>
              <Nav toggle={toggle} />
              <Dropdown isOpen={isOpen} toggle={toggle} />
              <Route exact path="/" component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path="/lobbies" component={LobbiesContainer} />
              <Route path="/lobbies/:id" component={Lobby} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
        </div>
    </Router>
  );
}

export default App;
