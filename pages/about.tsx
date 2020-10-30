import { useEffect, useState } from 'react';

import { AppWrapper } from '../components/AppWrapper';
import { AboutMap } from '../components/AboutMap';
import { AboutPage, IAboutProps } from '../interfaces/interface';

import loading from '../assets/images/loading.svg';
import { Loading } from '../styles/Loading';
import { Wrapper, AboutText, TextItem, AboutDevelopers } from '../styles/About';



const About = ({ about: serverAbout }) => {
    const [about, setAbout] = useState(serverAbout);
    
    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/about`);
            const json = await response.json();
            setAbout(json);
        }

        !serverAbout ? load() : null;
    }, [])

    if (!about) {
        return (
            <AppWrapper title='| About'>
                <Loading>
                    <img src={loading} alt="loading..." />
                </Loading>
            </AppWrapper>
        )
    } else {
        return (
            <AppWrapper title="| About">
                <Wrapper>
                    <AboutText>
                        {about.description.map(({ id, title }) =>
                            <TextItem key={id}>
                                <p>{title}</p>
                            </TextItem>
                        )}
                    </AboutText>
                    <AboutDevelopers>
                        <AboutMap about={about} />
                    </AboutDevelopers>
                </Wrapper>
            </AppWrapper>
        )
    }
}

export default About;

About.getInitialProps = async ({ req }) => {
    if (!req) {
        return {about: null}
    }

    const response = await fetch(`${process.env.API_URL}/about`);
    const about = await response.json();

    return {
        about
    }
}