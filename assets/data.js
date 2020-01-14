export default {
  "headTitle": "Andrei Ionescu",
  "pageTitle": "CV",
  "details": [
    "Profile",
    {
      "imgSrc": "./assets/bild.JPG",
      "imgLink": "https://en.wikipedia.org/wiki/Andrei_(surname)"      
    },
    {
      "label": "Name: ",
      "value": "Andrei Ionescu"
    },
    {
      "label": "Date of birth: ",
      "value": "16th May 1997"
    },
    {
      "label": "Place of birth: ",
      "value": "Bucharest"
    },
    {
      "label": "Address: ",
      "value": "Berlin-Steglitz"
    },
    {
      "label": "E-Mail: ",
      "value": "andrei.ionescu@web.tu-berlin.de"
    }
  ],
  "vita": [
    {
      "title": "Education",
      "entries": [
        {
          "timeRange": "2017-:",
          "value": "Bachelor Media and Computer Science, TU Berlin"
        },
      ]
    },
    {
      "title": "Career",
      "entries": [
        {
          "timeRange": "March 2019-: ",
          "value": "Working student in IT Operations, Vilua Healthcare GmBh"
        },
        "..."
      ]
    },
    {
      "title": "Achievements",
      "entries": [
        "...",
        "..."
      ]
    },
    {
      "title": "PC/Programming skills",
      "entries": [
        {
          "language": "Vue.js",
          "confidence": 30
        },
        {
          "language": "HTML",
          "confidence": 100
        },
        {
          "language": "C",
          "confidence": 90
        },
        {
          "language": "JavaScript",
          "confidence": 75
        },
        {
          "language": "Python",
          "confidence": 50
        },
        {
          "language": "Microsoft Office",
          "confidence": 50
        }

      ]
    }
  ],
  "contact": [
    {
      "title": "Newsletter",
      "formName": "newsletter",
      "inputs": [
        {
          "name": "newsletter-email",
          "type": "email",
          "label": "E-Mail-Adresse: ",
          "placeholder": "your.email@example.com",
          "required": true
        }
      ],
      "submitButtonLabel": "Newsletter bestellen"
    },
    {
      "title": "Callback",
      "formName": "rueckruf",
      "inputs": [
        {
          "name": "rueckruf-phone",
          "type": "tel",
          "label": "Phone number: ",
          "required": true
        },
        {
          "name": "rueckruf-date",
          "type": "date",
          "label": "Date: ",
          "required": true
        },
        {
          "name": "rueckruf-time",
          "type": "time",
          "label": "Time: ",
          "required": true
        }
      ],
      "submitButtonLabel": "Um Rückruf bitten"
    },
    {
      "title": "Contact",
      "formName": "kontaktformular",
      "inputs": [
        {
          "name": "kontaktformular-name",
          "type": "text",
          "label": "Name: ",
          "placeholder": "Murat Mustermann",
          "required": true
        },
        {
          "name": "kontaktformular-email",
          "type": "email",
          "label": "E-Mail-Address: ",
          "placeholder": "your.email@example.com",
          "required": true
        },
        {
          "name": "kontaktformular-betreff",
          "type": "text",
          "label": "Concern: ",
          "placeholder": "Betreff",
          "required": false,
          "maxLength": 140
        },
        {
          "name": "kontaktformular-nachricht",
          "type": "textarea",
          "label": "Message: ",
          "placeholder": "Geben Sie hier Ihre Nachricht ein ...",
          "required": true,
          "maxLength": 230
        }
      ],
      "submitButtonLabel": "Send message"
    }
  ]
}