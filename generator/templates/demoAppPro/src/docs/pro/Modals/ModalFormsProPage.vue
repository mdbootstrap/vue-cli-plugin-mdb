<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Modal forms</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/modals/basic/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>

    <hr />
    <h2>Cascading modal login / register</h2>
    <mdb-btn rounded color="default" @click.native="cascading = true">launch cascading register / login modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal :show="cascading" @close="cascading = false" cascade tabs>
      <mdb-tab tabs justify class="light-blue darken-3">
        <mdb-tab-item :active="tabs==1" @click.native.prevent="tabs = 1"><mdb-icon icon="user" class="mr-1"/>Login</mdb-tab-item>
        <mdb-tab-item :active="tabs==2" @click.native.prevent="tabs = 2"><mdb-icon icon="user-plus" class="mr-1"/>Register</mdb-tab-item>
      </mdb-tab>
      <mdb-modal-body class="mx-3" v-if="tabs==1">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
        <div class="mt-2 text-center">
          <mdb-btn color="info">Log in <mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer center v-if="tabs==1">
        <div class="options text-center text-md-right mt-1">
          <p>Not a member? <a href="#" @click="tabs=2">Sign Up</a></p>
          <p>Forgot <a href="#">Password?</a></p>
        </div>
        <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
      </mdb-modal-footer>
      <mdb-modal-body class="mx-3" v-if="tabs==2">
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password" class="mb-5"/>
        <mdb-input label="Repeat password" icon="lock" type="password"/>
        <div class="mt-2 text-center">
          <mdb-btn color="info">Sign Up<mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer center v-if="tabs==2">
        <div class="options text-center text-md-right mt-1">
          <p>Already have an account? <a href="#" @click="tabs=1">Log in</a></p>
        </div>
        <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <hr />
    <h2>Modal with avatar</h2>
    <mdb-btn rounded color="default" @click.native="avatar = true">launch avatar modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal :show="avatar" @close="avatar = false" avatar size="sm">
      <mdb-modal-header :close="false">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg" alt="avatar" class="rounded-circle img-responsive">
      </mdb-modal-header>
      <mdb-modal-body class="mb-1 text-center">
        <h5 class="mt-1 mb-2">Maria Doe</h5>
        <mdb-input label="Enter password" type="password"/>
        <div class="mt-5 text-center">
          <mdb-btn color="cyan" icon="sign-in-alt" iconRight iconClass="ml-1">Login</mdb-btn>
        </div>
      </mdb-modal-body>
    </mdb-modal>

      <hr />
      <h2>Elagant modal login</h2>

    <mdb-btn rounded color="default" @click.native="elegant = true">launch elegant login modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal :show="elegant" @close="elegant = false" elegant>
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h3" bold class="w-100 my-3">Sign in</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3">
        <mdb-input label="Your email" type="email" class="mb-5 grey-text"/>
        <mdb-input label="Enter password" type="password" class="pb-3"></mdb-input>
        <p class="font-small blue-text d-flex justify-content-end mb-5">
          Forgot <a class="ml-1"> Password?</a>
        </p>
        <div class="text-center mb-3">
          <mdb-btn gradient="blue" block rounded>Sign In</mdb-btn>
        </div>
        <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with:</p>
        <mdb-row center class="my-3">
          <mdb-btn color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab color="info" icon="facebook-f"/></mdb-btn>
          <mdb-btn color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab color="info" icon="twitter"/></mdb-btn>
          <mdb-btn color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab color="info" icon="google-plus-g"/></mdb-btn>
        </mdb-row>
      </mdb-modal-body>
      <mdb-modal-footer class="mx-5 pt-3 mb-1" end>
        <p class="font-small grey-text">Not a member? <a class="blue-text ml-1">Sign Up</a></p>
      </mdb-modal-footer>
    </mdb-modal>

    <hr />
    <h2>Dark modal register</h2>

    <mdb-btn rounded color="default" @click.native="dark = true">launch dark register modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>

    <mdb-modal :show="dark" @close="dark = false" dark bgSrc="https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg">
      <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
        <mdb-modal-header class="text-center pb-4">
          <mdb-modal-title tag="h3" bold class="w-100 my-3 white-text"><strong>SIGN</strong> <a class="green-text font-weight-bold"><strong>UP</strong></a>
          </mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <mdb-input label="Your email" type="email" class="mb-5" labelColor="white"/>
          <mdb-input label="Your password" type="password" class="pb-3" labelColor="white"/>
          <mdb-input type="checkbox" id="checkbox1" label="Accept the" labelClass="font-small" labelColor="white" class="pb-4" wrapperClass="pl-0">
            <a href="#" class="green-text font-weight-bold font-small mt-2" style="margin-left: -3rem"> Terms and Conditions</a>
          </mdb-input>
          <mdb-row center class="mb-5">
            <mdb-col col="3" md="12">
            <mdb-btn block color="success" rounded>Sign up</mdb-btn>
            </mdb-col>
          </mdb-row>
          <mdb-row end class="my-3 pt-3 white-text font-small">
            Have an account? <a href="#" class="green-text ml-1 font-weight-bold"> Log in</a>
          </mdb-row>
        </mdb-modal-body>
      </div>
    </mdb-modal>
    
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbInput, mdbTab, mdbTabItem } from 'mdbvue';
export default {
  name:'ModalFormsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbInput,
    mdbTab,
    mdbTabItem
  },
  data() {
    return {
      cascading: false,
      avatar: false,
      tabs: 1,
      isChecked: false,
      dark: false,
      elegant: false
    };
  }
};
</script>
