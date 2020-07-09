import React, { Component } from "react";
/* fragments en su ultima sintaxis no es necesario ponerle su nombre */
/* nota con esta sintaxis no se le puede pasar variables */
const Computacion = () => (
  <>
    <li>Monitor</li>
    <li>Mouse</li>
    <li>Teclado</li>
  </>
);

const Ropa = () => (
  <>
    <li>Playera</li>
    <li>Jeans</li>
    <li>Shorts</li>
  </>
);

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <Computacion />
          <Ropa />
        </ul>
      </div>
    );
  }
}

export default App;
