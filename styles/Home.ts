import styled from 'styled-components';
import background from '../assets/images/header/background.jpg';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-style: italic;
    margin-top: 30vh;

    &::before {
        content: ' ';
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        will-change: transform;
        background: url(${background}) no-repeat 50%;
        background-size: cover;
        z-index: -1;
    }
    
    @media screen and (max-width: 600px) {
        margin-top: 20vh;
    }
` 

export const HomeTitle = styled.h1`
    font-size: 5em;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;

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
    color: #fff;

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
