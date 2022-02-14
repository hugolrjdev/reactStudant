import React, {cloneElement} from "react";

export default function Familia(props) {
    return(
        <div id="familia">
            {props.children.map((child, index)=>{
                    return cloneElement(child, {...props, key: index})
                })}
        </div>
    );
}