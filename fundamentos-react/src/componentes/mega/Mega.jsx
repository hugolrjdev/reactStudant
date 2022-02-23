/* eslint-disable no-unused-vars */
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

console.log(gerarNumeroNaoContido(1,5, [0,0,0,0,0,0]));

gerarNumerosDaSorte(6)