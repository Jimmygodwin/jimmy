import logo from './logo.svg';
import React from 'react';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Router,Link} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home">Home</Link><br/>
        <Link to="/about">About</Link>
        <Routes>
        <Route path="/home"> <Home /></Route>
        <Route path="/about"><About /></Route>
        </Routes>
      </Router>
      
      
      
      

    </div>
  );
}




function Home(){

  return (
    <div>
      <h1> This is the homepage</h1>
      <p>THisis shjsdsdsdsdsdsds</p>
    </div>
  )
}


function About(){

  return (
    <div>
      <h1>This is my About page </h1>
      <p>Hellow hefefego</p>
    </div>
  )
}

export default App;
