<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Background Image </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/css/background-image/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />

    <mdb-row>
      <h2 class="mb-3 w-100">Background image layout - live previews</h2>
      <router-link to="/sections/app">
        <mdb-btn tag="a" outline="primary" rounded>first option</mdb-btn>
      </router-link>
      <router-link to="/sections/classic">
        <mdb-btn tag="a" href="" outline="primary" rounded>second option</mdb-btn>
      </router-link>
      <router-link to="/sections/minimalist">
        <mdb-btn tag="a" href="" outline="primary" rounded>third option</mdb-btn>
      </router-link>

    </mdb-row>
    <hr class="mb-4" />
    <mdb-row>
      <h2 class="mb-3 w-100">Background video layout</h2>
      <router-link to="/sections/video">
        <mdb-btn tag="a" href="/sections/video" outline="primary" rounded>see live preview</mdb-btn>
      </router-link>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbBtn } from 'mdbvue';

export default {
  name: 'BackgroundImageProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbBtn
  }
};
</script>

<style>

</style>
