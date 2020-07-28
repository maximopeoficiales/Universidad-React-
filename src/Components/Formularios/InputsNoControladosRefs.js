import React, { Component } from "react";
/* compenente de unicornio */
const Unicorn = () => (
  <span role="img" aria-label="unicornio">
    🦄
  </span>
);

class InpuntNoContolado extends Component {
  /* creo las referencias */
  nombre = React.createRef();
  email = React.createRef();

  /* funcion al hacer click */
  handleClick = () => {
    const nombre = this.nombre.current.value;
    const email = this.email.current.value;

    // Manejo de datos enviando a la funcion
    /* no se pone nombre : nombre porque ya no es necesario */
    this.props.onSend({ nombre, email });
  };

  render() {
    return (
      <div>
        <p>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            ref={this.nombre}
            placeholder="Nombre"
            id="nombre"
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input type="text" ref={this.email} placeholder="Email" id="email" />
        </p>
        {/* enlazo la funcion a interactuar */}
        <button onClick={this.handleClick}>Enviar</button>
      </div>
    );
  }
}

class App extends Component {
  /* funcion que se enviara como prop */
  send = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>
          Inputs No controlados Refs <Unicorn />
        </h1>
        {/* le envio como un prop la funcion del padre  este sera invocado en el hijo*/}
        <InpuntNoContolado onSend={this.send} />
      </div>
    );
  }
}

export default App;
