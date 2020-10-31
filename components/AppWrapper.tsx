import { useState } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import { IWrapper } from '../interfaces/interface';
import { Container } from '../styles/Container';
import { Wrapper, AppTitle, AppNav, Main, AppHumburger, Line, NavInvisible} from '../styles/AppWrapper';


export const AppWrapper = ({ children, title }: IWrapper): JSX.Element => {
    const [isOpen, setIsOpen] = useState<string>('');

    const toggleMenu = () => {
        if (window.innerWidth <= 768) {
            isOpen === 'open' ? setIsOpen('') : setIsOpen('open');
        }
    }

    return (
        <>
            <Head>
                <title>Startup {title}</title>
                <meta name='keywords' content='startup,ssr,react,next.js' />
                <meta name='description' content='Startup project' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
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
