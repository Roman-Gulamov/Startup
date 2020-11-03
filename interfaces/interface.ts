import { IconProp } from '@fortawesome/fontawesome-svg-core';


export interface IWrapper {
    children: any,
    title?: string
}


export interface ServicesProps {
    services: Array<IServices>
}

export interface IServices {
    id: string | number,
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
    id: string | number,
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
    id?: string | number,
    direction?: string,
    image?: string,
    title?: string
}

export interface IWorksMap {
    cards: Array<any>,
    transformFront: string,
    handleTransform: (side?: boolean) => boolean | void,
    transformBack: string,
}


export interface BlogProps {
    blog: Array<IBlog>
}

export interface BlogPostProps {
    blog: IBlog
}

export interface IBlog {
    id: number | string,
    image: string,
    date: number,
    month: string,
    title: string,
    name: string,
    direction: string,
    text: string
}


export interface ILoginSchema {
    name?: string,
    email?: string,
    subject?: string,
    company?: string,
    message?: string,
}

export interface IContactKeys {
    [key: string]: Array<IPropsContact>
}

export interface IPropsContact {
    id: string | number,
    icon?: IconProp,
    title?: string,
    firstExample?: string,
    secondExample?: string,
    name?: string,
    component?: string,
    autoFocus?: boolean,
    autoComplete?: string,
    type?: string,
    placeholder?: string
}
