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
import AuthProvider from './context/authentication.js';
import RecipeForm from './components/RecipeForm.js';
import Userdashboard from './components/admindashboard.js';
import SearchResults from './components/searchComponent.js';
import AdminProtect from './protectedComponents/protectDashboard.js';
import Admindashboard from './components/admindashboard.js';
import UserProtect from './protectedComponents/userProtect.js';
import AppNavbar from './protectedComponents/navbarprotect.js';
class App extends React.Component {

  render() {
    return (
      <>
    
      <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/login' exact element={<Login />}></Route>
          <Route path='/recipe/:id' element={<ShowRecipe />}></Route>
          <Route path='/register' exact element={<Register />}></Route>
          
          <Route element={<AdminProtect/>}> 
          <Route path='/admindashboard' exact element={<Admindashboard/>}></Route>

          <Route path='/addrecipe' exact element={<RecipeForm/>}></Route>
          </Route >
          <Route element={<UserProtect/>}> 
          <Route path='/userdashboard' exact element={<Userdashboard/>}></Route>
          </Route >
          
          <Route path='/search/:name' exact element={<SearchResults/>}> </Route>
           
        </Routes>
         </AuthProvider>
      </Router>
   





      </>
    )
  }
}

export default App;
