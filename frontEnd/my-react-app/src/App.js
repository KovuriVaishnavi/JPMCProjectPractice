import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' Exact element={<Home />}></Route>
            <Route path='/login' Exact element={<Login/>}></Route>
          </Routes>
        </Router>





      </>
    )
  }
}

export default App;
