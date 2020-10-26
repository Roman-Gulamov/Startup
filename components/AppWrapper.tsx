import Link from 'next/link';
import Head from 'next/head';
import { GlobalStyle } from '../styles/GlobalStyle';

export const AppWrapper = ({ children, title="Startup" }) => {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>{title}</title>
                <meta name='keywords' content='startup,ssr,react,next.js' />
                <meta name='description' content='Startup project' />
                <meta charSet='UTF-8' />
            </Head>
            <nav>
                <Link href='/'><a>Home</a></Link>
                <Link href='/services'><a>Services</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/works'><a>Works</a></Link>
                <Link href='/blog'><a>Blog</a></Link>
                <Link href='/clients'><a>Clients</a></Link>
                <Link href='/contact'><a>Contact</a></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}
