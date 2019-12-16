import React, { Component } from "react";
import Lottery from './Lottery';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lottery />
        <Lottery title="Mini Lottery" numBalls={4} maxNum={10}/>
      </div>
    );
  }
}

export default App;
