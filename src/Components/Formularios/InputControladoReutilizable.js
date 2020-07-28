import React, { Component } from "react";
/* import "../css/bootstrap.min.css"; */
/* INSTALAMOS BOOSTRAP COMPLETAMENTE */
import "bootstrap/dist/css/bootstrap.min.css";
/* import $ from "jquery/dist/jquery.slim"; */
/* import Popper from "popper.js";  si necesario*/
/* import "bootstrap/dist/js/bootstrap.min.js"; */
import "bootstrap/dist/js/bootstrap.bundle.min"; /* Tiene el popper pero no el jquery */
const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
);

class InputControlado extends Component {
  /* inicio del state */
  state = {
    text: "",
    color: "#E8E8E8",
  };

  actualizar = (event) => {
    const text = event.target.value;
    let color = "green";

    if (text.trim() === "") {
      color = "#E8E8E8";
    }

    if (text.trim() !== "" && text.length < 5) {
      color = "red";
    }
    /* se pasa los valores al state */
    this.setState({ text, color });

    // Propagando datos al padre
    this.props.onChange(this.props.name, text);
  };

  render() {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: "0.3em 0.6em",
      outline: "none",
    };
    return (
      <div className="">
        <label className="text-capitalize" htmlFor={this.props.name}>
          {this.props.name}
        </label>
        <input
          type="text"
          value={this.state.text}
          onChange={this.actualizar}
          style={styles}
          placeholder={this.props.placeholder}
          className="form-control"
          id={this.props.name}
        />
      </div>
    );
  }
}

class App extends Component {
  state = {
    name: "",
    email: "",
  };
  /* funcion actualizar , se le pasa el name y ese el que se actualiza */
  actualizar = (name, text) => {
    /* actualiza la propiedad y el text del state */
    this.setState({
      [name]: text,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">
          Input Controlado <Unicorn />
        </h1>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="form-group">
              {/* le esta pasando props */}
              <InputControlado
                onChange={this.actualizar} //ejecuta la funcion actualizar
                placeholder="Nombre Completo"
                name="name"
              />
              <InputControlado
                onChange={this.actualizar}
                placeholder="Tu Email"
                name="email"
              />
            </div>
            <p>
              <b>Nombre:</b> {this.state.name}
            </p>
            <p>
              <b>Email:</b> {this.state.email}
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default App;
