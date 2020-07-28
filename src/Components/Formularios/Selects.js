import React, { Component } from "react";
/* importando boostrap */
import "bootstrap/dist/css/bootstrap.min.css";
const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
);
class App extends Component {
  /* funcion que se enviara como prop */
  state = {
    tech: "Vue",
  };
  cambiar = (e) => {
    this.setState({
      tech: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>
          Selects <Unicorn />
        </h1>
        <div className="form-group">
          <label htmlFor="">Seleccione su Tecnologia</label>
          <select
            className="form-control"
            value={this.state.tech} // el valor sera el valor por defecto que se seleccionara
            onChange={this.cambiar}
          >
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
            <option value="React">React</option>
          </select>
          <p>
            Seleccionaste : <b>{this.state.tech}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
