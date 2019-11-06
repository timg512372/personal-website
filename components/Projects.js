import React, { Component } from 'react';
import Divider from './Divider';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';

const projects = [
    {
        title: 'Dime',
        description:
            'Dime is a digital sports league where basketball players are registered as Blockchain tokens that are unique, tradable and non-fungible financial assets. These assets grow and develop through tournament style leagues with Ether prizes.',
        href: 'https://dimedrop.io',
        img: '/static/dime.png'
    },
    {
        title: 'Sage Prosthetics Website',
        description:
            'Sage Prosthetics is student-run service group that uses 3D printing to make custom prosthetics for those in need. All of the prosthetics are made by hand using open-source designs in collaboration with E-Nable.',
        href: 'https://www.sageprosthetics.org/',
        img: '/static/prosthetics.png'
    },
    {
        title: 'Music Therapy Website',
        description:
            "The website for Music Therapy spreads awareness for music and Alzheimer's and highlights the efforts of Music Therapy at Sage.",
        href: 'https://sagehillmusictoheal.org/',
        img: '/static/music.png'
    },
    {
        title: 'Saddle Point',
        description:
            'Saddle Point is a simple online platform that organizes school clubs and allows students to easily communicate with and donate to all of their favorite activities.',
        img: '/static/saddlepoint.png'
    },
    {
        title: 'FairLegal',
        description:
            'FairLegal is a platform that allows underprivileged defendants to find legal representation by posting their cases. In return, young and otherwise unemployed lawyers gain experience and a source of income.',
        img: '/static/fairlegal.png',
        href: 'https://fairlegal-react.herokuapp.com/'
    },
    {
        title: 'Mystic',
        description:
            'Mystic is the ultimate unofficial companion app for Magic: The Gathering. With a clean user interface and a wide range of functionality, including card search, news feed, life counter, and tournament scheduler, it deserves a slot on the screen of players everywhere.',
        img: '/static/mystic.png',
        href: 'https://play.google.com/store/apps/details?id=com.goldin.mystic'
    }
];

class Projects extends Component {
    render() {
        return (
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '5% 0 5% 0'
                }}
            >
                <h2 style={{ marginBottom: '-0.1em', fontSize: '180%' }}>
                    <span style={{ fontWeight: '600' }}>Projects</span>
                </h2>
                <Divider />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '80vw',
                        flexWrap: 'wrap',
                        marginBottom: '-120px'
                    }}
                >
                    {projects.map(project => {
                        return (
                            <Card
                                thumbnail={project.img}
                                heading={project.title}
                                description={
                                    <span style={{ fontSize: '100%', fontFamily: 'Nunito' }}>
                                        {project.description}
                                    </span>
                                }
                                link={<Anchor href={project.href} label="Learn More" />}
                                key={project.title}
                                style={{ marginTop: '30px' }}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;
