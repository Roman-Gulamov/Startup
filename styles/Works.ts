import styled from 'styled-components';
import { IActiveClass } from '../interfaces/styledInterface';


export const WorksSort = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
`

export const SortItem = styled.div<IActiveClass>`
    font-size: 1.1em;
    padding-right: 1em;
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.activeClass ?  '#5b78c7' : 'none'};
    transition: all 0.4s ease;

    @media screen and (max-width: 500px) {
        font-size: 0.8em;
    }

    @media screen and (max-width: 300px) {
        font-size: 0.7em;
    }

    &:last-child {
        padding-right: 0;
    }

    &:hover {
        color: #5b78c7;
        text-decoration: underline;
    }
`

export const WorksCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const CardsItem = styled.div`
    display: flex;
    justify-content: center;
    width: 33%;
    padding-right: 2em;
    margin-bottom: 2em;

    @media screen and (max-width: 1200px) {
        width: 50%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const ItemImage = styled.div`
    position: relative;
    width: 23em;
    height: auto;
    z-index: -1;

    & img {
        width: 100%;
        height: auto;
    }
`

export const ItemInvisible = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 99%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3em 2em;
    font-weight: 600;
    background-color: rgba(207, 0, 15, 0.7);
    opacity: 0;
    transition: opacity 0.4s ease;

    &:hover {
        opacity: 1;
    }
`

export const InvisibleTitle = styled.span`
    width: 14em;
    text-align: center;
    font-size: 1.2em;
`

export const InvisibleDirection = styled.span`
    margin: 0.5em 0 1em;
    font-size: 0.9em;
`

export const InvisibleButton = styled.button`
    width: 7em;
    height: 3em;
    font-weight: bold;
    border: 0;
    background: #fff;
    text-transform: uppercase;
    color: rgba(207, 0, 15, 1);
    cursor: pointer;

    &:active {
        transform: scale(0.97);
    }
`