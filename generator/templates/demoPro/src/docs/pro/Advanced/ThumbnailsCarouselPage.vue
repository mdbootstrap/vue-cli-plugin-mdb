<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Thumbnails carousel</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/carousel/#thumbnails/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-carousel :interval="8000" showControls showIndicators thumbnails :indicatorStyle="{width: '100px'}">
      <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" thumbnail="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg" alt="First slide">
      </mdb-carousel-item>
      <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" thumbnail="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg" alt="Second slide">
      </mdb-carousel-item>
      <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" thumbnail="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" alt="Third slide">
      </mdb-carousel-item>
    </mdb-carousel>
  </mdb-container>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbIcon, mdbContainer, mdbRow } from 'mdbvue';

export default {
  name: 'ThumbnailsCarouselPage',
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbIcon,
    mdbRow,
    mdbContainer
  }
};
</script>

<style scoped>
</style>
