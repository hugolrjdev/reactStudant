import React from "react";
import FamiliaMenbro from './FamiliaMenbro';
export default function Familia(props) {
    return(
        <div>
            <FamiliaMenbro nome="Hugo" sobrenome={props.sobrenome} />
            <FamiliaMenbro nome="Valentina" {...props}/>
            <FamiliaMenbro nome="Hugo Neto" sobrenome={props.sobrenome}/>
            <FamiliaMenbro nome="Thuany" sobrenome="Lima" />
        </div>
    );
}