import styled, { css } from 'styled-components';
import { IOpen, IPosition } from '../interfaces/styledInterface';

export const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 3em;
    z-index: 1;

    @media screen and (max-width: 768px) {
        margin-top: 0;
    }
` 

export const AppTitle = styled.div`
    font-size: 1.6em;
    font-weight: 900;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 2em;
        margin: 0.8em auto 0;
    }
` 

export const AppNav = styled.nav<IOpen>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-weight: 700;
    color: #fff;
    
    @media screen and (max-width: 768px) {
        position: fixed;
        height: 60vh;
        width: 100%;
        align-items: center;
        flex-direction: column;
        margin: 0 -1em;
        clip-path: circle(10px at 90% -10%);
        pointer-events: none;
        background: rgba(104, 31, 25, 1);
        transition: all 1.2s ease-out;

        ${props => props.open && css`
            clip-path: circle(1203px at 90% -10%);
            pointer-events: all;
        `}
    }

    & a {
        font-size: 1em;
        padding-right: 2em;
        color: inherit;
        transition: all 0.25s ease-in-out;

        @media screen and (max-width: 768px) {
            padding-right: 0;
        }

        &:hover {
            text-decoration: underline;
            color: rgba(24, 240, 171, 0.9);
        }

        &:last-of-type {
            padding-right: 0;
        }
    }
` 

export const AppHumburger = styled.div<IPosition>`
    display: none;

    @media screen and (max-width: 768px) {
        position: ${props => props.position};
        display: block;
        cursor: pointer;
        right: 5%;
        top: 7%;
        transform: translate(-5%, -50%);
        z-index: 2;
    }
`

export const Line = styled.div`
    @media screen and (max-width: 768px) {
        width: 1.4em;
        height: 0.13em;
        background: white;
        margin: 0.3em;
        z-index: 9999;
    }
`


export const NavInvisible = styled.div<IOpen>`
    display: none;

    ${props => props.open && css`
        display: block;
        width: 100%;
        height: 48em;
        position: absolute;
        top: 100%;
        opacity: 0.2;
        background: black;
        cursor: pointer;
        z-index: -1;
    `}
`

export const Main = styled.main`
    margin-top: 10vh;
` 
