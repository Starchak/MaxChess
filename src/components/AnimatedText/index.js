import React from "react";

import "./styles.css";
class AnimatedText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charArr: [],
    };
  }

  componentDidMount() {
    let text = this.props.text;
    let charArr = this.state.charArr;
    for (let i = 0; i < text.length; i++) {
      charArr.push(text.charAt(i));
    }
    this.setState({ charArr });
  }

  getAnimationDelay = (i) => {
    return this.props.delay + ++i * 0.05 + "s";
  };

  render() {
    return (
      <div className="animated_text">
        {this.state.charArr.map((char, id) => (
          <span key={id} style={{ animationDelay: this.getAnimationDelay(id) }}>
            {char}
          </span>
        ))}
      </div>
    );
  }
}

export { AnimatedText };
