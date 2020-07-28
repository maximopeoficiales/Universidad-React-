import React, { Component } from "react";
/* importando boostrap */
import "bootstrap/dist/css/bootstrap.min.css";

const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
);

class App extends Component {
  state = {
    techs: ["Vue"],
  };

  handleChange = (event) => {
    /* selectedOptions es una coleccion html  */
    const techs = Array.from(
      event.target.selectedOptions /* convertimos a array */,
      (option) => option.value /* mapeo estos valores */
    );

    this.setState({ techs });
  };

  render() {
    return (
      <div>
        <h1>
          Etiqueta Select <Unicorn />
        </h1>
        <form>
          <select
            className="form-control "
            title="Elija su tecnogia"
            value={this.state.techs}
            onChange={this.handleChange}
            multiple /* activa el select multiple */
          >
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Vanilla">Vanilla</option>
          </select>
        </form>

        <ul>
          {/* recorro los tecnologias del state */}
          {this.state.techs.map((tech) => (
            <li key={tech}>{tech}</li> /* poner key */
          ))}
        </ul>

        <select className="form-control">
          <optgroup label="Picnic">
            <option>Mustard</option>
            <option>Ketchup</option>
            <option>Relish</option>
          </optgroup>
          <optgroup label="Camping">
            <option>Tent</option>
            <option>Flashlight</option>
            <option>Toilet Paper</option>
          </optgroup>
        </select>
      </div>
    );
  }
}

export default App;
