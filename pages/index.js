import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import SocialFacebookOptionIcon from 'grommet/components/icons/base/SocialFacebookOption';
import SocialLinkedinOptionIcon from 'grommet/components/icons/base/SocialLinkedinOption';
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import MailIcon from 'grommet/components/icons/base/Mail';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';

import '../styles.scss';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

class Home extends Component {
    state = {
        top: true
    };

    handleScroll = e => {
        console.log(e.target.scrollTop);
        if (this.state.top !== e.target.scrollTop < 100) {
            console.log('Transition');
            this.setState({ top: e.target.scrollTop < 100 });
        }
    };

    renderToolbar() {
        return (
            <div
                style={{
                    height: '70px',
                    width: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    backgroundColor: `rgba(255, 255, 255, ${this.state.top ? '0' : '1'})`,
                    padding: '10px 15% 10px 15%',
                    boxShadow: `0px 3px 4px rgba(237, 237, 237, ${this.state.top ? '0' : '1'})`,
                    color: this.state.top ? 'white' : 'black',
                    zIndex: 10
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <h2 style={{ fontWeight: '600' }}> Tim </h2>
                    <div>toolbar stuff here abc def ghi jkl qpurbhuaks;ldfjnda;vlkn</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderToolbar()}
                <div style={{ overflowY: 'scroll', height: '100vh' }} onScroll={this.handleScroll}>
                    <div style={{ color: 'white', textAlign: 'center' }}>
                        <img
                            src="/static/background.jpg"
                            style={{ height: '100vh', width: '100vw' }}
                            alt="background"
                        />

                        <div
                            style={{
                                margin: '-65vh 0px 0px 0px',
                                fontSize: '160%',
                                fontWeight: '400'
                            }}
                        >
                            Hello & Welcome
                        </div>
                        <div
                            style={{
                                margin: '1px 0px 0px 0px',
                                fontSize: '430%',
                                fontWeight: '300'
                            }}
                        >
                            I Am <span style={{ fontWeight: '600' }}> Timothy Guo. </span>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row'
                        }}
                    >
                        <Anchor
                            icon={<MailIcon colorIndex="brand" />}
                            href="mailto: timg51237@gmail.com"
                        />
                        <Anchor icon={<SocialFacebookOptionIcon colorIndex="brand" />} href="#" />
                        <Anchor
                            icon={<SocialLinkedinOptionIcon colorIndex="brand" />}
                            href="https://www.linkedin.com/in/timothy-guo-94507016a/"
                        />
                        <Anchor
                            icon={<SocialGithubIcon colorIndex="brand" />}
                            href="https://github.com/timg512372"
                        />
                    </div>
                    <div
                        style={{
                            width: '100vw',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            margin: '2% 0 0 0'
                        }}
                    >
                        <Button
                            label="Download CV"
                            onClick={() => window.scrollTo(0, 400)}
                            style={{ color: '#FFFFFF', borderRadius: '50px', marginBottom: '27%' }}
                        />
                    </div>
                    <AboutMe />
                    <Projects />
                    <Experience />
                </div>
            </div>
        );
    }
}

export default Home;
