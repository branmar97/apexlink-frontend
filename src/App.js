import React, { useState } from 'react';
import './App.css';
import NavContainer from './containers/NavContainer';
import DropdownContainer from './containers/DropdownContainer';
import Home from './components/Home';
import LobbyContainer from './containers/LobbyContainer'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import LobbiesContainer from './containers/LobbiesContainer';
import withAuth from "./components/auth/withAuth";

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <Router>
        <div className='bg-wraith bg-center bg-cover bg-scroll p-2 pb-32'>
              <NavContainer toggle={toggle} />
              <DropdownContainer isOpen={isOpen} toggle={toggle} />
              <Route exact path="/" component={Home} />
              <Route exact path="/lobbies" component={withAuth(LobbiesContainer)} />
              <Route path="/lobbies/:id" component={withAuth(LobbyContainer)} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
        </div>
    </Router>
  );
}

export default App;
