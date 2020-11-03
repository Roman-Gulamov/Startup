import { ILoginSchema } from './interface';

export interface IOpen {
    open: string
}

export interface IPosition {
    position: string
}

export interface IActiveClass {
    activeClass: string
}

export interface IPropsItemImg {
    width: string,
    services?: boolean,
    blog?: boolean
}

export interface IPropsItemInvisible {
    height: string,
    background: string,
    worksProps?: boolean,
    worksPropsFront?: boolean,
    transformFront?: string,
    worksPropsBack?: boolean,
    transformBack?: string,
    aboutProps?: boolean
}

export interface IBlogPost {
    blogPost?: boolean
}

export interface IFormMap {
    submitForm: (values: ILoginSchema, resetForm: any) => any | never
    sendStatus: string
}