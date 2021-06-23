import './App.css';
import CarListPage from './pages/CarListPage';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { VehiclesProvider } from './contexts/VehiclesContext';
import CarPage from './pages/CarPage';

function App() {  
  
  return (
    <Router>
      <div style={{padding: "2%"}}>
        <Header/>
        <Nav/>
        <Switch>
          <VehiclesProvider>
            <Route path="/" exact component={CarListPage}/>
            <Route path="/:id" children={<CarPage />}/>
          </VehiclesProvider>
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
