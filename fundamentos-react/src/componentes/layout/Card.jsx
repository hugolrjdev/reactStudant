import './Card.css';
import React from 'react';

export default function Card(props) {
    const cardStyleColor = {
        backgroundColor: props.color || '#f00',
        borderColor:  props.color || '#f00',
    }
    
    return(
        <div>
            <div className='card' style={cardStyleColor}>
                <div className='title'>{props.titulo}</div>
                <div className='content'>{props.children}</div>
            </div>
        </div>
    );
};