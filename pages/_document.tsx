import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
                })
    
            const initialProps = await Document.getInitialProps(ctx)
                return {
                    ...initialProps,
                    styles: (
                        <>
                            {initialProps.styles}
                            {sheet.getStyleElement()}
                        </>
                    ),
                }
            } finally {
                sheet.seal()
            }
        }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,200;1,400;1,600&display=swap" 
                        rel="stylesheet" 
                    />
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