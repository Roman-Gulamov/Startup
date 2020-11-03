import Axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { AppWrapper } from '../components/AppWrapper';
import { FormMap } from '../components/Contacts/FormMap';
import { CONTACTS_DATA } from '../components/Contacts/Contacts_Data';

import { 
    Wrapper,
    ContactTemplates,
    TemplatesItem,
    ItemHeader,
    HeaderTitle,
    ItemText,
    ContactForm } from '../styles/Contact';
import { send } from "process";


const Contact = (): JSX.Element => {
    const [sendStatus, setSendStatus] = useState<string>('Send message');

    const clearAfter = (resetForm: any) => {
        resetForm({ 
            values: '' 
        })

        setTimeout(() => {
            setSendStatus('Send message');
        }, 2000);
    }

    const submitForm = (values: object, resetForm: any) => {
        const axios: AxiosInstance = Axios.create();

        axios.interceptors.request.use(
        (config: AxiosRequestConfig): AxiosRequestConfig => {
            setSendStatus('Sending...');
            return config; 
        }); // Before send
    

        axios.interceptors.response.use(
        (response: AxiosResponse<object>): any | never => {
            if (response.status === 200) {
                setSendStatus('Mail sent');
                clearAfter(resetForm);
            }
        }, 
        (error: string) => {
            if (error) {
                setSendStatus('Error sending');
                clearAfter(resetForm)
                return Promise.reject(error);
            }
        }) // Submission result

        axios.post("https://formspree.io/xbjpredk", {...values}) // Submitting
    }

    return (
        <AppWrapper title='| Contact'>
            <Wrapper>
                <ContactTemplates>
                    {CONTACTS_DATA.templates.map(({ 
                        id, 
                        icon, 
                        title, 
                        firstExample, 
                        secondExample 
                    }) =>
                        <TemplatesItem key={id}>
                            <ItemHeader>
                                <FontAwesomeIcon icon={icon} size="lg" />
                            </ItemHeader>
                            <ItemText>
                                <HeaderTitle>{title}</HeaderTitle>
                                <span>{firstExample}</span>
                                <span>{secondExample}</span>
                            </ItemText>
                        </TemplatesItem>
                    )}
                </ContactTemplates>
                <ContactForm>
                    <FormMap 
                        submitForm = {submitForm}
                        sendStatus={sendStatus}
                    />
                </ContactForm>
            </Wrapper>
        </AppWrapper>
    )
}

export default Contact;   