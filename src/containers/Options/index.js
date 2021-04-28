import React from 'react';

import { AnimatedText } from '../../components';

import './styles.css';

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
        <div className="options_page">
            <AnimatedText text="Hello from animated text" delay="0" />
        </div>
        );
    }
}

export default Options;