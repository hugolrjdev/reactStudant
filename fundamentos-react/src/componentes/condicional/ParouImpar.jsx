/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props =>{
    const isPar = props.numero % 2 === 0; 
    return(
        <div>
            {isPar ? <span>Número é Par</span> : <span>Número é Impar</span>}
            {/* condição com operador ternaria */}
        </div>
    )
}