/* eslint-disable import/no-anonymous-default-export */
import './Logo.css';
import React from 'react';
import logo from '../../assets/images/fortaleza-plano-de-saude-logo-oficial.jpg';
import { Link } from 'react-router-dom';

export default props=>{
    return(
        <aside className='logo'>
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>
        </aside>
    );
}