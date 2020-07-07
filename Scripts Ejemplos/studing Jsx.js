import React from "react";
import ReactDom from "react-dom";
/* importing a component note: var uppercase*/
const Component2 = {
  Title: () => <h1> It is title</h1>,
  Paragraph: () => <p>Lorem, iste voluptatem facere ab!</p>,
};
const Component3 = () => (
  <div>
    {/* Comment in jsx */}
    <p>hola</p>
  </div>
);
const App = () => (
  <div>
    <Component2.Title />
    <Component2.Paragraph />
    <Component3 />
  </div>
);
ReactDom.render(<App />, document.getElementById("root"));
