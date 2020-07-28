import React, { Component } from "react";

const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
);

class InputControlado extends Component {
  /* inicio el state */
  state = {
    text: "",
    color: "#E8E8E8",
  };

  actualizar = (event) => {
    /* convierto a mayuscula todo lo que escribe */
    const text = event.target.value.toUpperCase();
    let color = "green";
    /* quitamos los espacios ,y  si esta vacio */
    if (text.trim() === "") {
      color = "#E8E8E8";
    }
    /* si no esta vacio  y hay 4 digitos  */
    if (text.trim() !== "" && text.length < 5) {
      color = "red";
    }
    /* actualizo el state */
    this.setState({ text, color });
  };

  render() {
    /* es mejor poner los estilos en un variable */
    const styles = {
      border: `2px solid ${this.state.color}`,
      padding: "0.3em 0.6em",
      outline: "none",
    };
    return (
      <input
        type="text"
        value={this.state.text} //obtiene su valor del estado
        onChange={this.actualizar}
        style={styles}
      />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Input Controlado <Unicorn />
        </h1>
        <InputControlado />
      </div>
    );
  }
}

export default App; //exportamos App
