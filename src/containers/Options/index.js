import React from "react";

import { PlayerForm } from "../../components";

import "./styles.css";

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className={`options_page ${
          this.props.isVisible ? "show_options" : "hide_options"
        }`}
      >
        <PlayerForm />
      </div>
    );
  }
}

export default Options;
