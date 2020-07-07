import React from "react";
import ReactDom from "react-dom";
/* importing a component 
note: var uppercase*/

/* destroy objects : props */
const Component2 = ({ name, description }) => {
  return (
    <section>
      Hello bro , i am a fruit : {name}
      <p>{description}</p>
    </section>
  );
};
const App = () => (
  /* prop are objects in components  */
  <Component2 name={"Sandia"} description={"Is a fruit very tasty"} />
);
ReactDom.render(<App />, document.getElementById("root"));
