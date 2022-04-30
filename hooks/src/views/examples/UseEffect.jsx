import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    function calcFatorial(num) {
        const n = parseInt(num)
        if(n < 0 ){return -1}
        if(n === 0){ return 1}
        return calcFatorial (n - 1) * n;
    }

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    function evenOrOdd(num) {
        if(num % 2) { return true }
    }

    const [numb, setNumb] = useState(1)
    const [oddOrEven, setOddOrEven] = useState(false);

    useEffect(()=>{
        setOddOrEven(evenOrOdd(number));
    },[number])

    useEffect(()=>{
        setFatorial(calcFatorial(number))
    },[number])

    useEffect(()=>{
        if(fatorial > 1000000){
            document.title = "Eita!!! vai quebrar a aplicação"
        }
    },[fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio 01"/>

            <div className="center">
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} /> 
            </div>
            <SectionTitle title="Exercicio 02"/>
            <div className="center">
                <span className="text">Esse Número é</span>
                <span className="text red">{(oddOrEven === true ) ? 'Ímpar' : 'Par'}</span>
            </div>
        </div>
    )
}

export default UseEffect
