import * as Yup from "yup";
import { ILoginSchema } from '../interfaces/interface';


export const LoginSchema = Yup.object().shape<ILoginSchema>({
    name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u, "Please enter your real name")
        .required("Please enter your name"),
    subject: Yup.string()
        .matches(/^.{1,50}$/u, "Please enter a valid subject name")
        .required("Please enter subject name"),
    company: Yup.string()
        .matches(/^.{1,50}$/u, "Please enter a valid company name")
        .required("Please enter company name"),
    email: Yup.string()
        .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, "Please enter a valid email address")
        .required("Please enter your email"),
    message: Yup.string()
        .min(5, "Please enter a message more than 5 letters")
        .required("Please enter your message")
});