import React, { Component } from "react";

class Entrada extends Component {
  /* creo la referencia */
  entrada = React.createRef();

  /* este evento se carga cuando crea el componente */
  componentDidMount() {
    this.focus();
  }

  focus = () => {
    /* current es el elemento por si */
    this.entrada.current.focus();
  };

  blur = () => {
    this.entrada.current.blur();
    this.entrada.current.value = "123";
    console.log(this.entrada);
  };

  render() {
    return (
      <div>
        <h1>React refs 🦄</h1>
        <input
          type="text"
          ref={this.entrada} /* es como darle un id a un elemento */
        />
        <button onClick={this.focus}>Focus</button>
        <button onClick={this.blur}>Blur</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Entrada />
      </div>
    );
  }
}

export default App;
