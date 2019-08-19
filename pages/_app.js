import React from 'react';
import App, { Container } from 'next/app';
import NextSeo from 'next-seo';

import '../styles.scss';
import Layout from './Layout';

var parser = require('ua-parser-js');

const DEFAULT_SEO = {
    title: "I'm Timothy Guo",
    description:
        "I'm a student at Sage Hill School and Co-founder and COO at Dime, a startup in decentralized blockchain gaming. I'm passionate about social entrepreneurship and helping people with knowledge and technology.",
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.musictoheal.org/',
        title: "I'm Timothy Guo",
        description:
            "I'm a student at Sage Hill School and Co-founder and COO at Dime, a startup in decentralized blockchain gaming. I'm passionate about social entrepreneurship and helping people with knowledge and technology.",
        image: '/static/favicon.png',
        site_name: "I'm Timothy Guo",
        imageWidth: 1200,
        imageHeight: 1200
    },
    twitter: {
        title: "I'm Timothy Guo",
        cardType: 'summary_large_image',
        description:
            "I'm a student at Sage Hill School and Co-founder and COO at Dime, a startup in decentralized blockchain gaming. I'm passionate about social entrepreneurship and helping people with knowledge and technology."
    }
};

//import { initGA, logPageView } from '../components/general/analytics';

//Custom app.js to add Redux and a universal toolbar --> DO NOT RENAME
export default (class MyApp extends App {
    static async getInitialProps({ Component, ctx, req, query, store }) {
        const ua = parser(ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent);
        console.log(ua.device.type);
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
                desktop: ua.device.type != 'mobile'
            }
        };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <NextSeo config={DEFAULT_SEO} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        );
    }
});
