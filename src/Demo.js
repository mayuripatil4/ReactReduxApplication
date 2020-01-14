import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
import ChildDemo from './ChildFunctionalComp'

class Demo extends Component {

    render() {
        return (
        <div className="mainStyle">
            <h1>Hello World {this.props.name}.</h1>
            <p>Welcome to my channel.</p>
            <ChildDemo newname='Pradnya'/>
        </div>)
    }
}

export default Demo;