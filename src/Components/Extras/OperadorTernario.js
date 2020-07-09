import React, { Component } from "react";
const Saludo = (props) => (
  /* si existe props.name muestralo */
  <div>
    {props.name && <strong>{props.name}</strong>}
    {/* operador ternario  */}

    {props.saludo ? (
      <h1>Hola tu eres genial 🤣</h1>
    ) : (
      <h1> No hay saludo para ti 🤔</h1>
    )}
  </div>
);
const App = () => (
  <div>
    <Saludo name={"Maximo Junior "} saludo />
  </div>
);

export default App;
