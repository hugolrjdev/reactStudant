import * as React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside id="menu">
        <h2>Menu React Router</h2>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </aside>
  );
}

export default Menu;