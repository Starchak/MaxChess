import React from 'react';

import { InputText } from '../'

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
        <div>
        <InputText text="Name" />
        </div>
      </div>
    )
  }
}

export {PlayerForm}
  