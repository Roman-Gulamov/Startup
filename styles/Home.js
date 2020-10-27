import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-style: italic;
    color: #fff;
` 

export const HomeTitle = styled.h1`
    font-size: 5em;
    font-weight: 300;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
        font-size: 4em;
    }

    @media screen and (max-width: 500px) {
        font-size: 3em;
    }
` 

export const HomeSubtitle = styled.h2`
    text-transform: capitalize;
    font-size: 1.5em;
    font-weight: 400;
    margin-top: 0.5em;

    @media screen and (max-width: 765px) {
        font-size: 1em;
    }
` 

export const HomeButton = styled.button`
    padding: 1em 3em;
    margin-top: 2em;
    text-transform: uppercase;
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    font-weight: 600;
    border-radius: 2em;
    cursor: pointer;
    transition: all 0.4s ease-out;
    
    &:hover {
        background: rgba(104, 31, 25, 0.9);
        text-decoration: underline;
        color: rgba(24,240,171, 0.9);
        transform: scale(0.95);
    }
`
