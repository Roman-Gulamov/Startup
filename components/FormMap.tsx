import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from './LoginSchema';

import { CONTACTS_DATA } from './Contacts_Data';
import { findValue } from './findValue';
import { IFormMap } from '../interfaces/styledInterface';

import { 
    FormItem,
    FormSend,
    FormButton,
    FormNotice } from '../styles/Contact';


export const FormMap = ({ submitForm, sendStatus }: IFormMap): JSX.Element => {
    return (
        <Formik
            initialValues={{ username: '', subject: '', company: '', email: '', message: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values, {resetForm}) => submitForm(values, resetForm)}
        >
            {({ isSubmitting, values }) => (
                <Form action="https://formspree.io/xbjpredk" method="POST">
                    {CONTACTS_DATA.inputs.map(({ 
                        id, 
                        name, 
                        component, 
                        autoFocus, 
                        autoComplete, 
                        type, 
                        placeholder 
                    }) =>
                        <FormItem key={id} data-name={name}>
                            <Field
                                component={component}
                                name={name}
                                type={type}
                                autoFocus={autoFocus}
                                autoComplete={autoComplete}
                                value={findValue(name, values)}
                                placeholder={placeholder}
                            />
                            <ErrorMessage component="span" name={name} />
                        </FormItem>
                    )}
                    <FormSend>
                        <FormButton 
                            type='submit' 
                            disabled={isSubmitting}
                        >{sendStatus}
                        </FormButton>
                        <FormNotice>
                            <span>* </span> 
                            We’ll contact you as as possible. We don’t reply on Monday.
                        </FormNotice>
                    </FormSend>
                </Form>
            )}
        </Formik>
    )
}