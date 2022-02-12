import './App.css';
import Aleatorio from "./componentes/basicos/Aleatorio";
import React from "react";
import Primeiro from './componentes/basicos/Primeiro';
import ComParamentros from './componentes/basicos/ComParametros';
import Fragmento from './componentes/basicos/Fragmentos';
import Card from "./componentes/layout/Card";
import Familia from './componentes/basicos/Familia';


const user = "Hugo Lélio";
const deuRock = <div><h1>D3uR0cK {user}</h1></div>;

export default props => 
        <div className='app'>
           <h1>Fundamentos React</h1>


            <div className="cards">

            <Card titulo="#05 - Familia Componente" color="#4a4e4d">
                <Familia sobrenome="Lélio"></Familia>
            </Card>

            <Card titulo="#04 - Aleatorios" color="#fe8a71"> 
                <Aleatorio min={1} max={10} />
            </Card>
                
            <Card titulo="#03 - Fragmentos" color="#f6cd61">
                <Fragmento />
            </Card>
        
            <Card titulo="#02 - Com parametros" color="#3da4ab ">
                <ComParamentros 
                    titulo="Situação do Aluno"
                    aluno={user}
                    nota={9.9}
                />
            </Card>
        
            <Card titulo="#01 Primeiro Exercicio" color="#0e9aa7">
                <Primeiro></Primeiro>
            </Card>

            <Card titulo="proximo" color="#4a4e4d ">

            </Card>
        </div>
    </div>
