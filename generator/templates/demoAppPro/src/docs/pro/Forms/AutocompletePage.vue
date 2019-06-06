<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Autocomplete</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/autocomplete/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <h2 class="mb-5">Basic Example</h2>
      <mdb-row>
        <mdb-col md="6" class="mx-auto">
          <mdb-autocomplete
            icon="heart"
            clearClass="fa-lg"
            :data="states"
            label="What is your favorite US state?"
            @input="onInput"
          />
        </mdb-col>
      </mdb-row>

      <hr class="my-5">

      <h2 class="mb-5">Autocomplete within form</h2>

      <mdb-row>
        <mdb-col md="5">
          <mdb-card>
            <mdb-card-body class="mx-4">
              <div class="text-center">
                <h3 class="dark-grey-text mb-5"><strong>Sign up</strong></h3>
              </div>
              <mdb-input label="Your email" type ="email"/>
              <mdb-input label="Your password" type="password" containerClass="mb-0"/>
              <mdb-autocomplete :data="countries" label="Your country" class="pb-3"/>
              <div class="text-center mb-3">
                <mdb-btn type="button" gradient="blue" rounded class="btn-block z-depth-1a">Sign up</mdb-btn>
              </div>
              <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign up with:</p>
              <div class="row my-3 d-flex justify-content-center">
                <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab icon="facebook-f" class="blue-text text-center"/></mdb-btn>
                <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab icon="twitter" class="blue-text"/></mdb-btn>
                <mdb-btn type="button" color="white" rounded class="z-depth-1a"><mdb-icon fab icon="google-plus-g" class="blue-text"/></mdb-btn>
              </div>
            </mdb-card-body>
            <mdb-modal-footer class="mx-5 pt-3 mb-1">
              <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" class="blue-text ml-1"> Sign In</a></p>
            </mdb-modal-footer>
          </mdb-card>
        </mdb-col>
      </mdb-row>

      <hr class="my-5">

      <h2 class="mb-5">Autocomplete within modal</h2>
      <mdb-row>
        <mdb-col md="6" style="margin-right: auto; margin-left: auto">

        <mdb-btn @click.native="showModal = true" rounded>Launch demo modal</mdb-btn>

        <mdb-modal :show="showModal" @close="showModal=false" cascade>
          <mdb-modal-header class="light-blue darken-3 white-text">
              <h4 class="title"><mdb-icon icon="pencil-alt"/> Contact form</h4>
          </mdb-modal-header>
          <mdb-modal-body>
            <mdb-input icon="envelope" label="Your name"/>
            <mdb-input icon="lock" label="Your email"/>
            <mdb-autocomplete icon="tag" label="Subject" :data="subjects"/>
            <mdb-textarea icon="pencil-alt" label="Your message"/>

          <div class="text-center">
            <mdb-btn color="info" class="mb-2 waves-light">Send <mdb-icon icon="send" class="ml-1"></mdb-icon></mdb-btn>
          </div>
          </mdb-modal-body>
        </mdb-modal>

        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbAutocomplete, mdbContainer, mdbRow, mdbCol, mdbInput, mdbTextarea, mdbBtn, mdbCard, mdbCardBody, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbIcon } from 'mdbvue';

export default {
  methods: {
    onInput (val) {
      console.log(val);
    }
  },
  name: 'AutocompletePage',
  components: {
    mdbAutocomplete,
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbInput,
    mdbTextarea,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbIcon,
    mdbModal
  },
  data() {
    return {
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illnois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina mdbIconso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic (CAR)",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Costa Rica",
        "Cote d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kosovo",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia (FYROM)",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (UAE)",
        "United Kingdom (UK)",
        "United States of America (USA)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City (Holy See)",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ],
      subjects: [
        "Where's My Stuff?",
        "Cancel Items or Orders",
        "Returns & Refunds",
        "Shipping Rates & Information",
        "Change Your Payment Method",
        "Manage Your Account Information",
        "About Two-Step Verification",
        "Cancel Items or Orders",
        "Change Your Order Information",
        "Contact Third-Party Sellers",
        "More in Managing Your Orders"
      ],
      showModal: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.font-small {
  font-size: 0.8rem;
}
</style>
