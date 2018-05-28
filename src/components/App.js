import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
//import 'bootstrap/dist/css/bootstrap-theme.min.css';

import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import logo from '../assets/logo.svg';
import '../assets/App.css';

import Tienda from '../components/shopping-cart/tienda/tienda';
//import { Button } from 'reactstrap';




class App extends Component {





  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        
         !!!...... Bienvenido a mi shopping cart de react redux......!!!
        <Tienda />


 </div>

        



/*
provincial
cedula: 20433217
pass: sulba.92

especial: mama1992

*/


      
    );
  }
}




export default App;
