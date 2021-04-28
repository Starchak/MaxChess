import React from 'react';

import './styles.css'

class AnimatedBtn extends React.Component {
  render() {
    return (
      <div className="animatedBtn" onClick={()=> this.props.onClick()}>
        <span>{this.props.text}</span>
      </div>
  )
  }
}

export {AnimatedBtn}
  