<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Form Validation</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/validation/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />

    <section class="demo-section">
      <h4>Material Inputs Validation</h4>
      <!-- Custom styles -->
      <section>
        <form novalidate @submit.prevent="checkForm">
          <div class="form-row">
            <div class="col-md-4">
              <mdb-input type="text" id="validationCustom10" placeholder="First name" label="First name" value="Mark" required validFeedback="Look's good." />
            </div>
            <div class="col-md-4">
              <mdb-input type="text" id="validationCustom11" placeholder="Last name" label="Last name" value="Otto" required validFeedback="Look's good." />
            </div>
            <div class="col-md-4">
              <mdb-input type="text" id="validationCustom12" placeholder="Username" label="Username" required invalidFeedback="Please choose a username." />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <mdb-input type="text" id="validationCustom13" placeholder="City" label="City" required invalidFeedback="Please provide a valid city." />
            </div>
            <div class="col-md-3">
              <mdb-input type="text" id="validationCustom14" placeholder="State" label="State" required invalidFeedback="Please provide a valid state." />
            </div>
            <div class="col-md-3">
              <mdb-input type="text" id="validationCustom15" placeholder="Zip" label="Zip" required invalidFeedback="Please provide a valid zip." />
            </div>
          </div>
          <div class="form-group">
            <mdb-input type="checkbox" class="pl-0" id="invalidCheck" label="Agree to terms and conditions" required invalidFeedback="You must agree before submitting." />
          </div>
          <mdb-btn type="submit">Submit form</mdb-btn>
        </form>
      </section>
    </section>
 
    <section class="demo-section">
      <h4>Outline Inputs Validation</h4>
      <!-- Custom styles -->
      <section>
        <form novalidate @submit.prevent="checkForm">
          <div class="form-row">
            <div class="col-md-4">
              <mdb-input type="text" placeholder="First name" label="First name" value="Mark" required validFeedback="Look's good." outline />
            </div>
            <div class="col-md-4">
              <mdb-input type="text" placeholder="Last name" label="Last name" value="Otto" required validFeedback="Look's good." outline />
            </div>
            <div class="col-md-4">
              <mdb-input type="text" placeholder="Username" label="Username" required invalidFeedback="Please choose a username." outline />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <mdb-input type="text" placeholder="City" label="City" required invalidFeedback="Please provide a valid city." outline />
            </div>
            <div class="col-md-3">
              <mdb-input type="text" placeholder="State" label="State" required invalidFeedback="Please provide a valid state." outline />
            </div>
            <div class="col-md-3">
              <mdb-input type="text" placeholder="Zip" label="Zip" required invalidFeedback="Please provide a valid zip." outline />
            </div>
          </div>
          <div class="form-group">
            <mdb-input type="checkbox" class="pl-0" id="invalidCheck5" label="Agree to terms and conditions" required invalidFeedback="You must agree before submitting." />
          </div>
          <mdb-btn type="submit">Submit form</mdb-btn>
        </form>
      </section>
    </section>

    <section class="demo-section">
      <h4>Browser defaults</h4>
      <!-- Custom styles -->
      <section>
        <form @submit.prevent>
          <div class="form-row">
            <div class="col-md-4">
              <mdb-input type="text" id="validationCustom1" placeholder="First name" label="First name" value="Mark" required validFeedback="Look's good." />
            </div>
            <div class="col-md-4">
              <mdb-input type="text" id="validationCustom2" placeholder="Last name" label="Last name" value="Otto" required validFeedback="Look's good." />
            </div>
            <div class="col-md-4">
              <mdb-input type="text" id="validationCustom3" placeholder="Username" label="Username" required invalidFeedback="Please choose a username." />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <mdb-input type="text" id="validationCustom4" placeholder="City" label="City" required invalidFeedback="Please provide a valid city." />
            </div>
            <div class="col-md-3">
              <mdb-input type="text" id="validationCustom5" placeholder="State" label="State" required invalidFeedback="Please provide a valid state." />
            </div>
            <div class="col-md-3">
              <mdb-input type="text" id="validationCustom6" placeholder="Zip" label="Zip" required invalidFeedback="Please provide a valid zip." />
            </div>
          </div>
          <div class="form-group">
            <mdb-input type="checkbox" class="pl-0" id="invalidCheck2" label="Agree to terms and conditions" required invalidFeedback="You must agree before submitting." />
          </div>
          <mdb-btn type="submit">Submit form</mdb-btn>
        </form>
      </section>
    </section>

    <section class="demo-section">
      <h4>Server side</h4>
      <!-- Custom styles -->
      <section>
        <form class="was-validated" @submit.prevent novalidate>
          <div class="form-row">
            <div class="col-md-4">
              <mdb-input type="text" id="validationCustom21" placeholder="First name" label="First name" value="Mark" required validFeedback="Look's good." />
            </div>
            <div class="col-md-4">
              <mdb-input type="text" id="validationCustom22" placeholder="Last name" label="Last name" value="Otto" required validFeedback="Look's good." />
            </div>
            <div class="col-md-4">
              <mdb-input type="text" id="validationCustom23" placeholder="Username" label="Username" required invalidFeedback="Please choose a username." />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6">
              <mdb-input type="text" id="validationCustom24" placeholder="City" label="City" required invalidFeedback="Please provide a valid city." />
            </div>
            <div class="col-md-3">
              <mdb-input type="text" id="validationCustom25" placeholder="State" label="State" required invalidFeedback="Please provide a valid state." />
            </div>
            <div class="col-md-3">
              <mdb-input type="text" id="validationCustom26" placeholder="Zip" label="Zip" required invalidFeedback="Please provide a valid zip." />
            </div>
          </div>
          <div class="form-group">
            <mdb-input type="checkbox" class="pl-0" id="invalidCheck22" label="Agree to terms and conditions" required invalidFeedback="You must agree before submitting." />
          </div>
          <mdb-btn type="submit">Submit form</mdb-btn>
        </form>
      </section>
    </section>

    <!-- Supported elements -->
    <section class="demo-section">
      <h4>Supported elements</h4>
      <section>
        <form class="was-validated">
          <mdb-input type="checkbox" id="customControlValidation31" required label="Check this custom checkbox" invalidFeedback="Example invalid feedback text" />
          <mdb-input type="radio" class="mt-3" id="option1-1" name="option1" label="Toggle this material radio" required />
          <mdb-input type="radio" id="option1-2" name="option1" label="Or toggle this other material radio" required invalidFeedback="Example invalid feedback text" />
          <mdb-file-input btnColor="primary" />
        </form>
      </section>
    </section>

    <section class="demo-section">
      <h4>Custom validation</h4>
      <section>
        <form @submit.prevent="validateForm" novalidate>
          <mdb-input type="text" id="customInput1" label="First name" v-model="customValues.name" :customValidation="validation.name.validated" :isValid="validation.name.valid" @change="validate('name')" required validFeedback="Look's good." invalidFeedback="Please correct." />
          <mdb-input type="text" id="customInput2" label="Last name" v-model="customValues.lastname" :customValidation="validation.lastname.validated" :isValid="validation.lastname.valid" @change="validate('lastname')" required validFeedback="Look's good." invalidFeedback="Please correct." />
          <mdb-input type="text" id="customInput3" label="Country" v-model="customValues.country" :customValidation="validation.country.validated" :isValid="validation.country.valid" @change="validate('country')" required validFeedback="Look's good." invalidFeedback="Country should be one of those: USA, France, Poland" />
          <mdb-row>
            <mdb-col>
              <mdb-select v-model="city" :customValidation="validation.city.validated" :isValid="validation.city.valid" @change="validate('city', $event)" ref="select" validFeedback="Look's good." invalidFeedback="Please choose Your city." label="City" />
            </mdb-col>
          </mdb-row>
          <mdb-input type="password" id="customInput4" label="Password" v-model="customValues.password" :customValidation="validation.password.validated" :isValid="validation.password.valid" @change="validate('password')" required validFeedback="Look's good." :invalidFeedback="validation.password.invalidFeedback" />
          <mdb-input class="pl-0 mb-3" type="checkbox" id="customInput5" v-model="customValues.checkbox" :customValidation="validation.checkbox.validated" :isValid="validation.checkbox.valid" @change="validate('checkbox')" required label="Check this custom checkbox" validFeedback="Correct" invalidFeedback="Please check me" />
          <mdb-btn type="Submit" size="sm" color="danger">Submit</mdb-btn>
        </form>
      </section>
    </section>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbBtn, mdbIcon, mdbRow, mdbCol, mdbInput, mdbFileInput, mdbSelect } from "mdbvue";

