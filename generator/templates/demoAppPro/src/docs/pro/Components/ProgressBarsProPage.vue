<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Progress Bar</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/progress-bar/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-3 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <h4 class="pb-3">Labels</h4>
      <mdb-progress :height="20" :value="25" color="danger">25%</mdb-progress>
      <mdb-progress :height="20" :value="50" color="warning">50%</mdb-progress>
      <mdb-progress :height="20" :value="75" color="success">75%</mdb-progress>
      <h4 class="pt-4 pb-3">Striped</h4>
      <mdb-progress :height="20" :value="25" color="danger" striped />
      <mdb-progress :height="20" :value="50" color="warning" striped />
      <mdb-progress :height="20" :value="75" color="success" striped />
      <h4 class="pt-4 pb-3">Animated stripes</h4>
      <mdb-progress :height="20" :value="25" color="danger" striped animated />
      <mdb-progress :height="20" :value="50" color="warning" striped animated />
      <mdb-progress :height="20" :value="75" color="success" striped animated />
      <h4 class="pt-4 pb-3">Preloaders</h4>
      <mdb-progress bgColor="primary-color-dark" indeterminate />
      <h4 class="pt-4 pb-3">Circles</h4>
      <mdb-row>
        <mdb-col sm="4">
          <mdb-spinner big />
        </mdb-col>
        <mdb-col sm="4">
          <mdb-spinner color="red" />
        </mdb-col>
        <mdb-col sm="4">
          <mdb-spinner small color="yellow" />
        </mdb-col>
      </mdb-row>
      <h4 class="pt-4 pb-3">Crazy circles</h4>
      <mdb-row>
        <mdb-col sm="4">
          <mdb-spinner big crazy />
        </mdb-col>
        <mdb-col sm="4">
          <mdb-spinner color="red" crazy />
        </mdb-col>
        <mdb-col sm="4">
          <mdb-spinner small color="yellow" crazy />
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col sm="4">
          <h4 class="pt-4 pb-3">Multicolor</h4>
          <mdb-spinner multicolor big />
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol, mdbProgress, mdbSpinner, mdbIcon } from 'mdbvue';

export default {
  name: 'ProgressBarsProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbProgress,
    mdbSpinner,
    mdbIcon
  }
};
</script>

<style scoped>
h4 {
  font-weight: bold;
}
</style>
