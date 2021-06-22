import './App.css';
import CarListPage from './pages/CarListPage';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const vehiclesApi="http://localhost:5000/api/vehicles"

import { createContext, useState } from 'react'

function App() {
  return (
      <Router>
        <div style={{padding: "2%"}}>
          <Header/>
          <Nav/>
          <Switch>
            <Route path="/" exact component={CarListPage}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
