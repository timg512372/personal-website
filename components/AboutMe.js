import React, { Component } from 'react';
import Divider from './Divider';
import Meter from './Meter';

const tech = [
    'Java',
    'Python',
    'Android Studio',
    'React',
    'Redux',
    'Ionic',
    'NodeJS',
    'MongoDB',
    'Ethereum',
    'Cloudinary',
    'Firebase',
    'Heroku'
];

const skills = [
    {
        name: 'React / React Native',
        skill: 90
    },
    {
        name: 'Java',
        skill: 80
    },
    {
        name: 'Node.js',
        skill: 80
    },
    {
        name: 'UI Design',
        skill: 70
    },
    {
        name: 'CSS',
        skill: 75
    },
    {
        name: 'Project Management',
        skill: 80
    },
    {
        name: 'Ionic',
        skill: 60
    },
    {
        name: 'Public Speaking',
        skill: 80
    },
    {
        name: 'HTML',
        skill: 70
    },
    {
        name: 'Administrative Leadership',
        skill: 70
    }
];

class AboutMe extends Component {
    render() {
        return (
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: this.props.desktop ? '0px' : '30vh'
                }}
            >
                <h2 style={{ marginBottom: '-0.1em', fontSize: '180%' }}>
                    <span style={{ fontWeight: '600' }}>About</span>{' '}
                    <span style={{ fontWeight: '400' }}>Me</span>
                </h2>
                <Divider />
                {/* <p style={{ fontFamily: 'Nunito', color: '#6c757d' }}>{`Who is this guy?`}</p> */}
                <img
                    src="/static/pfp.jpg"
                    style={{
                        borderRadius: '50%',
                        height: '15vw',
                        margin: '20px 0 40px 0'
                    }}
                    alt="me"
                />

                <h2 style={{ marginBottom: '-0.1em', fontSize: '180%' }}>
                    <span style={{ fontWeight: '400' }}>Hello!</span>{' '}
                    <span style={{ fontWeight: '600' }}>I'm Timothy Guo.</span>
                </h2>
                <h4
                    style={{
                        color: '#6c757d',
                        fontWeight: '700',
                        fontFamily: 'Nunito',
                        margin: '30px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <div>
                        Student<span style={{ fontWeight: '400' }}>&emsp;&#8226;&emsp;</span>
                        Developer
                    </div>
                    {this.props.desktop ? (
                        <span style={{ fontWeight: '400' }}>&emsp;&#8226;&emsp;</span>
                    ) : null}
                    <div>
                        Entrepreneur<span style={{ fontWeight: '400' }}>&emsp;&#8226;&emsp;</span>
                        Public Speaker
                    </div>
                </h4>
                <div
                    style={{
                        fontFamily: 'Nunito',
                        color: '#6c757d',
                        width: this.props.desktop ? '40vw' : '80vw',
                        textAlign: 'center'
                    }}
                >
                    {`I'm a student at Sage Hill School and co-founder and COO at Dime, a startup in decentralized blockchain gaming. I'm passionate about social entrepreneurship and helping people with knowledge and technology.`}
                </div>
                <div
                    style={{
                        width: '90vw',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        margin: '40px 0 20px 0'
                    }}
                >
                    {skills.map(skill => {
                        let id = '';
                        if (skill.name === 'Administrative Leadership') {
                            id = 'Technology';
                        }
                        return (
                            <Meter
                                label={skill.name}
                                value={skill.skill}
                                id={id}
                                desktop={this.props.desktop}
                            />
                        );
                    })}
                </div>
                <div style={{ width: '100vw', backgroundColor: '#F6F7F9', padding: '3% 0 5% 0' }}>
                    <h2
                        style={{
                            margin: this.props.desktop
                                ? '0px 0px -0.1em 0px'
                                : '0px 2vw -0.1em 2vw',
                            fontSize: '180%',
                            textAlign: 'center'
                        }}
                    >
                        <span style={{ fontWeight: '600' }}>Technologies</span>{' '}
                        <span style={{ fontWeight: '400' }}>I've worked with</span>
                    </h2>
                    <Divider />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            width: '90vw',
                            margin: '0vw 5vw 0vw 5vw',
                            flexWrap: 'wrap'
                        }}
                    >
                        {tech.map(x => {
                            return (
                                <img
                                    src={`/static/${x}.svg`}
                                    style={{
                                        height: '10vh',
                                        marginBottom: this.props.desktop ? '0px' : '2vh'
                                    }}
                                    alt={x}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
