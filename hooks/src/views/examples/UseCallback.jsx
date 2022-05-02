import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallBackButtons from './UseCallBackButtons'

const UseCallback = (props) => {
    
    const [count, setCount] = useState(0)

    function inc(delta) {
        setCount(count + delta)
    }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallBackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
