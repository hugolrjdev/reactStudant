/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";

export default props =>{

    const [valor, setValor] = useState('Inicial')

    function quandoDigitar (evt) {
        setValor(evt.target.value)
    }

    return(
        <>
        <h1>{valor}</h1>
        <div style={
            {
                display:'flex',
                flexDirection: 'column'
            }
        }>   
            <input type="text" value={valor} onChange={quandoDigitar} />
            <input type="text" value={valor} readOnly />
            <input type="text" value={undefined} />
        </div>
        </>
    );
}