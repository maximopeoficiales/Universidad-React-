import React, { Component } from "react";
import propTypes from "prop-types";
/* evitamos errores con defaultprops */
const prop = () => {};
class Profile extends Component {
  /* estas propTypes son validaciones  */
  static propTypes = {
    name: propTypes.string.isRequired,
    bio: propTypes.string,
    email: propTypes.string,
    age: propTypes.number,
  };
  static defaultProps = {
    name: "Maximo Junior",
    onHello: prop,
  };

  saluda = () => {
    /* si no existe onhello no saldra error */
    this.props.onHello();
  };
  render() {
    const { name, bio, email } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>{bio}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <button onClick={this.saluda}>Saluda</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        {/* si la paso un tipo de dato que no corresponde sale error */}
        <Profile
          /* si no envio el nombre no importa porque ya tengo uno por default */
          bio="Soy un desarrollador Fullstackmy-email@mail.com"
          email="my-email@mail.com"
        />
      </div>
    );
  }
}

export default App;
