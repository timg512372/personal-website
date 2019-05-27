import React, { Component } from 'react';
import Link from 'next/link';
const navlinks = [
    { text: 'About Me', link: '#AboutMe', page: 'a' },
    { text: 'Technology', link: '#Technology', page: 't' },
    { text: 'Projects', link: '#Projects', page: 'p' },
    { text: 'Experience', link: '#Experience', page: 'e' }
];

class Header extends Component {
    render() {
        return (
            <div
                style={{
                    height: '70px',
                    width: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    backgroundColor: `rgba(255, 255, 255, ${this.props.dark ? '0' : '1'})`,
                    padding: '30px 5% 10px 5%',
                    boxShadow: `0px 3px 4px rgba(237, 237, 237, ${this.props.dark ? '0' : '1'})`,
                    color: this.props.dark ? 'white' : 'black',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
                className="header"
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <h2 style={{ fontWeight: '600' }}> Tim </h2>
                </div>
                <ul
                    className="navbar-nav mr-auto"
                    style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    {navlinks.map(link => {
                        return (
                            <li
                                className="nav-item"
                                style={{ margin: '6px 25px 0px 0px', fontWeight: '500' }}
                                key={link.link}
                            >
                                <Link href={link.link} passhref>
                                    <a style={{ color: this.props.dark ? 'black' : 'white' }}>
                                        <div
                                            className={
                                                this.props.page === link.page
                                                    ? `text${this.props.dark ? 'black' : ''} active`
                                                    : `text${this.props.dark ? 'black' : ''}`
                                            }
                                        >
                                            {link.text}
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <style jsx>{`
                    .textblack {
                        color: white;
                        font-weight: 500;
                        text-decoration: none;
                    }
                    .textblack:hover {
                        color: black;
                        text-decoration: none;
                        text-decoration-color: #7ed4c6;
                    }
                    .activeblack {
                        color: black;
                        text-decoration: none;
                    }
                    .text {
                        color: black;
                        font-weight: 500;
                        text-decoration: none;
                    }
                    .text:hover {
                        color: #6c757d;
                        text-decoration: none;
                        text-decoration-color: white;
                    }
                    .active {
                        color: #6c757d;
                        text-decoration: none;
                    }
                    ul {
                        list-style-type: none;
                    }
                `}</style>
            </div>
        );
    }
}

export default Header;
