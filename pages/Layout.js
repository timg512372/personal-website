import App from 'grommet/components/App';
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
