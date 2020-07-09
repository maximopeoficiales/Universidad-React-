import React, { Component } from "react";
import "./css/global.css";
/* asi es como un hijo ejecuta un evento atravez de un prop */
class Hijo extends Component {
     /* cuando se ejecute cambiara el estado de la prop.name */
  manejadorClick = () => {
    this.props.onSaluda("Ninja en React 🔥");
  };

  render() {
    return (
      <div className="box blue">
        <h2>Hijo</h2>
        <button onClick={this.manejadorClick}>Saluda</button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    name: "",
  };

  manejador = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="box red">
           {/* muestro al hijo y este envia un evento perzonalizado */}
        <Hijo onSaluda={this.manejador} />
        <h1>Nombre: {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
