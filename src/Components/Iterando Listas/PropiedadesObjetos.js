import React, { Component } from "react";
class App extends Component {
  state = {
    users: {
     id:1,
      nombre: "Maximo",
      Github: "maximopeoficiales",
      Facebook: "Maximo Junior Apaza Chirhuana",
    },
  };
  render() {
    const { users } = this.state;
    const keys = Object.keys(users);
   /*  console.log(keys); */ /* ["nombre", "Github", "Facebook"] */
    return (
      <div>
        <h3>Iterando Propiedades de Objectos</h3>
        <ul>
          {keys.map((key,index) => (
            <li key={index}>
              {key} : {users[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
