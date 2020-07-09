import React from "react";
import ReactDom from "react-dom";
import TarjetaFruta from "./Components/TarjetaFruta/";
import Contador from "./Components/Contador/";
const App = () => (
  /* prop are objects in components  */
  <div>
    <TarjetaFruta
      name={"Melon"}
      description={"Is a fruit very tasty"}
      price={2.0}
    />
    <TarjetaFruta
      name={"Apple"}
      description={"Is a fruit very tasty"}
      price={1.0}
    />
    <TarjetaFruta
      name={"Banana"}
      description={"Is a fruit very tasty"}
      price={3.5}
    />
    <Contador />
  </div>
);
ReactDom.render(<App />, document.getElementById("root"));
