/* eslint-disable import/no-anonymous-default-export */
import 'bootstrap/dist/css/bootstrap.min.css'; //importação do package.json
import 'font-awesome/css/font-awesome.min.css';//importação do package.json
import './App.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'; //importando rotas

import Logo from '../components/templates/Logo';
import Nav from '../components/templates/Nav';
import Footer from '../components/templates/Footer';
import Home from '../components/home/Home';


export default props=>{
  return(
    
      <BrowserRouter>
          <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
          </div>
      </BrowserRouter>
   
  );
}
