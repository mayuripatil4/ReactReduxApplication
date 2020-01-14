import React from 'react';
import './App.css';
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <h1>I am App Component</h1>
      <h1>Hello World {props.myFirstName}</h1>
      <button onClick={()=> {props.changeName("Savi")}}>Change Name</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFirstName: state.firstName,
    MYLastName: state.lastName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName : (name) => {
        dispatch({type:'CHANGE_NAME', payload: name})
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
