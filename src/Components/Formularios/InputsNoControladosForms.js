import React, { Component } from "react";
/* en este ejemplo no es necesario los ref en los inputs */
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
  handleClick = (e) => {
    e.preventDefault();
    const nombre = e.target[0].value;
    const email = e.target[1].value;

    // Manejo de datos enviando a la funcion
    /* no se pone nombre : nombre porque ya no es necesario */
    this.props.onSend({ nombre, email });
  };

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <input type="text" ref={this.nombre} placeholder="Nombre" />
        <input type="text" ref={this.email} placeholder="Email" />
        {/* enlazo la funcion a interactuar */}
        <button>Enviar</button>
      </form>
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
        {/* le envio como un prop la funcion del padre que se usara en la funcion click del hijo*/}
        <InpuntNoContolado onSend={this.send} />
      </div>
    );
  }
}

export default App;
