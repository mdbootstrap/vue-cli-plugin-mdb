<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Scrollbar</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/scroll/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <h2 class="font-weight-bold mb-4">Scrollbar within form</h2>
    <mdb-row>
      <mdb-col class="mb-4" md="10" lg="8" xl="5">
        <section class="form-elegant scrollbar-light-blue">
          <mdb-card>
            <mdb-card-body class="mx-4">
              <div class="text-center">
                <h3 class="dark-grey-text mb-5"><strong>Sign in</strong></h3>
              </div>
              <mdb-input label="Your email" type="email"/>
              <mdb-input label="Your password" type="password" containerClass="mb-0"/>
              <p class="font-small blue-text d-flex justify-content-end pb-3">Forgot <a href="#" class="blue-text ml-1"> Password?</a></p>
              <div class="text-center mb-3">
                <mdb-btn type="button" gradient="blue" rounded class="btn-block z-depth-1a">Sign in</mdb-btn>
              </div>
              <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
              <div class="row my-3 d-flex justify-content-center">
                <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab icon="facebook-f" class="blue-text text-center"/></mdb-btn>
                <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab icon="twitter" class="blue-text"/></mdb-btn>
                <mdb-btn type="button" color="white" rounded class="z-depth-1a"><mdb-icon fab icon="google-plus-g" class="blue-text"/></mdb-btn>
              </div>
            </mdb-card-body>
            <mdb-modal-footer class="mx-5 pt-3 mb-1">
              <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" class="blue-text ml-1"> Sign Up</a></p>
            </mdb-modal-footer>
          </mdb-card>
        </section>
      </mdb-col>

      <mdb-col class="mb-4" md="10" lg="8" xl="5">
        <section class="form-dark scrollbar-dusty-grass thin square">
          <mdb-card class="card-image" :style="{'backgroundImage': 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)'}">
            <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
              <div class="text-center">
                <h3 class="white-text mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a class="green-text font-weight-bold"><strong> UP</strong></a></h3>
              </div>
              <mdb-input label="Your email" type="text"/>
              <mdb-input label="Your password" type="password"/>
              <mdb-input class="my-5" type="checkbox" id="defaultCheck17" label="Accept the Terms and Conditions" />
              <mdb-row class="d-flex align-items-center mb-4">
                <div class="text-center mb-3 col-md-12">
                  <mdb-btn color="success" rounded type="button" class="btn-block z-depth-1">Sign in</mdb-btn>
                </div>
              </mdb-row>
              <mdb-col md="12">
                <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="green-text ml-1 font-weight-bold"> Log in</a></p>
              </mdb-col>
            </div>
          </mdb-card>
        </section>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbInput, mdbBtn, mdbIcon, mdbCard, mdbCardBody, mdbModalFooter } from 'mdbvue';

export default {
  name: 'FormsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbBtn,
    mdbIcon,
    mdbCard,
    mdbCardBody,
    mdbModalFooter
  }
};
</script>

<style scoped>
.form-elegant,
.form-dark {
  height: 500px;
  overflow-y: scroll;
}

.form-elegant .font-small {
  font-size: 0.8rem;
}

.form-elegant .z-depth-1a {
  -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
  box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
}

.form-elegant .z-depth-1-half,
.form-elegant .btn:hover {
  -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
  box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
}

.form-dark .font-small {
  font-size: 0.8rem;
}

.form-dark [type="radio"]+label,
.form-dark [type="checkbox"]+label {
  font-size: 0.8rem;
}


.form-dark input[type="checkbox"]:checked+label:before {
  top: -4px;
  left: -3px;
  width: 12px;
  height: 22px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent #00c851 #00c851 transparent;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.scrollbar-light-blue::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.scrollbar-light-blue::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.scrollbar-light-blue::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #82B1FF;
}

.scrollbar-dusty-grass::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.scrollbar-dusty-grass::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.scrollbar-dusty-grass::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-image: -webkit-linear-gradient(330deg, #d4fc79 0%, #96e6a1 100%);
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
}

.square::-webkit-scrollbar-track {
  border-radius: 0 !important;
}

.square::-webkit-scrollbar-thumb {
  border-radius: 0 !important;
}

.thin::-webkit-scrollbar {
  width: 6px;
}
</style>
<style>
.form-dark [type="checkbox"]+label:before {
  top: 2px;
  width: 15px;
  height: 15px;
}

.form-dark input[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #00C851;
  -webkit-box-shadow: 0 1px 0 0 #00C851;
  box-shadow: 0 1px 0 0 #00C851;
}

.form-dark input[type=text]:focus:not([readonly])+label {
  color: #fff;
}

.form-dark input[type=password]:focus:not([readonly]) {
  border-bottom: 1px solid #00C851;
  -webkit-box-shadow: 0 1px 0 0 #00C851;
  box-shadow: 0 1px 0 0 #00C851;
}

.form-dark input[type=password]:focus:not([readonly])+label {
  color: #fff;
}

.form-dark input[type="checkbox"]+label:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
  z-index: 0;
  border: 1.5px solid #fff;
  border-radius: 1px;
  margin-top: 2px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.form-dark .md-form label {
  color: #fff;
}
</style>