export default {
  name: "ValidationPagePro",
  components: {
    mdbContainer,
    mdbBtn,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbFileInput,
    mdbSelect
  },
  data() {
    return {
      customValues: {
        name: 'Matt',
        lastname: 'Doe',
        country: '',
        city: '',
        password: '',
        checkbox: false
      },
      validation: {
        name: {
          valid: false,
          validated: false
        },
        lastname: {
          valid: false,
          validated: false
        },
        country: {
          valid: false,
          validated: false
        },
        city: {
          valid: false,
          validated: false
        },
        password: {
          valid: false,
          validated: false,
          invalidFeedback: ''
        },
        checkbox: {
          valid: false,
          validated: false
        }
      }
    };
  },
  computed: {
    city() {
      if (this.customValues.country === 'USA') {
        return [
          { text: 'Choose your city', value: null, disabled: true, selected: true },
          { text: 'Boston', value: 'boston' },      
          { text: 'Chicago', value: 'chicago' },      
          { text: 'New York', value: 'newYork' } 
        ];
      } else if (this.customValues.country === 'France') {
        return [
          { text: 'Choose your city', value: null, disabled: true, selected: true },
          { text: 'Paris', value: 'paris' },
          { text: 'Nantes', value: 'nantes' },
          { text: 'Lyon', value: 'lyon' }
        ];
      } else if (this.customValues.country === 'Poland') {
        return [
          { text: 'Choose your city', value: null, disabled: true, selected: true },
          { text: 'Warszawa', value: 'warszawa' },
          { text: 'Kraków', value: 'krakow' },
          { text: 'Gdańsk', value: 'gdansk' },
        ];
      } 
      return [
        { text: 'Type country first', value: null, disabled: true, selected: true }
      ];
    }
  },
  methods: {
    checkForm(event) {
      event.target.classList.add('was-validated');
    },
    validate(key, value) {
      if (key === 'name' || key === 'lastname' || key === 'checkbox') {
        if (this.customValues[key]) {
          this.validation[key].valid = true;
        } else {
          this.validation[key].valid = false;
        }
        this.validation[key].validated = true;
      }
      if (key === 'country') {
        if (['USA', 'France', 'Poland'].includes(this.customValues[key])) {
          this.validation[key].valid = true;
        } else {
          this.validation[key].valid = false;
        }
        this.validation[key].validated = true;
      }
      if (key === 'password') {
        // check length
        if (this.customValues[key].length > 5) {
          // check uppercase
          for (let character of this.customValues[key].split('')) {
            if (character === character.toUpperCase()) {
              this.validation[key].valid = true;
              break;
            }
            this.validation[key].valid = false;
            this.validation[key].invalidFeedback = 'Password should contain at least one uppercase character.';
          }
        } else {
          this.validation[key].valid = false;
          this.validation[key].invalidFeedback = 'Password too short. Type at least 6 letters.';
        }
        this.validation[key].validated = true;
      }
      if (key === 'city') {
        if (value) {
          this.validation[key].valid = true;
        } else {
          this.validation[key].valid = false;
        }
        this.validation[key].validated = true;
      }
    },
    validateForm() {
      let city = this.$refs.select.getValues();
      Object.keys(this.customValues).forEach(key => {
        this.validate(key, ...city);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
