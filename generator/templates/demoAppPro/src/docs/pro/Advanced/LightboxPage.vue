<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>LightBox</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/lightbox/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-container class="mt-5">
      <mdb-row class="mdb-lightbox no-margin">
        <mdb-col md="4" @click.native="show(0)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="show(1)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="show(2)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="show(3)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(123).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="show(4)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="show(5)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="show(6)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(132).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="show(7)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="show(8)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(133).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <mdb-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></mdb-lightbox>
  </mdb-container>
</template>

<script>
import { mdbLightbox, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
  components: {
    mdbLightbox,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  },
  data() {
    return {
      imgs: [
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg'
      ],
      visible: false,
      index: 0
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>

</style>
