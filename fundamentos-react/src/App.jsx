import './App.css';
import Aleatorio from "./componentes/basicos/Aleatorio";
import React from "react";
import Primeiro from './componentes/basicos/Primeiro';
import ComParamentros from './componentes/basicos/ComParametros';
import Fragmento from './componentes/basicos/Fragmentos';
import Card from "./componentes/layout/Card";


const user = "Hugo Lélio";
const deuRock = <div><h1>D3uR0cK {user}</h1></div>;

export default props => 
        <div className='app'>
           <h1>Fundamentos React</h1>
            <div className="cards">
            <Card titulo="#04 - Aleatorios"> 
                <Aleatorio min={1} max={10} />
            </Card>
                
            <Card titulo="#03 - Fragmentos">
                <Fragmento />
            </Card>
        
            <Card titulo="#02 - Com parametros">
                <ComParamentros 
                    titulo="Situação do Aluno"
                    aluno={user}
                    nota={9.9}
                />
            </Card>
        
            <Card titulo="#01 Primeiro Exercicio">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
