import React from 'react';

import { BackgroundImg, Logo, AnimatedText } from '../../components'

import './styles.css';

import BGimg from '../../assets/MainBG.png';
import logoImg from '../../assets/Logo.png'

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return ( 
        <div className="main_page">
            <BackgroundImg uri={BGimg}/>
            <div className="logo_container">
                <div className="logo_animation">
                    <Logo uri={logoImg} />
                </div>
                <AnimatedText text="Max Chess" delay={1} />
            </div>
        </div>
        );
    }
}

export default Main;