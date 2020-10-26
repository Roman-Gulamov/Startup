import Document, { Html, Head, Main, NextScript } from 'next/document';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head> 
                    <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}