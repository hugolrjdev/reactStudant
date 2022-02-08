import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Primeiro from './componentes/basicos/Primeiro';
import ComParamentros from './componentes/basicos/ComParametros';
import Fragmento from './componentes/basicos/Fragmentos';

const user = "Hugo Lélio";
const deuRock = <div><h1>D3uR0cK {user}</h1></div>;

ReactDOM.render(
    <div>
        
        <Primeiro></Primeiro>
        <ComParamentros 
            titulo="Situação do Aluno"
            aluno={user}
            nota={9.9}
        />
        <Fragmento />
        {deuRock}
    </div>,
    document.getElementById('root')
  );