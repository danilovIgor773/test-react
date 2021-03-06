import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import Person from "./Person";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
        <Person name="Igor" age="28" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
