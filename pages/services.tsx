import { useEffect, useState } from 'react';
import Image from 'next/image';

import { AppWrapper } from '../components/AppWrapper';
import { ServicesProps, IServices } from '../interfaces/interface';

import loading from '../assets/images/loading.svg';
import { Loading } from '../styles/Loading';
import { Wrapper, ServiceItem, ItemImg, ItemTitle, ItemSubtitle } from '../styles/Services';



const Services = ({ services: serverServices }: ServicesProps) => {
    const [services, setServices] = useState(serverServices ? serverServices : []);
    
    useEffect(() => {
        const load = async () => {
            const response = await fetch(`${process.env.API_URL}/services`);
            const json = await response.json();
            setServices(json);
        }

        !serverServices ? load() : null;
    }, [])

    
    if (!services) {
        return (
            <AppWrapper title='| Services'>
                <Loading>
                    <img src={loading} alt="loading..." />
                </Loading>
            </AppWrapper>
        )
    } else {
        return (
            <AppWrapper title="| Services">
                <Wrapper>
                    {services.map(({ id, logo, title, subtitle }) =>
                        <ServiceItem key={id}>
                            <ItemImg>
                                <Image src={logo} alt={title} unsized={true} />
                            </ItemImg>
                            <ItemTitle>{title}</ItemTitle>
                            <ItemSubtitle>{subtitle}</ItemSubtitle>
                        </ServiceItem>
                    )}
                </Wrapper>
            </AppWrapper>
        )
    }
}

export default Services;


Services.getInitialProps = async ({ req }) => {
    if (!req) {
        return {services: null}
    }

    const response = await fetch(`${process.env.API_URL}/services`);
    const services = await response.json();

    return {
        services
    }
}