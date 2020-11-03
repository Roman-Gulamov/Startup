import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20em;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`

export const ContactTemplates = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: row;
    }
    
    @media screen and (max-width: 500px) {
        display: block;
        flex-wrap: wrap;
        margin: 0 auto;
    }
`

export const TemplatesItem = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 500px) {
        margin-bottom: 1.5em;
    }
`

export const ItemHeader = styled.div`
    & svg path {
        color: rgba(0, 0, 0, 0.7);
    }
`

export const HeaderTitle = styled.div`
    line-height: 1.2;
    text-transform: uppercase;
`

export const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 1em;

    & span {
        font-size: 0.8em;
        line-height: 1.5;

        &:not(:last-child) {
            margin-top: 1em;
        }
    }
`

export const ContactForm = styled.div`
    margin-left: 4em;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }

    & form {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`

export const FormItem = styled.div`
    position: relative;
    display: flex;
    width: 50%;

    &[data-name="message"] {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    & span {
        position: absolute;
        top: 84%;
        left: 4%;
        font-size: 0.7em;
    }

    & input, & textarea {
        border: 2px solid black;
        outline: none;
        padding: 1.5em;
        margin: 1em 1em 1.6em;
        font-size: 0.8em;
        width: 100%;
        background: rgba(104,31,25,0.5);
        text-transform: uppercase;

        &::placeholder {
            color: #fff;
        }
    }

    & textarea {
        height: 13em;
        resize: none;

        & ~ span {
            position: absolute;
            top: 93%;
            left: 4%;
        }
    }
`

export const FormSend = styled.div`
    margin-bottom: 3em;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

export const FormButton = styled.button`
    position: relative;
    border: 2px solid black;
    text-transform: uppercase;
    padding: 1em;
    background: transparent;
    margin: 2em 1em 0 0;
    cursor: pointer;
    transition: all 0.4s ease;

    @media screen and (max-width: 768px) {
        margin-right: 0;
    }

    &:hover {
        background: rgba(104,31,25,0.9);
    }

    &:active {
        transform: scale(0.95);
    }
`

export const FormNotice = styled.span`
    @media screen and (max-width: 900px) {
        margin-top: 0.5em;
        font-size: 0.5em;
    }

    & span {
        color: #5b78c7;
    }
`