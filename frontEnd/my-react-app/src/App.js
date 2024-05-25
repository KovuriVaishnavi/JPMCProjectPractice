import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import ShowRecipe from './components/showRecipe.js';
import Register from './components/registration.js';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/login' exact element={<Login/>}></Route>
            <Route path='/recipe/:id' element={<ShowRecipe/>}></Route>
            <Route path='/register' exact element={<Register/>}></Route>
          </Routes>
        </Router>





      </>
    )
  }
}

export default App;
