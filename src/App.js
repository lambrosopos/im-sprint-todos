import React from "react";
import "./App.css";
import { GroceryItems, NewHeader } from "./exportBundle.js";
// import { GroceryItems } from "./GroceryItems/GroceryItems.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kinds: ["seafood", "meat", "water", "health", "supplies"]
    };
  }

  render() {
    return (
      <div className="App">
        <NewHeader greeting="Hello" />
        <GroceryItems kinds={this.state.kinds} />
      </div>
    );
  }
}

export default App;
