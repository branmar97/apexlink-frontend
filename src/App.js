import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Dropdown from './components/Dropdown';
import Home from './components/Home';
import Lobby from './components/Lobby'
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
        <div className='bg-wraith bg-center bg-cover bg-no-repeat bg-fixed pb-72'>
              <Nav toggle={toggle} />
              <Dropdown isOpen={isOpen} toggle={toggle} />
              <Route exact path="/" component={Home} />
              <Route exact path="/lobbies" component={withAuth(LobbiesContainer)} />
              <Route path="/lobbies/:id" component={withAuth(Lobby)} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
        </div>
    </Router>
  );
}

export default App;
