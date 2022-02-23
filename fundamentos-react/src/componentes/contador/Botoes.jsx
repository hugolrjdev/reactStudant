/* eslint-disable import/no-anonymous-default-export */

import React from "react";

export default props =>{
    return(
        <div>
            <button onClick={props.decrementar}>-</button>&nbsp;
            <button onClick={props.incrementar}>+</button>
        </div>
    )
}