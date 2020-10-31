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
    about: Array<IAboutProps>
}

export interface IAboutProps {
    description: Array<IAboutDescription>,
    team: Array<IAboutTeam>
}

export interface IAboutDescription {
    id: number,
    title: string
}

export interface IAboutTeam {
    id: number,
    image: string,
    name: string,
    position: string,
    social: string
}


export interface WorksPage {
    works: Array<IAboutProps>
}

export interface IWorksProps {
    description: Array<IWorksDirections>,
    team: Array<IWorksCard>
}

export interface IWorksDirections {
    id: number,
    direction: string
}

export interface IWorksCard {
    id: number,
    image: string,
    title: string,
    direction: string
}