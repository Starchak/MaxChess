import React from 'react';

import Main from './containers/Main';
import Options from './containers/Options'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderOptions: false
    }
  }

  hideOptions = () => {
    this.setState({ renderOptions: false })
  }

  showOptions = () => {
    console.log('click');
    this.setState({ renderOptions: true })
  }

  render() {
    return (
      <div className="App">
        <Main showOptions={this.showOptions} />
        {this.state.renderOptions === true ? 
          <Options hideOptions={this.hideOptions} /> 
          : null
        }
      </div>
    );
  }
}

export default App;
