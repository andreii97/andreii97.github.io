import Card from "./components/Card.js";
import Navi from "./components/Navi.js";
import cvData from "./assets/data.js";
import ContactForm from "./components/ContactForm.js";

var app = new Vue({
  el: "#app",
  data: {
    cvData: cvData,
    title: cvData.headTitle,
  },
  components: {
    "Card": Card,
    "Navi": Navi,
    "ContactForm": ContactForm,
  },
  methods: {
    headers: function() {
      let headers = document.getElementsByTagName('h3');
      let navBar = document.getElementById('top-navigation');

      for(let i = 0; i < headers.length; i++) {
        console.log(headers[i].innerHTML);

        let navItem = document.createElement('li');
        navItem.className = "nav-item";

        let navInside = document.createElement('a');
        navInside.className = "nav-item nav-link inactive";
        navInside.innerHTML = headers[i].innerHTML;

        navItem.appendChild(navInside);
        navBar.appendChild(navItem);
      }
    }
  },
  mounted: function() {
    this.headers();
  }
})

var app2 = new Vue({
  el: "#app2",
  data: {
    cvData: cvData,
    pageTitle: cvData.pageTitle,
  }
})

