import React from "react";
import ReactDom from "react-dom";
/* import InputsNoControlados from "./Components/Formularios/InputsNoControladosRefs";
import InputsNoControladosForm from "./Components/Formularios/InputsNoControladosForms.js";
import InputsControlados from "./Components/Formularios/InputControlado"; */
/* import InputControladoReutilizable from "./Components/Formularios/InputControladoReutilizable"; */
/* import Select from "./Components/Formularios/Selects"; */
/* import SelectMultiple from "./Components/Formularios/SelectMultiple";
import Checkbox from "./Components/Formularios/Checkboxs"; */
import ManejadorError from "./Components/Debugging/ComponentDidCatch";
const App = () => (
  <div>
    {/* <InputsNoControlados /> */}
    {/*  <InputsNoControladosForm /> */}
    {/* <InputsControlados /> */}
    {/*  <InputControladoReutilizable /> */}
    {/*     <Select /> */}
    {/*  <SelectMultiple />
    <Checkbox /> */}
    <ManejadorError />
  </div>
);
ReactDom.render(<App />, document.getElementById("root"));
