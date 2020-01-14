import React from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const ChildDemo = (props) => {
    return (
        <div className="childStyle">
            <h1>Hello World {props.newname}.</h1>
            <p>Welcome to my channel.</p>
        </div>)
}

export default ChildDemo;