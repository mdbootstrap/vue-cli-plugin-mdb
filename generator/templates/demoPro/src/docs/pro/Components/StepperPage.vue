<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Stepper</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/stepper/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <h2>Registration form with steps</h2>

      <h2 class="text-center font-weight-bold pt-4 pb-5 mb-5"><strong>Registration form</strong></h2>
      <mdb-stepper buttons>
        <mdb-step name="Basic Information"
            :far="true"
            icon="folder-open"
            slot="content">
          <h3 class="font-weight-bold pl-0 my-4"><strong>Basic Information</strong></h3>
          <mdb-input label="Email"/>
          <mdb-input label="Username"/>
          <mdb-input label="Password"/>
          <mdb-input label="Repeat Password"/>
        </mdb-step>
        <mdb-step name="Personal Data"
              icon="pencil-alt"
              slot="content">
          <h3 class="font-weight-bold pl-0 my-4"><strong>Personal Data</strong></h3>
          <mdb-input label="First Name"/>
          <mdb-input label="Second Name"/>
          <mdb-input label="Surname"/>
          <mdb-textarea label="Address"/>
        </mdb-step>
        <mdb-step name="Terms and Conditions"
              :far="true"
              icon="image"
              slot="content">
          <h3 class="font-weight-bold pl-0 my-4"><strong>Terms and conditions</strong></h3>
          <mdb-input type="checkbox" id="checkbox1" label="I agree to the terms and conditions" />
          <mdb-input type="checkbox" id="checkbox2" label="I want to receive newsletter" />

        </mdb-step>
        <mdb-step name="Finish"
              icon="check"
              slot="content">
          <h3 class="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
          <h2 class="text-center font-weight-bold my-4">Registration completed!</h2>
        </mdb-step>
      </mdb-stepper>

      <hr class="my-5"/>
      <h2>Vertical registration form with steps</h2>

      <mdb-stepper vertical buttons>
        <mdb-step name="Basic Information"
              :far="true"
              icon="folder-open"
              slot="content">
          <h3 class="font-weight-bold pl-0 my-4"><strong>Basic Information</strong></h3>
          <mdb-input label="Email"/>
          <mdb-input label="Username"/>
          <mdb-input label="Password"/>
          <mdb-input label="Repeat Password"/>
        </mdb-step>
        <mdb-step name="Personal Data"
              icon="pencil-alt"
              slot="content">
          <h3 class="font-weight-bold pl-0 my-4"><strong>Personal Data</strong></h3>
          <mdb-input label="First Name"/>
          <mdb-input label="Second Name"/>
          <mdb-input label="Surname"/>
          <mdb-textarea label="Address"/>
        </mdb-step>
        <mdb-step name="Terms and Conditions"
              :far="true"
              icon="heart"
              slot="content">
          <h3 class="font-weight-bold pl-0 my-4"><strong>Terms and conditions</strong></h3>
          <mdb-input type="checkbox" id="checkbox1" label="I agree to the terms and conditions" />
          <mdb-input type="checkbox" id="checkbox2" label="I want to receive newsletter" />

        </mdb-step>
        <mdb-step name="Finish"
              icon="check"
              slot="content">
          <h3 class="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
          <h2 class="text-center font-weight-bold my-4">Registration completed!</h2>
        </mdb-step>
      </mdb-stepper>

      <hr class="my-5"/>
      <h2>Steps within form</h2>

      <mdb-col xl="6" lg="7" md="10">

        <mdb-card>
          <mdb-card-body>
            <h2 class="text-center font-weight-bold pt-4 pb-5"><strong>Steps form example</strong></h2>

            <mdb-stepper within buttons>
              <mdb-step name="Step 1" slot="content">
                <h3 class="font-weight-bold pl-0 my-4"><strong>Step 1</strong></h3>
                <mdb-input label="First Name"/>
                <mdb-input label="Second Name"/>
                <mdb-textarea label="Address"/>
              </mdb-step>
              <mdb-step name="Step 2" slot="content">
                <h3 class="font-weight-bold pl-0 my-4"><strong>Step 2</strong></h3>
                <mdb-input label="Company Name"/>
                <mdb-input label="Company Addresws"/>
                <mdb-textarea label="Address"/>
              </mdb-step>
              <mdb-step name="Step 3" slot="content">
                <h3 class="font-weight-bold pl-0 my-4"><strong>Step 3</strong></h3>
              </mdb-step>
            </mdb-stepper>
          </mdb-card-body>
        </mdb-card>

      </mdb-col>

      <hr class="my-5"/>
      <h2>Horizontal steppers</h2>

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
            <span class="circle"><i class="fas fa-exclamation"></i></span>
            <span class="label">Third step</span>
          </a>
        </li>
      </mdb-stepper>

        <hr class="my-5"/>
        <h2>Vertical steppers</h2>

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
            <span class="circle"><i class="fas fa-exclamation"></i></span>
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
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbStepper, mdbStep, mdbInput, mdbTextarea, mdbCard, mdbCardBody, mdbIcon } from 'mdbvue';

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
    mdbIcon
  }
};
</script>

<style>

</style>
