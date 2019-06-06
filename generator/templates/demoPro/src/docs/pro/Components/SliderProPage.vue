<template>
    <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Slider</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/slider/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-row>
      <h2 class="mb-3 w-100">Material slider</h2>
      <range-input :min="0" :max="100" :value="0" class="w-100"></range-input>
    </mdb-row>
    <hr class="my-5"/>
    <mdb-row style="flex-direction: column">
      <h2 class="mb-3 w-100">Sliders with different width</h2>
      <range-input :min="0" :max="100" class="w-25 my-4"></range-input>
      <range-input :min="0" :max="100" class="w-50 my-4"></range-input>
      <range-input :min="0" :max="100" class="w-75 my-4"></range-input>
      <range-input :min="0" :max="100" class="w-100 my-4"></range-input>
    </mdb-row>
    <hr class="my-4"/>
    <mdb-row style="flex-direction: column">
      <h2 class="mb-3 w-100">Slider with fist and last values</h2>
      <div class="d-flex justify-content-center my-4">
        <span class="font-weight-bold indigo-text mr-2">0</span>
        <range-input :min="0" :max="100" class="w-25"></range-input>
        <span class="font-weight-bold indigo-text ml-2">100</span>
      </div>
      <div class="d-flex justify-content-center my-4">
        <span class="font-weight-bold blue-text mr-2">0</span>
        <range-input :min="0" :max="100" class="w-50"></range-input>
        <span class="font-weight-bold blue-text ml-2">100</span>
      </div>
      <div class="d-flex justify-content-center my-4">
        <span class="font-weight-bold purple-text mr-2">0</span>
        <range-input :min="0" :max="100" class="w-75"></range-input>
        <span class="font-weight-bold purple-text ml-2">100</span>
      </div>
    </mdb-row>
    <hr class="my-5"/>
    <mdb-row style="flex-direction: column">
      <h2 class="mb-3 w-100">Slider with icons within card</h2>
      <mdb-card class="blue-grey lighten-5" style="width: 40%">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap">
        <mdb-card-body class="text-center">
          <h3 class="indigo-text mt-4"><strong>Choose your slider option</strong></h3>
          <div class="d-flex justify-content-center my-4 pt-3">
            <span class="font-weight-bold blue-text mr-2 mt-1"><mdb-icon icon="thumbs-o-down"/></span>
            <range-input :min="0" :max="100" class="w-75"></range-input>
            <span class="font-weight-bold blue-text ml-2 mt-1"><mdb-icon icon="thumbs-o-up"/></span>
          </div>
          <div class="d-flex justify-content-center my-4 pt-3">
            <span class="font-weight-bold indigo-text mr-2 mt-1"><mdb-icon icon="dollar"/></span>
            <range-input :min="0" :max="100" class="w-75"></range-input>
            <span class="font-weight-bold indigo-text ml-2 mt-1"><mdb-icon icon="eur"/></span>
          </div>
          <div class="d-flex justify-content-center my-4 pt-3">
            <span class="font-weight-bold purple-text mr-2 mt-1"><mdb-icon icon="minus"/></span>
            <range-input :min="0" :max="100" class="w-75"></range-input>
            <span class="font-weight-bold purple-text ml-2 mt-1"><mdb-icon icon="plus"/></span>
          </div>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    <hr class="my-5"/>
    <mdb-row style="flex-direction: column">
      <h2 class="mb-3 w-100">Slider with price counter</h2>
      <mdb-card style="width: 40%">
        <mdb-card-body>
          <h3 class="text-center font-weight-bold blue-text mt-3 mb-4 pb-4"><strong>Slide to see the pricing change</strong></h3>
          <hr/>
            <range-input :min="0" :max="30" :value="value" @getValue="change"></range-input>
          <mdb-row>
            <mdb-col md="6" class="text-center pb-5">
              <h2><mdb-badge class="blue lighten-2 mb-4">You earn</mdb-badge></h2>
              <h2 class="display-4" style="color:#0d47a1"><strong>${{you}}</strong></h2>
            </mdb-col>
            <mdb-col md="6" class="text-center pb-5">
              <h2><mdb-badge class="blue lighten-2 mb-4">Client pays</mdb-badge></h2>
              <h2 class="display-4" style="color:#0d47a1"><strong>${{client}}</strong></h2>
            </mdb-col>
          </mdb-row>
        </mdb-card-body>
      </mdb-card>
    </mdb-row>
    </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, RangeInput, mdbCard, mdbCardBody, mdbBadge, mdbCol } from 'mdbvue';

export default {
  name: 'SliderProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    RangeInput,
    mdbCard,
    mdbCardBody,
    mdbBadge,
    mdbCol
  },
  data() {
    return {
      value: 0,
      price: 319,
      percentageBonus: 30
    };
  },
  methods: {
    change(e) {
      this.value=e;
    }
  },
  computed: {
    you() {
      return Math.round(((this.percentageBonus - this.value) / 100 * this.price));
    },
    client() {
      return Math.round((this.price - (this.value / 100 * this.price)));
    }
  }
};
</script>

<style>

</style>
