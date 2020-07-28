import React, { Component } from "react";

class App extends Component {
  state = {
    activate: true,
  };

  handleChange = (event) => {
    this.setState({
      activate: event.target.checked,
    });
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.activate}
          onChange={this.handleChange}
        />

        {this.state.activate && (
          <h1>
            Estoy Activado
            <span role="img" aria-label="chevere">
              😎
            </span>
          </h1>
        )}
      </div>
    );
  }
}

export default App;
