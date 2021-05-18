import React, { Component } from "react";
import { PageLoader } from "../../components";

import "./styles.css";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameFound: false,
    };
  }
  render() {
    return (
      <div
        className={`
          game_page 
          ${this.props.isVisible ? "show_game" : "hide_game"}
        `}
      >
        {this.state.gameFound ? (
          <div>
            <h1>Game</h1>
          </div>
        ) : (
          <PageLoader />
        )}
      </div>
    );
  }
}
