import React, { Component } from "react";

const Title = (props) => {
  console.log(props.children);

  const styles = {
    background: props.uiColor,
    padding: "0.3em",
    color: "#FFF",
    borderRadius: "0.3em",
    textAlign: "center",
    fontSize: "50px",
  };
  /* imprimo los hijos del component */
  return <h1 style={styles}>{props.children}</h1>;
};

class App extends Component {
  state = {
    uiColor: "purple",
  };

  render() {
    /* al enviarle hijos puedo imprimir con props.children */
    return (
      <div>
        <Title uiColor={this.state.uiColor}>
          Super <em>Ninja</em>
          <p>Lorem ipsum dolor sit.</p>
        </Title>
      </div>
    );
  }
}

export default App;
