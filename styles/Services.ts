import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 23vh;

    @media screen and (max-width: 768px) {
        margin-top: 0;
    }
`

export const ServiceItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 23em;

    @media screen and (max-width: 768px) {
        margin: 0 auto 3em;
    }
`

export const ItemImg = styled.div`
    width: 7em;
    height: auto;

    @media screen and (max-width: 768px) {
        width: 6em;
    }

    & img {
        width: 100%;
        height: auto;
    }
`

export const ItemTitle = styled.h3`
    margin: 0.6em 0;
    font-size: 1.3em;
    font-weight: 600;
    text-transform: uppercase;
`

export const ItemSubtitle = styled.p`
    font-size: 1em;
    text-align: center;
    font-style: italic;
`