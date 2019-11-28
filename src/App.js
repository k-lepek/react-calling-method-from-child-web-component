import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestTextComponent from './TestTextComponent'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.webComponent = React.createRef();


  }

  runFunctionInWebComponent () {
    console.log('Testing method in parent component - react', this.webComponent)
    this.webComponent.current.testChangeTextMethod();
  } 
    render(){
  return (
    <div className="App">
      <header className="App-hesader">
        <img src={logo} className="App-logo" alt="logo" />
        <test-text-component ref={this.webComponent}/>
        <button onClick={() =>this.runFunctionInWebComponent()}>Web Component Action</button>
    
      </header>
    </div>
  );
    }
}
