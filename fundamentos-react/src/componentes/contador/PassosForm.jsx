/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props =>{
    return(
        <div>
            <label htmlFor="valueEntery">
                Passo: 
                &nbsp;
                <input 
                    type="text"
                    id="valueEntery"
                    onChange={props.pegaValor}
                    placeholder={props.setPasso}
                />
                &nbsp;
            </label>
        </div>
    );
}