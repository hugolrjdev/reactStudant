import React from "react";
import Primeiro from './Primeiro';
import ComParamentros from './ComParametros';
import Fragmento from './Fragmentos';

const user = "Hugo Lélio";
const deuRock = <div><h1>D3uR0cK {user}</h1></div>;

export default (props) => 
        <div id="app">

        <h1>Fundamentos React</h1>
        <Fragmento />
        {deuRock}
        
        <ComParamentros 
            titulo="Situação do Aluno"
            aluno={user}
            nota={9.9}
        />
        <Primeiro></Primeiro>
    </div>
