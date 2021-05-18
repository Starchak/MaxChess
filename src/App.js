import React from "react";

import Main from "./containers/Main";
import Options from "./containers/Options";
import Game from "./containers/Game";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderMain: true,
      renderOptions: false,
      renderGame: false,
    };
  }

  showMain = () => {
    this.setState({ renderMain: true });
  };

  hideMain = () => {
    this.setState({ renderMain: false });
  };

  showOptions = () => {
    this.setState({ renderOptions: true });
  };

  hideOptions = () => {
    this.setState({ renderOptions: false });
  };

  showGame = () => {
    this.setState({ renderGame: true });
  };

  hideGame = () => {
    this.setState({ renderGame: false });
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
          showGame={this.showGame}
          isVisible={this.state.renderOptions}
        />
        <Game hideGame={this.hideGame} isVisible={this.state.renderGame} />
      </div>
    );
  }
}

export default App;
