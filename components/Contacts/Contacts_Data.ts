import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const CONTACTS_DATA = {
    "templates": [
        {
            "id": "1",
            "icon": faMapMarkerAlt,
            "title": "Address",
            "firstExample": "312, 7th Ave, New York",
            "secondExample": "NY 101200, United States of America"
        },
        {
            "id": "2",
            "icon": faMobileAlt,
            "title": "Hotline (24x7)",
            "firstExample": "+65 0052 300, +65 88251",
            "secondExample": "210 +88 01723 511 340"
        },
        {
            "id": "3",
            "icon": faEnvelope,
            "title": "E-mail",
            "firstExample": "shapedtheme@gmail.com",
            "secondExample": "khalilkode@gmail.com"
        }
    ],
    "inputs": [ 
        {
            "id": "1",
            "name": "name",
            "component": "input",
            "autoFocus": true,
            "autoComplete": "true",
            "type": "text",
            "placeholder": "Your name"
        },
        {
            "id": "2",
            "name": "email",
            "component": "input",
            "autoFocus": false,
            "autoComplete": "true",
            "type": "email",
            "placeholder": "Your e-mail"
        },
        {
            "id": "3",
            "name": "subject",
            "component": "input",
            "autoFocus": false,
            "autoComplete": "true",
            "type": "text",
            "placeholder": "Your subject"
        },
        {
            "id": "4",
            "name": "company",
            "component": "input",
            "autoFocus": false,
            "autoComplete": "true",
            "type": "text",
            "placeholder": "Company name"
        },
        {
            "id": "5",
            "name": "message",
            "component": "textarea",
            "autoFocus": false,
            "autoComplete": "null",
            "type": null,
            "placeholder": "Write your message"
        }
    ]
}