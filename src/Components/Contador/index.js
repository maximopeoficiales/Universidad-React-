import React, { Component } from "react";
class Contador extends Component {
  state = {
    video: {
      title: "The MOVIE",
      count: 0,
    },
  };

  add = () =>
    /* define el state,  */
    this.setState((state) => ({
      video: {
        ...state.video /* obtiene y guarda las propiedades que existian */,
        count: state.video.count + 1,
      },
    }));

  render() {
    const { video } = this.state;

    return (
      <div>
        <h1>{video.title}</h1>
        <button onClick={this.add}>Click {video.count}</button>
      </div>
    );
  }
}
export default Contador;
