import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SessionTitle from '../../components/layout/SectionTitle'


const UseRef = (props) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const merge = (s1, s2) => {
        return [...s1].map((el, index)=>{
            return `${s1}${s2[index] || ''}`
        }).join('')
    }

    const count = useRef(0);
    const myInput1 = useRef();
    const myInput2 = useRef();
    // useEffect(()=>{
    //     count.current++
    // },[value1, value2]) // pode se usar mais de uma dependencia


    useEffect(()=>{
        count.current++
        myInput2.current.focus()

    },[value1])

    useEffect(()=>{
        count.current++
        myInput1.current.focus()

    },[value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SessionTitle title="Exercício #01"/>
            <div className="center">
               <div>
                   <span className="text">Valor: </span>
                   <span className="text">{value1}[</span>
                   <span className="text red">{count.current}</span>
                   <span className="text">] {merge(value1, value2)}</span>
               </div>
                <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} ref={myInput1}/>
            </div>
            <SessionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)} ref={myInput2}/> 
            </div>
        </div>
    )
}

export default UseRef
