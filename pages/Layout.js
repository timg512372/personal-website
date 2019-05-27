import Footer from 'grommet/components/Footer';
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Header from 'grommet/components/Header';
import Article from 'grommet/components/Article';

import '../styles.scss';

// import { ParallaxProvider } from 'react-scroll-parallax';

import React, { Component } from 'react';

class Layout extends Component {
    state = {
        dropdown: false,
        secondDropdown: ''
    };

    render() {
        return (
            <App style={{ maxWidth: '100vw' }}>
                <Article
                    style={{
                        maxWidth: '100vw',
                        padding: '0px'
                    }}
                >
                    <div style={{ minHeight: '100vh' }}>{this.props.children}</div>
                </Article>
            </App>
        );
    }
}

export default Layout;
