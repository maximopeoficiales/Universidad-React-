import React, { Component } from "react";

class Boton extends Component {
  /* iniciamos el state */
  state = {
    dispararError: false,
  };
  /* capturar de evento */
  dispatchError = () => {
    this.setState({ dispararError: true });
  };

  render() {
    /* si es true */
    if (this.state.dispararError) {
      /* muestro un error */
      throw new Error("Lo siento he fallado 🔥🔥🔥");
    }
    /* al hacer click ejecutara un error */
    return <button onClick={this.dispatchError}>Boton con Bugg</button>;
  }
}

class LimiteErrores extends Component {
  /* inicio state */
  state = {
    tieneError: false,
  };

  /* esta funcion se ejecuta cuando encuentra un error en la App */
  componentDidCatch(error, errorInfo) {
    this.setState({
      tieneError: true,
      error,
      errorInfo,
    });
  }

  render() {
    /* si existe un error */
    if (this.state.tieneError) {
      return (
        <div>
          Wops! Algo ha salido mal puedes recargar o contactar con el equipo de
          soporte ♥~
          <div style={{ color: "orangered" }}>
            <p>{this.state.error && this.state.error.toString()}</p>
            <p>
              {this.state.error &&
                this.state.errorInfo.componentStack.toString()}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children; /* aqui se emprimen los hijos del componente */
  }
}

class App extends Component {
  render() {
    return (
      /* Con esto logramos componente que maneja los errores de la App */
      <div>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
      </div>
    );
  }
}
export default App;
