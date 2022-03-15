/* eslint-disable import/no-anonymous-default-export */
import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';


export default props=>{
    return(
        <aside className="menu-area">
            <nav className="menu">
                {/* Refatorar menu criao NavItem */}
                <Link to="/">
                    <i className="fa fa-home"></i> Ínicio
                </Link>
                <Link to="/users">
                    <i className="fa fa-home"></i> Usuários
                </Link>
            </nav>
        </aside>
    );
}