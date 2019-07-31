import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import '../styles.scss';

//Custom index.HTML document to add the custom stylesheet --> DO NOT RENAME
export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel="shortcut icon" type="image/ico" href="/static/favicon.ico" />

                    <link
                        href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:300,500,600,700"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <style jsx global>{`
                    body {
                    }
                `}</style>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
