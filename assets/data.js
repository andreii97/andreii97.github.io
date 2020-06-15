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
      "value": "andrei.ionescu49@yahoo.com"
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
          "timeRange": "March 2019 - February 2020: ",
          "value": "Working student in IT Operations, Vilua Healthcare GmBh"
        },
        {
          "timeRange": "March 2020-: ",
          "value": "Working student in Backend Developement, Vilua Healthcare GmBh"
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
          "language": "JavaScript",
          "confidence": 40
        },
        {
          "language": "Java",
          "confidence": 50
        },
        {
          "language": "Python",
          "confidence": 30
        },
        {
          "language": "Microsoft Office",
          "confidence": ""
        },
        {
          "language": "HTML",
          "confidence": 70
        }

      ]
    }
  ],
  "contact": [
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