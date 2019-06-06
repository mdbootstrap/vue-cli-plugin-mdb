<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Loaders / Spinners</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/spinners/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <section class="demo-section">
      <h4>Material loader</h4>
      <section>
        <mdb-spinner />
      </section>
    </section>
    <section class="demo-section">
      <h4>Loader colors</h4>
      <section>
        <mdb-spinner big color="red" />
        <mdb-spinner big color="blue" />
        <mdb-spinner big color="yellow" />
        <mdb-spinner big color="green" />
        <mdb-spinner big multicolor />
      </section>
    </section>
    <section class="demo-section">
      <h4>Sizing</h4>
      <section>
        <mdb-spinner big />
        <mdb-spinner />
        <mdb-spinner small />
      </section>
    </section>
    <section class="demo-section">
      <h4>Speed</h4>
      <section>
        <mdb-spinner big crazy />
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbSpinner } from 'mdbvue';

export default {
  name: 'SpinnersPagePro',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbSpinner
  }
};
</script>

<style scoped>
</style>
