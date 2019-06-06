<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Carousel Pro</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/carousel/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <h4 class="my-4">Carousel with lightbox</h4>
    <mdb-multi-carousel :interval="8000" showControls showIndicators slide top navClass="btn-secondary" indicatorClass="secondary-color">
      <mdb-carousel-item>
        <mdb-row class="mdb-lightbox px-2">
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(0)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(1)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(3).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(2)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(3)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(5).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(4)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox(5)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(7).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
      <mdb-carousel-item>
        <mdb-row class="mdb-lightbox px-2">
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(0)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(1)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(9).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(2)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(3)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(11).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(4)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox2(5)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(13).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
      <mdb-carousel-item>
        <mdb-row class="mdb-lightbox px-2">
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(0)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(1)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(15).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(2)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(16).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(3)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(17).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(4)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
          <mdb-col md="4" class="d-md-inline-block" @click.native="showLightbox3(5)">
            <figure>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg" class="img-fluid" alt=""/>
            </figure>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
    </mdb-multi-carousel>
    <mdb-lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></mdb-lightbox>
    <mdb-lightbox
      :visible="visible2"
      :imgs="imgs2"
      :index="index2"
      @hide="handleHide2"
    ></mdb-lightbox>
    <mdb-lightbox
      :visible="visible3"
      :imgs="imgs3"
      :index="index3"
      @hide="handleHide3"
    ></mdb-lightbox>
  </mdb-container>
</template>

<script>
import { mdbMultiCarousel, mdbCarouselItem, mdbCarouselCaption, mdbRow, mdbIcon, mdbContainer, mdbCol, mdbLightbox } from 'mdbvue';

export default {
  name: 'CarouselProPage',
  components: {
    mdbMultiCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbRow,
    mdbIcon,
    mdbContainer,
    mdbCol,
    mdbLightbox
  },
  data() {
    return {
      imgs: [
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(2).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(3).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(4).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(5).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(6).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(7).jpg'
      ],
      imgs2: [
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(8).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(9).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(10).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(11).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(12).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(13).jpg'
      ],
      imgs3: [
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(14).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(15).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(16).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(17).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(18).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(19).jpg'
      ],
      visible: false,
      visible2: false,
      visible3: false,
      index: 0,
      index2: 0,
      index3: 0,
    };
  },
  methods: {
    showLightbox(index) {
      this.index = index;
      this.visible = true;
    },
    showLightbox2(index2) {
      this.index2 = index2;
      this.visible2 = true;
    },
    showLightbox3(index3) {
      this.index3 = index3;
      this.visible3 = true;
    },
    handleHide() {
      this.visible = false;
    },
    handleHide2() {
      this.visible2 = false;
    },
    handleHide3() {
      this.visible3 = false;
    },
  }
};
</script>

<style scoped>
</style>
