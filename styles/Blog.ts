import styled, { css } from 'styled-components';
import { IBlogPost } from '../interfaces/styledInterface';


export const WrapperItem = styled.div<IBlogPost>`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 4em;

    &:not(:last-child):after {
        content: "";
        position: absolute;
        bottom: -8%;
        width: 100%;
        height: 1px;
        background: rgba(221, 221, 221, 0.2);
    }

    @media screen and (max-width: 768px) {
        &:not(:last-child):after {
            bottom: -4%;
        }
    }

    &:last-child {
        margin-bottom: 2em;
    }
    
    ${props => props.blogPost && css`
        @media screen and (min-width: 768px) {
            flex-direction: column;
            align-items: center;
            position: relative;
        }
    `}
`

export const BlogContent = styled.div<IBlogPost>`
    max-width: 55%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        margin-top: 2em;
    }
        
    ${props => props.blogPost && css`
        margin-top: 2em
    `}
`

export const ContentHeader = styled.div`
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const HeaderDate = styled.div`
    display: inline-flex;
    flex-direction: column;
    border: 2px solid #fff;
    padding: 0.7em 1em;
    font-weight: 600;

    
    @media screen and (max-width: 768px) {
        padding: 0.5em 0.7em;
    }

    & span {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;

        @media screen and (max-width: 500px) {
            font-size: 0.5em;
        }

        &:first-child {
            font-size: 1.6em;

            @media screen and (max-width: 500px) {
                font-size: 1.2em;
            }
        }
    }
`

export const HeaderDescription = styled.div`
    display: inline-flex;
    flex-direction: column;
    font-style: italic;
    padding-left: 2em;

    @media screen and (max-width: 500px) {
        padding-left: 1em;
    }
`

export const DescriptionTitle = styled.div`
    text-transform: uppercase;
    font-size: 1.3em;
    font-weight: 700;
    color: #5b78c7;

    @media screen and (max-width: 768px) {
        font-size: 1em;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.7em;
    }

    @media screen and (max-width: 300px) {
        font-size: 0.6em;
    }
`

export const DescriptionAuthor = styled.div`
    line-height: 2;
    font-size: 0.9em;

    @media screen and (max-width: 300px) {
        font-size: 0.7em;
    }

    & span {
        color: #5b78c7;

        @media screen and (max-width: 768px) {
            font-size: 1em;
        }
    }
`

export const ContentText = styled.p`
    margin: 2em 0;
    line-height: 1.5;
    font-style: italic;

    @media screen and (max-width: 768px) {
        margin: 1.7em 0;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.8em;
    }
`

export const ContentRead = styled.div<IBlogPost>`
    text-transform: uppercase;
    transition: all 0.4s ease;
    letter-spacing: 1px;

    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 0.9em;
    }

    & a {
        font-size: 1.1em;
        font-weight: 700;
        transition: all 0.4s ease;

        &:hover {
            color: #5b78c7;
            text-decoration: underline;
        }

        & svg path {
            transition: all 0.2s ease;
        
            &:hover {
                color: #5b78c7;
            }
        }
    }

    ${props => props.blogPost && css`
        position: absolute;
        left: 0;
        top: -5%;
        font-size: 1.5em;
    `}
`