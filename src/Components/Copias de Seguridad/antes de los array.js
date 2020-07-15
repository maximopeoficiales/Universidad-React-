import React from "react";
import ReactDom from "react-dom";
/* import Gato from "./Components/Gato/";
import Evento from "./Components/Eventos/Eventos";
import Change from "./Components/Eventos/Change";
import EventBug from "./Components/Eventos/EventBug"; */
/* import EventHijoaPadre from "./Components/Eventos/EventosHijoaPadre"; */
/* import OperadorTernario from "./Components/Extras/OperadorTernario";
import InyectonHTML from "./Components/Extras/InyectandoHtml";
import PropsChildren from "./Components/Extras/PropChildren";
import ExampleFragment from "./Components/Extras/Fragments";
import Portals from "./Components/Extras/Portals";
import PropTypes from "./Components/Extras/PropTypes"; */
import IterandoArrays from "./Components/Iterando Listas/Arrays";
const App = () => (
  /* prop are objects in components  */
  <div>
    {/* <Gato />
    <Evento />
  <Change /> */}
    {/* <EventHijoaPadre /> */}
    {/* <OperadorTernario />
    <InyectonHTML />
    <PropsChildren />
    <ExampleFragment />
    <Portals />
  <PropTypes /> */}
    <IterandoArrays />
  </div>
);
ReactDom.render(<App />, document.getElementById("root"));
