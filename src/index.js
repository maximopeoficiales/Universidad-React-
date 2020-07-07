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
      count: this.state.count + 1,
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
    const hasItems = this.state.count > 0;
    const styles={
      border: "1px solid black",
      marginBottom: "1em",
      borderRadius: "0.5em",
      padding:"1em",
      background: hasItems ? "linear-gradient(45deg,black,#4a02f7)": "#FFF", 
      color:hasItems?"#FFF": "#000",
      transition: "all 400ms ease-out"
    }
    return (
      <section style={styles}>
        Hello bro , i am a fruit : {this.props.name}
        <p>{this.props.description}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.add}> + </button>
        <button onClick={this.delete}> - </button>
        <button onClick={this.clean}> Clean </button>
        <p>Price: $ {this.props.price}</p>
        <p>Total: $ {this.props.price * this.state.count}</p>
      </section>
    );
  }
}
const App = () => (
  /* prop are objects in components  */
  <div>
    <Component2
      name={"Melon"}
      description={"Is a fruit very tasty"}
      price={2.0}
    />
    <Component2
      name={"Apple"}
      description={"Is a fruit very tasty"}
      price={1.0}
    />
    <Component2
      name={"Banana"}
      description={"Is a fruit very tasty"}
      price={3.5}
    />
  </div>
);
ReactDom.render(<App />, document.getElementById("root"));
