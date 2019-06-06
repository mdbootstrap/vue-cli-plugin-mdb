<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Switch</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/forms/switch/?utm_source=DemoApp&utm_medium=MDBVuePro"
        wavesFixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <hr class="mb-5">

    <section class="demo-section">
      <h4>Material switch</h4>
      <section>
        <mdb-switch></mdb-switch>
      </section>
    </section>
    <section class="demo-section">
      <h4>Checked</h4>
      <section>
        <mdb-switch checked></mdb-switch>
      </section>
    </section>
    <section class="demo-section">
      <h4>Custom labels</h4>
      <section>
        <mdb-switch onLabel="ON" offLabel="OFF"></mdb-switch>
      </section>
    </section>
    <section class="demo-section">
      <h4>Disabled</h4>
      <section>
        <mdb-switch disabled></mdb-switch>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbSwitch } from 'mdbvue';
export default {
  name: 'SwitchProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbSwitch
  }
};
</script>

<style scoped>

</style>