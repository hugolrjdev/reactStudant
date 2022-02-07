import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';

const user = "Hugo Lélio";
const deuRock = <div><h1>D3uR0cK {user}</h1></div>;

ReactDOM.render(
    deuRock,
    document.getElementById('root')
  );