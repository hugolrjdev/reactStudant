import './Card.css';
import React from 'react';

export default function Card(props) {
    return(
        <div>
            <div className='card'>
                <div className='title'>{props.titulo}</div>
                <div className='content'>{props.children}</div>
            </div>
        </div>
    );
};