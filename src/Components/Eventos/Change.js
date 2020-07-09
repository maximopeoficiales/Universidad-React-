import React, { Component } from "react";

class Eventos extends Component {
  state = {
    text: "",
    event: "",
  };
  manejador = (e) => {
    this.setState({
      text: e.target.value,
      event: e.type,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.manejador}
          onPaste={this.manejador}
          onCopy={this.manejador}
        />
        <p>{this.state.text}</p>
        <p>{this.state.event}</p>
      </div>
    );
  }
}
export default Eventos;
