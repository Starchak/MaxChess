import React from "react";

import { InputText, Button } from "../";

import "./styles.css";
class PlayerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameText: "",
    };
  }

  findOpponentClick = () => {
    console.log("Find opponent");
    this.props.showGame();
  };

  render() {
    return (
      <div className="player_form">
        <InputText text="Name" />
        <div style={{ marginTop: "26px" }}>
          <Button text="Find Opponent" onClick={this.findOpponentClick} />
        </div>
      </div>
    );
  }
}

export { PlayerForm };
