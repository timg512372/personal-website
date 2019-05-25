import React, { Component } from 'react';
import Divider from './Divider';

const experience = [
    [
        {
            date: '2016-2020',
            title: 'Sage Hill School',
            description:
                'At Sage, I developed my passions for technology, public speaking, and social justice. I lead the debate and Academic Decathlon teams along with a multicultural leadership group. I currently have a 4.71 GPA.'
        },
        {
            date: '2013-2016',
            title: 'Foothills Middle School',
            description: '4.00 unweighted GPA'
        }
    ],
    [
        {
            date: '2018-present',
            title: 'COO of Dime',
            description:
                'As COO of Dime, I led the development of the front-end web platform.' +
                ' and collaborated with the C-suite on strategic vision. ' +
                'We pitched our product to investors at Global Demo Day 2018. ' +
                'Working with Dime gave me my first taste of entrepreneurship and Silicon Valley.'
        }
    ]
];

class Experience extends Component {
    renderExperience(exp) {
        return (
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start'
                }}
            >
                <div
                    style={{
                        height: '100%',
                        textAlign: 'center',
                        fontSize: '500%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <span style={{ zIndex: 2 }}>&#8226;</span>
                    <div
                        style={{
                            width: '2px',
                            height: '100%',
                            backgroundColor: '#E1E1E1',
                            margin: '-110px 10px -10px 10px',
                            zIndex: 1
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
                        width: '500px'
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
                    margin: '0 0 5% 0',
                    //backgroundColor: '#F6F7F9',
                    padding: '5% 0 5% 0'
                }}
            >
                <h2 style={{ marginBottom: '-0.1em', fontSize: '180%', textAlign: 'center' }}>
                    <span style={{ fontWeight: '600' }}>Education & Experience</span>
                </h2>

                <Divider />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '90vw',
                        margin: '0vw 5vw 0vw 5vw'
                    }}
                >
                    {experience.map(category => {
                        return (
                            <div
                                style={{
                                    width: '600px',
                                    //height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {category.map(exp => {
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
