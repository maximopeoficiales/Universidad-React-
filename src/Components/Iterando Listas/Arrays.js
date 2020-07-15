import React from "react";
const frutas = ["manzana", "platano", "mandarina", "uva"];

const App = () => (
  <div>
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  </div>
);
export default App;
