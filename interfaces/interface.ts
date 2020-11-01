import { NextPageContext } from 'next';

export interface IWrapper {
    children: any,
    title?: string
}


export interface ServicesProps {
    services: Array<IServices>
}

export interface IServices {
    id: number,
    logo: string,
    title: string,
    subtitle: string
}


export interface AboutPage {
    about: IAboutKeys
}

export interface IAboutKeys {
    [key: string]: Array<IPropsAbout>
}

export interface IPropsAbout {
    id: number,
    image?: string,
    name?: string,
    position?: string,
    social?: string,
    title?: string
}


export interface WorksPage {
    works: IWorksKeys
}

export interface IWorksKeys {
    [key: string]: Array<IPropsWorks>
}

export interface IPropsWorks {
    id?: number,
    direction?: string,
    image?: string,
    title?: string
}


export interface BlogProps {
    blog: Array<IBlog>
}

export interface BlogPostProps {
    blog: IBlog
}

export interface IBlog {
    id: number,
    image: string,
    date: number,
    month: string,
    title: string,
    name: string,
    direction: string,
    text: string
}

export interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

