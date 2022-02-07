import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Primeiro from './componentes/basicos/Primeiro';

const user = "Hugo Lélio";
const deuRock = <div><h1>D3uR0cK {user}</h1></div>;

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <Primeiro></Primeiro>
        <Primeiro></Primeiro>
        {deuRock}
    </div>,
    document.getElementById('root')
  );