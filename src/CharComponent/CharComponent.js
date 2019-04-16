import React from 'react';
import './style.css';

const char = (props) => {
    return (
    <div className = 'char'>
    <p onClick = {props.click}> {props.name}</p>
    </div>);
}

export default char;