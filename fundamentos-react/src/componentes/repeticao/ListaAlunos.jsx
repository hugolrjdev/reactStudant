/* eslint-disable import/no-anonymous-default-export */
import './ListaAlunos.css';
import alunos from '../../data/alunos';
import React from "react";

export default props =>{
    console.log(alunos)



    const listAlunos = alunos.map((aluno)=>{
        return (
            <li key={aluno.id}>
                {aluno.id}) - {aluno.nome} -> {aluno.nota}
            </li>
        );
    })

    return(
        <div>
            <ul>
                {listAlunos}
            </ul>
        </div>
    );
    
}

