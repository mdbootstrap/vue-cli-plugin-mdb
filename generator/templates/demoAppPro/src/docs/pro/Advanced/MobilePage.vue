<template>
  <mdb-container>
    <mdb-row class="mt-5">
      <h4 class="demo-title"><strong>Mobile</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/mobile/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic carousel with gestures</h4>
      <section>
        <mdb-carousel :interval="false" touch showIndicators>
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" mask="black-light" alt="First slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" mask="black-strong" alt="Second slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" mask="black-slight" alt="Third slide" />
        </mdb-carousel>
      </section>
    </section>
    <section class="demo-section">
      <h4>Multi-item carousel with gestures</h4>
      <section>
        <mdb-carousel :interval="false" touch multi slide showIndicators>
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" mask="black-light" alt="First slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" mask="black-strong" alt="Second slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg" mask="black-slight" alt="Third slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg" mask="black-slight" alt="Third slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(29).jpg" mask="black-slight" alt="Third slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(39).jpg" mask="black-slight" alt="Third slide" />
        </mdb-carousel>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbRow, mdbIcon, mdbContainer } from 'mdbvue';

export default {
  name: 'MobilePage',
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbRow,
    mdbIcon,
    mdbContainer
  }
};
</script>

<style scoped>
</style>
