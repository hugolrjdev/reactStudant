/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content';
import Home from '../views/exemples/Home';
import './App.css'

export default props=>{
    return(
        <div className='app'>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<Content />}></Route>
            </Routes>
        </div>
        
    );
}
