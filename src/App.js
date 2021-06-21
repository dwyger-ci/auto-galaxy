import logo from './logo.svg';
import './App.css';
import CarListPage from './pages/CarListPage';
import Header from './components/Header';
import cars from './assets/cars.json';
import Nav from './components/Nav';
import Footer from './components/Footer'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
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
