import React, { Component } from "react";

const style = {
  height: "200px",
  background: "gold",
  padding: "1em",
  boxSizing: "border-box",
};

class App extends Component {
  state = {
    x: 0,
    y: 0,
  };
  manejador = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  render() {
       /* cuando se mueva el mouse sobre el div  */
    return (
      <div onMouseMove={this.manejador} style={style}>
        <div>x {this.state.x}</div>
        <div>y {this.state.y}</div>
      </div>
    );
  }
}

export default App;
