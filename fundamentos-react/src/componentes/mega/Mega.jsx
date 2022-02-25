/* eslint-disable no-const-assign */
/* eslint-disable no-unreachable */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";

export default props =>{

    function gerarNumerosDaSorte (quantNumeros) {
        const numeros = Array(quantNumeros).fill(0).reduce((nums)=>{
            const novoNumero = gerarNumeroNaoContido(1, 60, nums);
            console.log([ ...nums, novoNumero ])
            return [ ...nums, novoNumero ].sort((n1, n2) => n1 - n2);
        }, []) // é o valor preenchedor do array
        return numeros;
    }

    function gerarNumeroNaoContido (min, max, array){
        const aleatorio = Math.floor(Math.random() * 60 + 1);
        return array.includes(aleatorio)? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    // console.log(gerarNumeroNaoContido(1,5, [0,0,0,0,0,0]));

    
    const numerosIniciais =  [numeros, setNumeros] = useState(Array(props.quantidade).fill(0));
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div>
            <h2>M3G@</h2>
            <h3>{numeros}</h3>
        </div>
    );


    

}