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
    about: IAboutProps
}

export interface IAboutProps {
    [key: string]: Array<IAboutDescription>
}

export interface IAboutDescription {
    title?: string
}

export interface IAboutTeam {
    image?: string,
    name?: string,
    position?: string,
    social?: string
}

export interface IPropsAbout extends IAboutDescription, IAboutTeam{
    id: number
}


export interface WorksPage {
    works: Array<IWorksProps>
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