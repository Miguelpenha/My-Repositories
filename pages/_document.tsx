import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props}/>)
            })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }
    
    render () {
        return (
            <Html lang="pt-BR">
                <Head>
                    {/* Google Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900" rel="stylesheet"/>
                    {/* Favicon */}
                    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon"/>
                    {/* General */}
                    <meta name="twitter:site" content="@MglPenha"/>
                    <meta name="twitter:creator" content="@MglPenha"/>
                    <meta property="og:title" content="Meus repositórios"/>
                    <meta name="description" content="Meus repositórios"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="og:description" content="Meus repositórios"/>
                    <link rel="canonical" href="https://repositories.miguelpenha.vercel.app/"/>
                    <meta property="og:url" content="https://repositories.miguelpenha.vercel.app/"/>
                    <meta property="og:image" content="https://repositories.miguelpenha.vercel.app//img/thumbnail.png"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}