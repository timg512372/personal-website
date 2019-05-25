import React, { Component } from 'react';
import Divider from './Divider';
import Meter from './Meter';

const tech = [
    'Java',
    'Python',
    'Android Studio',
    'React',
    'Redux',
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
        skill: 60
    },
    {
        name: 'CSS',
        skill: 80
    },
    {
        name: 'HTML',
        skill: 55
    },
    {
        name: 'UI Design',
        skill: 70
    },
    {
        name: 'Project Management',
        skill: 80
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
                    alignItems: 'center'
                }}
            >
                <h2 style={{ marginBottom: '-0.1em', fontSize: '180%' }}>
                    <span style={{ fontWeight: '600' }}>About</span>{' '}
                    <span style={{ fontWeight: '400' }}>Me</span>
                </h2>
                <Divider />
                <p style={{ fontFamily: 'Nunito', color: '#6c757d' }}>{`Who is this guy?`}</p>
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
                        margin: '30px'
                    }}
                >
                    Student<span style={{ fontWeight: '400' }}>&emsp;&#8226;&emsp;</span>
                    Developer<span style={{ fontWeight: '400' }}>&emsp;&#8226;&emsp;</span>
                    Entrepreneur<span style={{ fontWeight: '400' }}>&emsp;&#8226;&emsp;</span>
                    Public Speaker
                </h4>
                <div
                    style={{
                        fontFamily: 'Nunito',
                        color: '#6c757d',
                        width: '40vw',
                        textAlign: 'center'
                    }}
                >
                    {`I'm a student at Sage Hill School and Co-founder and COO at Dime, a startup in decentralized blockchain gaming. I'm passionate about social entreprenurship and helping people with knowlege and technology.`}
                </div>
                <div
                    style={{
                        width: '80vw',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        margin: '40px 0 20px 0'
                    }}
                >
                    {skills.map(skill => {
                        return <Meter label={skill.name} value={skill.skill} />;
                    })}
                </div>
                <div style={{ width: '100vw', backgroundColor: '#F6F7F9', padding: '3% 0 5% 0' }}>
                    <h2 style={{ marginBottom: '-0.1em', fontSize: '180%', textAlign: 'center' }}>
                        <span style={{ fontWeight: '600' }}>Technology</span>{' '}
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
                                <img src={`/static/${x}.svg`} style={{ height: '10vh' }} alt={x} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
