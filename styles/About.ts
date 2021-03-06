import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const AboutText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3em;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        margin-bottom: 1em;
    }
`

export const TextItem = styled.div`
    font-style: italic;
    
    @media screen and (max-width: 768px) {
        margin-bottom: 2em;
        text-align: center;
    }

    &:first-child {
        margin-right: 1em;
    }
`

export const AboutDevelopers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const DevelopersItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    @media screen and (max-width: 768px) {
        margin: 0 auto 3em;
    }
`

export const InvisibleLink = styled.div`
    width: 2.5em;
    height: 2.5em;
    border-radius: 30%;
    transition: background 0.3s ease;

    &:hover {
        background: #C0301C;
    }
`

export const ItemName = styled.p`
    margin: 1em 0 0.7em;
    text-transform: uppercase;
    font-weight: bold;
`

export const ItemPosition = styled.p`
    font-size: 0.9em;
`