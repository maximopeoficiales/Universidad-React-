import React, { Component } from "react";

class PersistenciaEventos extends Component {
  state = {
    color: "blue",
  };

  handlerChange = (event) => {
    /* solucion a perdida del evento */
    const color = event.target.value;

    this.setState((state) => ({
      color,
    }));
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerChange} />
        {/* se pondra del color que escribas */}
        <h1
          style={{
            color: this.state.color,
          }}
        >
          {this.state.color}
        </h1>
      </div>
    );
  }
}

const App = () => (
  <div>
    <PersistenciaEventos />
  </div>
);

export default App;
