import React from "react";

import { InputText, Button } from "../";

import "./styles.css";
class PlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charArr: [],
    };
  }

  findOpponentClick = () => {
    console.log("Find opponent");
  };

  render() {
    return (
      <div className="player_form">
        <InputText text="Name" />
        <Button text="Find Opponent" onClick={this.findOpponentClick} />
      </div>
    );
  }
}

export { PlayerForm };
