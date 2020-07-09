import React from "react"; /* importing */
/* import "./TarjetaFruta.css"; */
import style from "./TarjetaFruta.module.css";
/* importing a component note: var uppercase*/
/* this point to the father */
class TarjetaFruta extends React.Component {
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
    const clases1 = `${style["card-fruta"]} ${
      hasItems ? style["card-fruta-active"] : ""
    }`;
    return (
      <section className={clases1}>
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
export default TarjetaFruta;
