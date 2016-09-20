import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {elementList : []};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      {
        elementList : this.state.elementList.concat(["element " + this.state.elementList.length])
      }
    );
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click me</button>
        <ul>
          {this.state.elementList.map(x => <li key={x}>{x}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
