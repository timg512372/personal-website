import React, { Component } from 'react';
import Divider from './Divider';

const experience = [
    [
        {
            date: '2020-2024',
            title: 'UC Berkeley',
            description:
                "I am currently attending UC Berkeley as a Regents and Chancellor's Scholar, majoring in EECS and Cognitive Science. Organizations: Blockchain at Berkeley, Debate Society of Berkeley, CalStar, HKN",
        },
        {
            date: '2016-2020',
            title: 'Sage Hill School',
            description:
                'At Sage, I developed my passions for technology, public speaking, and social justice. I lead the debate and Academic Decathlon teams along with a multicultural leadership group. I held a cumulative 4.51 GPA.',
        },
        {
            date: '2019-2020',
            title: 'Irvine Valley College',
            description:
                'To supplement my education at Sage, I pursued dual enrollment in community college.',
        },
        {
            date: 'Summer 2019',
            title: 'LaunchX at MIT',
            description:
                'LaunchX at MIT is a highly selective summer program for aspiring high school entrepreneurs.' +
                'During the four weeks of LaunchX, I completed rigorous coursework from professors at MIT Sloan and Harvard Business School. I also collaborated with my classmates to create a startup, Badge, which attracted considerable interest from venture capitalists.',
        },
        {
            date: '2013-2016',
            title: 'Foothills Middle School',
            description: '4.00 unweighted GPA',
        },
    ],
    [
        {
            date: 'Summer 2022',
            title: 'Incoming SWE Intern at PayPal',
            description: '',
        },
        {
            date: 'Summer 2021',
            title: 'Summer Analyst at Galaxy Digital',
            description:
                'As a Summer Analyst at Galaxy Digital, I wrote internal reports on cross-chain bridging, L2 scaling, proxy contracts, Eth 2.0, and London hard fork. ' +
                'I also evaluated venture deals through market analysis and data parsing to verify profit projections. ' +
                'As part of my research, I created and published an SQL analysis of churn rate and volume by user cohort in popular exchanges. ' +
                'I also built a Node.js arbitrage bot (0.6% profit margin) and a Python copy-trading bot (8% profit margin)',
        },
        {
            date: '2020-present',
            title: 'Head of Internal and Developer at Blockchain at Berkeley',
            description:
                'As a developer in Blockchain at Berkeley, I led an internal project to create a decentralized tracker ' +
                'for COVID-19 vaccines. I spearheaded a smart contract architecture redesign for an open-source UNICEF consulting project. I also revamped internal training curriculum, sourced quality lecturers, and increased individual support. ' +
                'I also researched distributed hash tables and implemented a novel DHT to improve security. ' +
                'As Head of Internal, I managed org-wide recruitment, including redesigning our marketing and organizing and conducting interviews and deliberations for 100+ candidates. ',
        },
        {
            date: '2020-2021',
            title: 'Blockchain Intern at Byte to Byte, LLC',
            description:
                'As an intern with Byte to Byte, I wrote application back-ends using ' +
                'Ethereum and Hyperledger Fabric. I researched and implemented L2 scaling solutions ' +
                'such as optimistic rollups, plasma chains, and side chains. I also created a cross-platform' +
                'production app for a collaboration with Marwin Sports.',
        },
        {
            date: '2018-present',
            title: 'COO of Dime',
            description:
                'As COO of Dime, I led the development of the front-end web platform.' +
                ' and collaborated with the C-suite on strategic vision. ' +
                'We pitched our product to investors at Global Demo Day 2018. ' +
                'Working with Dime gave me my first taste of entrepreneurship and Silicon Valley.',
        },
        // {
        //     date: 'Summer 2019',
        //     title: 'Marketing and Development Intern at Linden Educational Services',
        //     description:
        //         "As an intern with Linden, I designed and implemented a variety of landing and RVSP pages for Linden's numerous events. I also wrote a case study on Linden's existing web solutions and proposed improvements.",
        // },
    ],
];

class Experience extends Component {
    renderExperience(exp) {
        return (
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        textAlign: 'center',
                        fontSize: '500%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <span style={{ zIndex: 2 }}>&#8226;</span>
                    <div
                        style={{
                            width: '2px',
                            height: '100%',
                            backgroundColor: '#E1E1E1',
                            margin: '-110px 10px -10px 10px',
                            zIndex: 1,
                        }}
                    />
                </div>
                <div
                    style={{
                        margin: '15px 0px 15px 20px',
                        borderColor: '#E1E1E1',
                        borderRadius: '7px',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        padding: '20px 20px 10px 30px',
                        width: '500px',
                    }}
                >
                    <div style={{ fontWeight: 'bold', fontFamily: 'Nunito' }}>{exp.date}</div>
                    <h3 style={{ fontWeight: 'bold' }}>{exp.title}</h3>
                    <p style={{ fontFamily: 'Nunito', fontSize: '120%' }}>{exp.description}</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: this.props.desktop ? '0 0 5% 0' : '20vh 0 5% 0',
                    //backgroundColor: '#F6F7F9',
                    padding: '5% 0 5% 0',
                }}
            >
                <h2 style={{ marginBottom: '-0.1em', fontSize: '180%', textAlign: 'center' }}>
                    <span style={{ fontWeight: '600' }}>Education & Experience</span>
                </h2>

                <Divider />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: this.props.desktop ? 'row' : 'column',
                        justifyContent: 'space-around',
                        width: '90vw',
                        margin: '0vw 5vw 0vw 5vw',
                    }}
                >
                    {experience.map((category) => {
                        return (
                            <div
                                style={{
                                    width: this.props.desktop ? '600px' : '90vw',
                                    //height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {category.map((exp) => {
                                    return this.renderExperience(exp);
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Experience;
