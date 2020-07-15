import React, { Component } from "react";

/* Componente Funcional Hijo */
/* recibe el ref como segundo parametro */
const FancyInput = React.forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
  </div>
));

/* Componente Padre */
class App extends Component {
  /* creo la referencia */
  entrada = React.createRef();
  /* la funcion al cargar el componente */
  componentDidMount() {
    /* llamo a un elemento hijo */
    console.log(this.entrada.current);
    this.entrada.current.style.background = "red";
    this.entrada.current.style.color = "white";
    this.entrada.current.value = "Ref desde el Padre";
  }

  render() {
    return (
      <div>
        {/* le envio el ref al hijo */}
        <FancyInput ref={this.entrada} />
      </div>
      /* En conclusion des un componente Padre, puedo usar  un elemento del componente hijo */
    );
  }
}

export default App;
