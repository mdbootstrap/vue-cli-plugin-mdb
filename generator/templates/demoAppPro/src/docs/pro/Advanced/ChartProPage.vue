<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Charts</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/charts/#usage-minimalist/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-container class="mt-5">
      <h4>Minimalist charts</h4>
      <mdb-row>
        <mdb-col md="4">
          <div class="d-flex justify-content-center">
            <mdb-simple-chart :value="value" color="#4CAF50">
              {{value}}%
            </mdb-simple-chart>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <mdb-badge color="green">Sales <mdb-icon icon="arrow-circle-up"/></mdb-badge>
          </div>
        </mdb-col>
        <mdb-col md="4">
          <div class="d-flex justify-content-center">
            <mdb-simple-chart :value="value2" color="#F44336">
              {{value2}}%
            </mdb-simple-chart>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <mdb-badge color="red">ROI <mdb-icon icon="arrow-circle-down"/></mdb-badge>
          </div>
        </mdb-col>
        <mdb-col md="4">
          <div class="d-flex justify-content-center">
            <mdb-simple-chart :value="value3" color="#9E9E9E">
              {{value3}}%
            </mdb-simple-chart>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <mdb-badge color="grey">Conversion <mdb-icon icon="minus-square"/></mdb-badge>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbSimpleChart, mdbBadge, mdbIcon } from 'mdbvue';

export default {
  name: 'ChartPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbSimpleChart,
    mdbBadge,
    mdbIcon
  },
  data() {
    return {
      interval: null,
      value: 56,
      value2: 76,
      value3: 100
    };
  },
  methods:{
    changeValue(val) {
      this[val] =  Math.floor(Math.random()*100);
    }
  },
  mounted() {
    this.interval = setInterval(() => this.changeValue('value'), 2000);
  },
  beforeDestroy(){
    window.clearInterval(this.interval);
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
