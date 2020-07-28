import React from "react";
import ReactDom from "react-dom";
import IntroduccionRefs from "./Components/Refs/refs";
import ChartJS from "./Components/Refs/ExampleCharts";
import ForwardRef from "./Components/Refs/RefPadreHijo";
const App = () => (
  <div>
    <IntroduccionRefs />
    <br/>
    <ChartJS />
    <ForwardRef />
  </div>
);
ReactDom.render(<App />, document.getElementById("root"));
