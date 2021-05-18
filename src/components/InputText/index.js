import React from 'react';

import './styles.css'

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charArr: []
    }
  }

  componentDidMount() {
    let text = this.props.text;
    let charArr = this.state.charArr;
    for (let i = 0; i < text.length; i++) {
      charArr.push(text.charAt(i));
    }
    this.setState({charArr});
  }

  getTransitionDelay= (i) => {
    return (++i * 0.05) + 's';
  }

  render() {
    return (
      <div className="input-text_controll">
        <input type="text" required />
        <label>
          {this.state.charArr.map((char, id) => (
            <span key={id} style={{ 
              transitionDelay: this.getTransitionDelay(id) }}>
              {char}
            </span>
          ))}
        </label>
      </div>
    )
  }
}

export {InputText}
  