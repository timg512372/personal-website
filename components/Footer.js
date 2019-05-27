import React, { Component } from 'react';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import SocialFacebookOptionIcon from 'grommet/components/icons/base/SocialFacebookOption';
import SocialLinkedinOptionIcon from 'grommet/components/icons/base/SocialLinkedinOption';
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import MailIcon from 'grommet/components/icons/base/Mail';

class CustomFooter extends Component {
    render() {
        return (
            <Footer justify="between" size="small">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100vw',
                        backgroundColor: '#F6F7F9'
                    }}
                >
                    {/* <Title>
                        <s />
                        Timothy Guo
                    </Title> */}
                    <Box direction="row" align="center" pad={{ between: 'medium' }}>
                        <Paragraph margin="none">©2019 Timothy Guo</Paragraph>
                        <Anchor
                            icon={<MailIcon colorIndex="accent" />}
                            href="mailto: timg51237@gmail.com"
                            style={{ zIndex: 10 }}
                        />
                        <Anchor
                            icon={<SocialFacebookOptionIcon colorIndex="accent" />}
                            href="#"
                            style={{ zIndex: 10 }}
                        />
                        <Anchor
                            icon={<SocialLinkedinOptionIcon colorIndex="accent" />}
                            href="https://www.linkedin.com/in/timothy-guo-94507016a/"
                            style={{ zIndex: 10 }}
                        />
                        <Anchor
                            icon={<SocialGithubIcon colorIndex="accent" />}
                            href="https://github.com/timg512372"
                            style={{ zIndex: 10 }}
                        />
                    </Box>
                </div>
            </Footer>
        );
    }
}

export default CustomFooter;
