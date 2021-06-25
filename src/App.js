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
import CartPage from './pages/CartPage';

function App() {  
  
  return (
    <VehiclesProvider>
      <Router>
        <div style={{padding: "2%", height: "100vh", overflow: "hidden"}}>
          <Header/>
          <Nav/>
          <Switch>
            
              <Route path="/" exact component={CarListPage}/>
              <Route path="/cart" exact component={CartPage}/>
              <Route path="/:id" children={<CarPage />}/>
            
          </Switch>
          <Footer/>
        </div>
      </Router>
    </VehiclesProvider>
  );
}

export default App;
