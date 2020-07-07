import React from "react";
import ReactDom from "react-dom";
/* importing a component note: var uppercase*/
/* this point to the father */
class Component2 extends React.Component {
  state = {
    count: 0,
  };

  add = () =>
    this.setState({
      count: this.state.count + 1,w
    });
  delete = () =>
    this.setState({
      count: this.state.count - 1,
    });
  clean = () =>
    this.setState({
      count: 0,
    });
  render() {
    return (
      <section>
        Hello bro , i am a fruit : {this.props.name}
        <p>{this.props.description}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.add}> + </button>
        <button onClick={this.delete}> - </button>
        <button onClick={this.clean}> Clean </button>
      </section>
    );
  }
}
const App = () => (
  /* prop are objects in components  */
  <Component2 name={"Sandia"} description={"Is a fruit very tasty"} />
);
ReactDom.render(<App />, document.getElementById("root"));
