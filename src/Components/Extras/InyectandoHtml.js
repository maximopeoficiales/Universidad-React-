import React, { Component } from "react";
/* nota es importante saber cuando inyectar el html porque
generario problemas de seguridad */
class App extends Component {
  state = {
    marcado: `
      <h1>Inyectando HTML con React</h1>
      <br/>
      <hr/>
      <a href="#">Algun Link</a>
    `,
  };

  render() {
    return (
      <div>
        {/* este metodo es que usamos para inyectar html en react */}
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.marcado,
          }}
        ></div>
      </div>
    );
  }
}

export default App;
