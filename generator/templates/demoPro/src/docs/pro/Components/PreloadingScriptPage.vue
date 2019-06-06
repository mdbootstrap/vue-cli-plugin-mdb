<template>
  <mdb-container class="text-center mt-5">
    <mdb-preloading-script  color="elegant" :opacity="0.9" multicolor :loading="loading"/>
    <mdb-row class="mt-5">
      <h4 class="grey-text"><strong>Preloading script </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/progress-bar/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>`
    <hr class="mb-5" />
    <div class="embed-responsive embed-responsive-21by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"></iframe>
    </div>
    <mdb-row>
      <mdb-col md="6">
        <hr class="mb-5" />
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
        </div>
      </mdb-col>
      <mdb-col md="6">
        <hr class="mb-5" />
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/137857207" allowfullscreen></iframe>
        </div>
      </mdb-col>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-carousel :interval="8000" showControls showIndicators full>
      <mdb-carousel-item video src="https://mdbootstrap.com/img/video/Lines.mp4" mask="black-light" alt="First slide" auto loop>
        <mdb-carousel-caption title="Light mask"></mdb-carousel-caption>
      </mdb-carousel-item>
      <mdb-carousel-item video src="https://mdbootstrap.com/img/video/animation-intro.mp4" mask="black-slight" alt="Second slide" auto loop>
        <mdb-carousel-caption title="Super light mask"></mdb-carousel-caption>
      </mdb-carousel-item>
      <mdb-carousel-item video src="https://mdbootstrap.com/img/video/Nature-Sunset.mp4" mask="black-strong" alt="Third slide" auto loop>
        <mdb-carousel-caption title="Strong mask"></mdb-carousel-caption>
      </mdb-carousel-item>
    </mdb-carousel>
    <hr class="mb-5" />
    <video class="video-fluid z-depth-1" autoplay loop controls muted>
      <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
    </video>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbPreloadingScript } from 'mdbvue';

export default {
  name: 'PreloadingScriptPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbPreloadingScript
  },
  data(){
    return {
      loading: true
    };
  },
  methods: {
    isLoaded() {
      this.loading = false;    
    }
  },
  mounted(){
    window.addEventListener("load", this.isLoaded);
  },
  beforeDestroy(){
    window.removeEventListener("load", this.isLoaded);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    margin: 0;
  }

</style>
