/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DiretaFilho from './DiretaFilho';


export default props =>{
    return(
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true}/>
            <DiretaFilho nome="Shirley" idade={23} nerd={false}/>
        </div>
    );
}