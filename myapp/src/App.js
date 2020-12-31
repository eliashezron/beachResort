import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path = '/' component = {Home} exact />
        <Route path = '/rooms' component = {Rooms} exact />
        <Route path = '/rooms/:slug' component = {SingleRoom} exact/>
        <Route component = {Error} exact/>
      </Switch>
    </Router>
  );
}

export default App;
