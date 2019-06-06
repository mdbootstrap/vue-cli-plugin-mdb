<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text" id="top"><strong>SmoothScroll</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/scroll/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="my-4"/>
    <mdb-row>
      <ul class="smooth-scroll list-unstyled">
        <li>
          <h5><a href="#test1" v-smooth="'#test1'">Click to scroll to section 1</a></h5>
        </li>
        <br>
        <li>
          <h5><a href="#test2" v-smooth>Click to scroll to section 2</a></h5>
        </li>
        <br>
      </ul>
    </mdb-row>

    <div style="margin-top: 1000px">
      <h3><a id="test1" href="#top" v-smooth>Section 1</a></h3>
      <a href="#top" v-smooth>Back to top</a>
      <hr>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
    </div>

    <div style="margin-top: 500px">
      <h3><a id="test2" href="#test2">Section 2</a></h3>
      <a href="#top" v-smooth>Back to top</a>
      <hr>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
      <h5>Smooth Scroll Example</h5>
    </div>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, Smooth } from 'mdbvue';
export default {
  name: "SmoothScrollPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon
  },
  directives: {
    'smooth': Smooth
  }
};
</script>

<style>

</style>
