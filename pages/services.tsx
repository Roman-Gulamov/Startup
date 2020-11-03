import { useEffect, useState } from 'react';
import Image from 'next/image';

import { AppWrapper } from '../components/AppWrapper';

import { NextPageContext } from 'next';
import { ServicesProps, IServices } from '../interfaces/interface';

import loading from '../assets/loading.svg';
import { Loading } from '../styles/Loading';
import { ItemImage } from '../styles/Item';
import { 
    Wrapper, 
    ServiceItem, 
    ItemTitle, 
    ItemSubtitle } from '../styles/Services';


const Services = ({ services: serverServices }: ServicesProps): JSX.Element => {
    const [services, setServices] = useState<Array<IServices>>(serverServices);
    
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
                    {services.map(({ id, logo, title, subtitle }: IServices) =>
                        <ServiceItem key={id}>
                            <ItemImage width="7em" services>
                                <Image src={logo} alt={title} unsized={true} />
                            </ItemImage>
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


Services.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return {services: null}
    }

    const response = await fetch(`${process.env.API_URL}/services`);
    const services: IServices = await response.json();

    return {
        services
    }
}