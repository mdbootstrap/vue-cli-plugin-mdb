<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Stepper</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/components/stepper/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <section class="demo-section">
        <h4>Registration form with steps</h4>
        <section class="p-5">
          <mdb-stepper buttons>
            <mdb-step name="Basic Information" :far="true" icon="folder-open" slot="content" :number="1">
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Basic Information</strong>
              </h3>
              <mdb-input label="Email" />
              <mdb-input label="Username" />
              <mdb-input label="Password" />
              <mdb-input label="Repeat Password" />
            </mdb-step>
            <mdb-step name="Personal Data" icon="pencil-alt" slot="content" :number="2">
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Personal Data</strong>
              </h3>
              <mdb-input label="First Name" />
              <mdb-input label="Second Name" />
              <mdb-input label="Surname" />
              <mdb-textarea label="Address" />
            </mdb-step>
            <mdb-step name="Terms and Conditions" :far="true" icon="image" slot="content" :number="3"> 
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Terms and conditions</strong>
              </h3>
              <mdb-input
                type="checkbox"
                id="checkbox1"
                label="I agree to the terms and conditions"
              />
              <mdb-input type="checkbox" id="checkbox2" label="I want to receive newsletter" />
            </mdb-step>
            <mdb-step name="Finish" icon="check" slot="content" :number="4">
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Finish</strong>
              </h3>
              <h2 class="text-center font-weight-bold my-4">Registration completed!</h2>
            </mdb-step>
          </mdb-stepper>
        </section>
      </section>
      <section class="demo-section">
        <h4>Vertical registration form with steps</h4>
        <section class="p-5">
          <mdb-stepper vertical buttons>
            <mdb-step name="Basic Information" :far="true" icon="folder-open" slot="content" :number="1">
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Basic Information</strong>
              </h3>
              <mdb-input label="Email" />
              <mdb-input label="Username" />
              <mdb-input label="Password" />
              <mdb-input label="Repeat Password" />
            </mdb-step>
            <mdb-step name="Personal Data" icon="pencil-alt" slot="content" :number="2">
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Personal Data</strong>
              </h3>
              <mdb-input label="First Name" />
              <mdb-input label="Second Name" />
              <mdb-input label="Surname" />
              <mdb-textarea label="Address" />
            </mdb-step>
            <mdb-step name="Terms and Conditions" :far="true" icon="heart" slot="content" :number="3">
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Terms and conditions</strong>
              </h3>
              <mdb-input
                type="checkbox"
                id="checkbox1"
                label="I agree to the terms and conditions"
              />
              <mdb-input type="checkbox" id="checkbox2" label="I want to receive newsletter" />
            </mdb-step>
            <mdb-step name="Finish" icon="check" slot="content" :number="4">
              <h3 class="font-weight-bold pl-0 my-4">
                <strong>Finish</strong>
              </h3>
              <h2 class="text-center font-weight-bold my-4">Registration completed!</h2>
            </mdb-step>
          </mdb-stepper>
        </section>
      </section>
      <section class="demo-section">
        <h4>Steps within form</h4>
        <section class="p-5">
          <mdb-col xl="6" lg="7" md="10">
            <mdb-card>
              <mdb-card-body>
                <h2 class="text-center font-weight-bold pt-4 pb-5">
                  <strong>Steps form example</strong>
                </h2>

                <mdb-stepper within buttons>
                  <mdb-step name="Step 1" slot="content">
                    <h3 class="font-weight-bold pl-0 my-4">
                      <strong>Step 1</strong>
                    </h3>
                    <mdb-input label="First Name" />
                    <mdb-input label="Second Name" />
                    <mdb-textarea label="Address" />
                  </mdb-step>
                  <mdb-step name="Step 2" slot="content">
                    <h3 class="font-weight-bold pl-0 my-4">
                      <strong>Step 2</strong>
                    </h3>
                    <mdb-input label="Company Name" />
                    <mdb-input label="Company Addresws" />
                    <mdb-textarea label="Address" />
                  </mdb-step>
                  <mdb-step name="Step 3" slot="content">
                    <h3 class="font-weight-bold pl-0 my-4">
                      <strong>Step 3</strong>
                    </h3>
                  </mdb-step>
                </mdb-stepper>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </section>
      </section>
      <section class="demo-section">
        <h4>Stepper with validation</h4>
        <section class="p-5">
            <mdb-card class="indigo lighten-5 pb-5">
              <mdb-card-body>
                <mdb-stepper
                  class="pt-5"
                  buttons
                  validation
                  :validatedSteps="validatedSteps"
                  @validate="validate"
                >
                  <mdb-step name="Personal Information" slot="content" icon="user" :number="1">
                    <h3 class="font-weight-bold pt-3 pl-0 my-4">
                      <mdb-card-title>Personal Information</mdb-card-title>
                    </h3>
                    <mdb-input required label="First Name" v-model="form[0].name" />
                    <mdb-input required label="Second Name" v-model="form[0].surname" />
                    <mdb-input required label="Address" v-model="form[0].address" />
                  </mdb-step>
                  <mdb-step name="Company Information" slot="content" icon="pen" :number="2">
                    <h3 class="font-weight-bold pt-3 pl-0 my-4">
                      <mdb-card-title>Company Information</mdb-card-title>
                    </h3>
                    <mdb-input required label="Company Name" v-model="form[1].company" />
                    <mdb-input required label="Company Address" v-model="form[1].address" />
                  </mdb-step>
                  <mdb-step name="Terms and conditions" slot="content" icon="check" :number="3">
                    <h3 class="font-weight-bold pt-3 pl-0 my-4">
                      <mdb-card-title>Terms and conditions</mdb-card-title>
                    </h3>
                    <mdb-input
                      type="checkbox"
                      id="checkbox3"
                      required
                      v-model="form[2].condition"
                      label="I agree to the terms and conditions"
                    />
                    <mdb-input type="checkbox" id="checkbox4" label="I want to receive newsletter" />
                  </mdb-step>
                </mdb-stepper>
              </mdb-card-body>
            </mdb-card>
        </section>
      </section>

      <section class="demo-section">
        <h4>Horizontal stepper</h4>
        <section class="p-5">
          <mdb-stepper simpleH>
            <li class="completed" slot="simple">
              <a href="#!">
                <span class="circle">1</span>
                <span class="label">First step</span>
              </a>
            </li>
            <li class="active" slot="simple">
              <a href="#!">
                <span class="circle">2</span>
                <span class="label">Second step</span>
              </a>
            </li>
            <li class="warning" slot="simple">
              <a href="#!">
                <span class="circle">
                  <i class="fas fa-exclamation"></i>
                </span>
                <span class="label">Third step</span>
              </a>
            </li>
          </mdb-stepper>
        </section>
      </section>

      <section class="demo-section">
        <h4>Vertical stepper</h4>
        <section class="p-5">
          <mdb-stepper simpleV>
            <li class="completed" slot="simple">
              <a>
                <span class="circle">1</span>
                <span class="label">First step</span>
              </a>
            </li>
            <li class="active" slot="simple">
              <a>
                <span class="circle">2</span>
                <span class="label">Second step</span>
              </a>
              <div class="step-content grey lighten-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere iusto quaerat vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore nostrum ut, nobis porro sapiente.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore error excepturi veniam nemo repellendus, distinctio soluta vitae at sit saepe. Optio eaque quia excepturi adipisci pariatur totam, atque odit fugiat.</p>
                <p>Deserunt voluptatem illum quae nisi soluta eum perferendis nesciunt asperiores tempore saepe reiciendis, vero quod a dolor corporis natus qui magni quas fuga rem excepturi laboriosam. Quisquam expedita ab fugiat.</p>
              </div>
            </li>
            <li class="warning" slot="simple">
              <a>
                <span class="circle">
                  <i class="fas fa-exclamation"></i>
                </span>
                <span class="label">Third step</span>
              </a>
            </li>
            <li slot="simple">
              <a>
                <span class="circle">4</span>
                <span class="label">Fourth step</span>
              </a>
            </li>
          </mdb-stepper>
        </section>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbStepper,
  mdbStep,
  mdbInput,
  mdbTextarea,
  mdbCard,
  mdbCardBody,
  mdbIcon,
  mdbCardTitle
} from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbStepper,
    mdbStep,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody,
    mdbIcon,
    mdbCardTitle
  },
  data() {
    return {
      validatedSteps: {},
      form: [{
        name: '',
        surname: '',
        address: ''
      },
      {
        company: '',
        address: ''
      },
      {
        condition: false
      }
      ]
    };
  },
  methods: {
    checkForm(form) {
      return Object.keys(form).length === Object.keys(form)
        .filter(key => form[key].length > 0).length;
    },
    validate(e) {
      if (e === 3) {
        this.validatedSteps[e] = this.form[e - 1].condition;
      }
      else if (this.checkForm(this.form[e - 1])) {
        this.validatedSteps[e] = true;
      }
      else {
        this.validatedSteps[e] = false;
      }
    }
  }
};
</script>

<style>
</style>
