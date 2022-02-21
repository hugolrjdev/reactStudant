/* eslint-disable import/no-anonymous-default-export */
import './App.css';
import Input from './componentes/formulario/Input'
import IndiretaPai from './componentes/comunicacao/IndiretaPai';
import DiretaPai from './componentes/comunicacao/DiretaPai';
import ParouImpar from './componentes/condicional/ParouImpar';
import TabelaDeProdutos from './componentes/repeticao/TabelaDeProdutos';
import ListaAlunos from './componentes/repeticao/ListaAlunos';
import Aleatorio from "./componentes/basicos/Aleatorio";
import Primeiro from './componentes/basicos/Primeiro';
import ComParamentros from './componentes/basicos/ComParametros';
import Fragmento from './componentes/basicos/Fragmentos';
import Card from "./componentes/layout/Card";
import Familia from './componentes/basicos/Familia';
import FamiliaMenbro from './componentes/basicos/FamiliaMenbro';
import React from "react";
import UsuarioInfo from './componentes/condicional/UsuarioInfo';

const user = "Hugo Lélio";


export default props => 
        <div className='app'>
           <h1>Fundamentos React </h1>


            <div className="cards">

            <Card titulo="#11 Componente Controlado" color="#0e9aa7">
                <Input />
            </Card>

            <Card titulo="#10 Comunicação Direta" color="#4a4e4d">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 Comunicação Direta" color="#fe8a71">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Par ou Impar" color="#f6cd61">
                <ParouImpar numero="18"/>
                <UsuarioInfo usuario={{nome: 'Hugo Lélio'}} />
                
                {/* <UsuarioInfo usuario={{nome: 'Hugo Neto'}} />
                <UsuarioInfo usuario={{email: 'Hugo Neto'}} />
                <UsuarioInfo usuario={{}} /> */}
            </Card>

            <Card titulo="#07 - Desafio de Repetição" color="#3da4ab">
                <TabelaDeProdutos />
            </Card>

            <Card titulo="#06 - Repetição Lista de Alunos" color="#0e9aa7">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Familia Componente" color="#4a4e4d">
                <Familia sobrenome="Rodrigues">
                    <FamiliaMenbro nome="Hugo" />
                    <FamiliaMenbro nome="Valentina" />
                    <FamiliaMenbro nome="Hugo Neto" />
                    <FamiliaMenbro nome="Thuany"/>
                </Familia>
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
