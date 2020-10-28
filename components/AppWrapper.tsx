import { useState } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import { GlobalStyle } from '../styles/GlobalStyle';
import { Container } from '../styles/Container';
import { Wrapper, AppTitle, AppNav, Main, AppHumburger, Line, NavInvisible} from '../styles/AppWrapper';


export const AppWrapper = ({ children, title="Startup" }) => {
    const [isOpen, setIsOpen] = useState('');

    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            isOpen === 'open' ? setIsOpen('') : setIsOpen('open');
        }
    }

    return (
        <>
            <GlobalStyle />
            <Head>
                <title>{title}</title>
                <meta name='keywords' content='startup,ssr,react,next.js' />
                <meta name='description' content='Startup project' />
                <meta charSet='UTF-8' />
            </Head>
            <Container>
                <Wrapper>
                    <AppHumburger 
                        onClick={toggleMenu} 
                        position={isOpen === 'open' ? 'fixed' : 'absolute'}
                    >
                        <Line />
                        <Line />
                        <Line />
                    </AppHumburger>
                    <AppTitle>Startup</AppTitle>
                    <AppNav open={isOpen}>
                        <Link href='/'><a>Home</a></Link>
                        <Link href='/services'><a>Services</a></Link>
                        <Link href='/about'><a>About</a></Link>
                        <Link href='/works'><a>Works</a></Link>
                        <Link href='/blog'><a>Blog</a></Link>
                        <Link href='/clients'><a>Clients</a></Link>
                        <Link href='/contact'><a>Contact</a></Link>
                        <NavInvisible
                            open={isOpen}
                            onClick={toggleMenu}
                        />
                    </AppNav>
                </Wrapper>
                <Main>
                    {children}
                </Main>
            </Container>
        </>
    )
}
