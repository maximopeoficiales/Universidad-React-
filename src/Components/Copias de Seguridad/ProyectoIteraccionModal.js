import React from "react";
import ReactDom from "react-dom";

/* import IterandoArrays from "./Components/Iterando Listas/Arrays";
import IterandoObjects from "./Components/Iterando Listas/Objetos"; */
/* import IterandoPropiedesObjects from "./Components/Iterando Listas/PropiedadesObjetos";
import PropKeys from "./Components/Iterando Listas/PropKeys"; */
import ProyectoIteracion from "./Components/Iterando Listas/ProyectoIteraccion";
import EventoConMapeo from "./Components/Iterando Listas/EventoConMapeo";
const App = () => (
  /* prop are objects in components  */
  <div>
    {/* <IterandoArrays />
    <IterandoObjects /> */}
    {/* <IterandoPropiedesObjects />
    <PropKeys /> */}
    <ProyectoIteracion />
    {/* <EventoConMapeo /> */}
  </div>
);
ReactDom.render(<App />, document.getElementById("root"));
