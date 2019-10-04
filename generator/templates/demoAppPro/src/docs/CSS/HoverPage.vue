<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Hover Effects</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/css/hover-effects/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container fluid class="my-5">
      <mdb-row class="mx-5">
        <mdb-col lg="4" md="12">
          <mdb-view hover src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg">
            <mdb-mask overlay="red-strong" flexCenter text="Strong overlay"></mdb-mask>
          </mdb-view>
        </mdb-col>
        <mdb-col lg="4" md="12">
          <mdb-view hover src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg">
            <mdb-mask overlay="red-light" flexCenter text="Light overlay"></mdb-mask>
          </mdb-view>
        </mdb-col>
        <mdb-col lg="4" md="12">
          <mdb-view hover src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg">
            <mdb-mask overlay="red-slight" flexCenter text="Slight overlay"></mdb-mask>
          </mdb-view>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mx-5 mt-5">
        <mdb-col md="6">
          <mdb-view zoom hover src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg">
            <mdb-mask flexCenter text="Zoom effect"></mdb-mask>
          </mdb-view>
        </mdb-col>
        <mdb-col md="6" class="text-center">
          <h4 class="text-center">Shadow effect</h4>
          <img class="img-fluid rounded-circle hoverable" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(132).jpg" alt="shadow effect"/>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask, mdbIcon } from 'mdbvue';

export default {
  name: 'GridPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
