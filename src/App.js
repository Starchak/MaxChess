import React from "react";

import Main from "./containers/Main";
import Options from "./containers/Options";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderMain: true,
      renderOptions: false,
    };
  }

  showMain = () => {
    this.setState({ renderMain: true });
  };

  hideMain = () => {
    console.log("hide main");
    this.setState({ renderMain: false });
    console.log("Hide main: ", this.state.renderMain);
  };

  showOptions = () => {
    this.setState({ renderOptions: true });
  };

  hideOptions = () => {
    this.setState({ renderOptions: false });
  };

  render() {
    return (
      <div className="App">
        <Main
          showOptions={this.showOptions}
          hideMain={this.hideMain}
          isVisible={this.state.renderMain}
        />
        <Options
          hideOptions={this.hideOptions}
          isVisible={this.state.renderOptions}
        />
      </div>
    );
  }
}

export default App;
