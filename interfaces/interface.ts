export interface IWrapper {
    children: any,
    title?: string
}

export interface ServicesProps {
    services: IServices[]
}

export interface IServices {
    id: string | number,
    logo: string,
    title: string,
    subtitle: string
}

export interface AboutPage {
    about: IAboutProps[]
}

export interface IAboutProps {
    description: AboutDescription[],
    team: AboutTeam[]
}

export interface AboutDescription {
    id: string | number,
    title: string
}

export interface AboutTeam {
    id: string | number,
    image: string,
    name: string,
    position: string,
    social: string
}