import React from "react";

export default function FamiliaMenbro(props) {
    return(
        <div>
            {props.nome} <strong> {props.sobrenome} </strong>
        </div>
    );
}