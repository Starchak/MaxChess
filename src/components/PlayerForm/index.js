import React from 'react';

import './styles.css'
class PlayerForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      charArr: []
    }
  }

  render() {
    return (
      <div className="player_form">
        <p>Name: </p>
      </div>
    )
  }
}

export {PlayerForm}
  