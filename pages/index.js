import React, { Component } from 'react';
import Particles from 'react-particles-js';
import SocialFacebookOptionIcon from 'grommet/components/icons/base/SocialFacebookOption';
import SocialLinkedinOptionIcon from 'grommet/components/icons/base/SocialLinkedinOption';
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import MailIcon from 'grommet/components/icons/base/Mail';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import { Transition } from 'react-transition-group';
import anime from 'animejs';

import '../styles.scss';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';

const animateHeaderIn = header => {
    console.log('abcdef');
    return anime({
        targets: header,
        backgroundColor: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)'],
        //filter: ['blur(7px)', 'blur(0px)'],
        boxShadow: ['0px 3px 4px rgba(237, 237, 237, 1)', '0px 3px 4px rgba(237, 237, 237, 0)'],
        easing: 'easeOutCubic',
        duration: 500
    });
};

const animateHeaderOut = header => {
    return anime({
        targets: header,
        backgroundColor: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
        //filter: ['blur(7px)', 'blur(0px)'],
        boxShadow: ['0px 3px 4px rgba(237, 237, 237, 0)', '0px 3px 4px rgba(237, 237, 237, 1)'],
        easing: 'easeOutCubic',
        duration: 500
    });
};

class Home extends Component {
    state = {
        top: true,
        opacity: 1,
        cycle: 0,
        textCycle: 0,
        fadeCycle: 0,
        barOpacity: 0,
        page: 'h'
    };

    handleScroll = e => {
        let scroll = e.target.scrollTop / window.innerHeight;
        if (scroll < 0.92) {
            this.setState({ page: 'h' });
        } else if (scroll < 2.04) {
            this.setState({ page: 'a' });
        } else if (scroll < 2.36) {
            this.setState({ page: 't' });
        } else if (scroll < 3.66) {
            this.setState({ page: 'p' });
        } else {
            this.setState({ page: 'e' });
        }

        if (this.state.top !== e.target.scrollTop < 100) {
            // let direction = e.target.scrollTo < 100;
            // let fade = setInterval(() => {
            //     let { fadeCycle } = this.state;
            //     if (fadeCycle === 30) {
            //         clearInterval(fade);
            //     }
            //     console.log('fading');
            //     fadeCycle++;
            //     console.log(fadeCycle);
            //     this.setState({ fadeCycle });
            // }, 1000);
            this.setState({ top: e.target.scrollTop < 100 });
        }
    };

    componentDidMount() {
        this.animation = setInterval(() => {
            let { cycle, textCycle } = this.state;
            if (cycle == 300) {
                cycle = 0;
                textCycle = (textCycle + 1) % 3;
            } else {
                cycle += 1;
            }

            let opacity = cycle / 100;
            if ((100 < cycle && cycle < 150) || (250 < cycle && cycle <= 300)) {
                opacity = this.state.opacity;
            } else if (150 <= cycle && cycle <= 250) {
                opacity = 1 - (cycle - 150) / 100;
            }

            this.setState({ opacity, cycle, textCycle });
        }, 20);
    }

    componentWillUnmount() {
        clearInterval(this.animation);
    }

    renderHeader() {
        return (
            <Transition onEnter={animateHeaderIn} onExit={animateHeaderOut} in={this.state.top}>
                <Header dark={this.state.top} page={this.state.page} />
            </Transition>
        );
    }

    render() {
        let text = 'Timothy Guo';
        if (this.state.textCycle === 1) {
            text = 'A Developer';
        } else if (this.state.textCycle === 2) {
            text = 'An Entrepreneur';
        }
        return (
            <div>
                {this.renderHeader()}
                <div style={{ overflowY: 'scroll', height: '100vh' }} onScroll={this.handleScroll}>
                    <div style={{ color: 'white', textAlign: 'center' }}>
                        {this.renderParticles()}
                        <img
                            src="/static/background.jpg"
                            style={{
                                height: '100vh',
                                width: '100vw',
                                marginTop: '-100vh',
                                zIndex: -1
                            }}
                            alt="background"
                        />
                        <div
                            style={{
                                margin: '-65vh 0px 0px 0px',
                                fontSize: '160%',
                                fontWeight: '400',
                                zIndex: '10'
                            }}
                        >
                            Hello & Welcome
                        </div>
                        <div
                            style={{
                                margin: '1px 0px 0px 0px',
                                fontSize: '430%',
                                fontWeight: '300',
                                zIndex: 10
                            }}
                        >
                            I Am{' '}
                            <span style={{ fontWeight: '600', opacity: this.state.opacity }}>
                                {' '}
                                {text}
                                {'. '}
                            </span>
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
                            style={{ zIndex: 10 }}
                        />
                        <Anchor
                            icon={<SocialFacebookOptionIcon colorIndex="brand" />}
                            href="#"
                            style={{ zIndex: 10 }}
                        />
                        <Anchor
                            icon={<SocialLinkedinOptionIcon colorIndex="brand" />}
                            href="https://www.linkedin.com/in/timothy-guo-94507016a/"
                            style={{ zIndex: 10 }}
                        />
                        <Anchor
                            icon={<SocialGithubIcon colorIndex="brand" />}
                            href="https://github.com/timg512372"
                            style={{ zIndex: 10 }}
                        />
                    </div>
                    <div
                        style={{
                            width: '100vw',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            margin: '2% 0 0 0',
                            zIndex: 10
                        }}
                    >
                        <Button
                            label="Download CV"
                            href="https://drive.google.com/file/d/1Ks9PH9Wpb9O3o2BUZ2mT8JFioGv5Qq0W/view?usp=sharing"
                            style={{
                                color: '#FFFFFF',
                                borderRadius: '50px',
                                marginBottom: '27%',
                                zIndex: '10'
                            }}
                        />
                    </div>
                    <div id="AboutMe" style={{ marginTop: '-70px', marginBottom: '70px' }} />
                    <AboutMe />
                    <div id="Projects" />
                    <Projects />
                    <div id="Experience">
                        <Experience />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }

    renderParticles = () => {
        return (
            <Particles
                className="particles"
                style={{
                    height: '100%',
                    width: '100%',
                    zIndex: -2
                }}
                width="100vw"
                height="98vh"
                params={{
                    particles: {
                        number: {
                            value: 200
                        },
                        size: {
                            value: 4,
                            random: true
                        },
                        opacity: {
                            value: 0.9
                        },
                        color: {
                            value: '#FFFFFF'
                        },
                        move: {
                            enable: true,
                            direction: 'random',
                            out_mode: 'out',
                            bounce: false,
                            speed: 10,
                            random: false,
                            attract: {
                                enable: false,
                                rotateX: 0,
                                rotateY: 0
                            }
                        },
                        line_linked: {
                            distance: 100,
                            color: '#FFFFFF',
                            opacity: 0.4,
                            width: 1.3
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            }
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 1
                            }
                        }
                    },
                    retina_detect: true
                }}
            />
        );
    };
}

export default Home;
