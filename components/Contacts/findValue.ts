export const findValue = (name: string, values: any) => {
    switch (name) {
        case 'name':
            return values.name;
        case 'email':
            return values.email;
        case 'subject':
            return values.subject;
        case 'company':
            return values.company;
        case 'message':
            return values.message;
        default:
            return null;
    }
}