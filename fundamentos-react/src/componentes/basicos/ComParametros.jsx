import React from "react";
export default function ComParamentros(props) {
    console.log(props)
    const status = (props.nota >= 7) ? 'Aprovado!' : 'Reprovado!';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>
                    {props.aluno}
                </strong>
                &nbsp; tem nota &nbsp; 
                <strong>
                     {props.nota}
                </strong>

                <strong> &nbsp; {status}</strong>
            </p>
        </div>
    );
}