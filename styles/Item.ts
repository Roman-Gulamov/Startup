import styled, { css } from 'styled-components';
import { IPropsItemImg, IPropsItemInvisible } from '../interfaces/styledInterface';


export const ItemInvisible = styled.div<IPropsItemInvisible>`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: ${props => props.height};
    display: flex;
    padding: 0 3em 2em;
    background-color: ${props => props.background};
    opacity: 0;
    transition: opacity 0.4s ease, transform 1s ease;

    ${props => props.aboutProps && css`
        justify-content: space-around;
        align-items: flex-end;

        & a {
        cursor: pointer;

            & svg {
                width: 1.3em !important;
                height: 100%;
            }
        }
    `}

    ${props => props.worksProps && css<IPropsItemInvisible>`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        backface-visibility: hidden;
    `}

    ${props => props.worksPropsFront && css<IPropsItemInvisible>`
        transform: rotateY(${props => props.transformFront});
    `}

    ${props => props.worksPropsBack && css<IPropsItemInvisible>`
        transform: rotateY(${props => props.transformBack});
    `}
`

export const ItemImage = styled.div<IPropsItemImg>`
    position: relative;
    width: ${props => props.width};
    height: auto;

    &:hover ${ItemInvisible} {
        opacity: 1;
    }

    ${props => props.services && css`
        @media screen and (max-width: 768px) {
            width: 6em;
        }
    `}

    ${props => props.blog && css`
        @media screen and (max-width: 768px) {
            width: 25em;
            margin: 0 auto;
        }
    `}

    & img {
        width: 100%;
        height: auto;

        ${props => props.blog && css`
            @media screen and (max-width: 768px) {
                display: flex;
                width: 85%;
                margin: 0 auto;
            }
        `}
    }
`