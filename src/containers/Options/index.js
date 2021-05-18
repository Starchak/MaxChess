import React from "react";

import { PlayerForm } from "../../components";

import "./styles.css";

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideLeft: false,
    };
  }

  showGame = () => {
    this.setState({ hideLeft: true });
    this.props.hideOptions();
    this.props.showGame();
  };

  render() {
    return (
      <div
        className={`
        options_page 
        ${this.props.isVisible ? "show_options" : null} 
        ${this.state.hideLeft ? "hide_options_left" : null}
        `}
      >
        <PlayerForm showGame={this.showGame} />
      </div>
    );
  }
}

export default Options;
