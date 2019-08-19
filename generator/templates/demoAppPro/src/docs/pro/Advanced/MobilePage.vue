<template>
  <mdb-container>
    <mdb-row class="mt-5">
      <h4 class="demo-title">
        <strong>Mobile</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/advanced/mobile/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic carousel with gestures</h4>
      <section>
        <mdb-carousel :interval="2000" touch showIndicators>
          <mdb-carousel-item
            img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
            mask="black-light"
            alt="First slide"
          />
          <mdb-carousel-item
            img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
            mask="black-strong"
            alt="Second slide"
          />
          <mdb-carousel-item
            img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
            mask="black-slight"
            alt="Third slide"
          />
        </mdb-carousel>
      </section>
    </section>
    <section class="demo-section">
      <h4>Multi-item carousel with gestures</h4>
      <section>
        <mdb-container class="mt-5">
          <mdb-multi-carousel :interval="false" touch slide>
            <template>
              <mdb-carousel-item>
                <mdb-row class="carousel__item">
                  <mdb-col md="4">
                    <mdb-card class="mb-2">
                      <mdb-card-image
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                        alt="Card image cap"
                        waves
                      ></mdb-card-image>
                      <mdb-card-body>
                        <mdb-card-title>Card title</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="4" class="clearfix d-none d-md-block">
                    <mdb-card class="mb-2">
                      <mdb-card-image
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                        alt="Card image cap"
                        waves
                      ></mdb-card-image>
                      <mdb-card-body>
                        <mdb-card-title>Card title</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="4" class="clearfix d-none d-md-block">
                    <mdb-card class="mb-2">
                      <mdb-card-image
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                        alt="Card image cap"
                        waves
                      ></mdb-card-image>
                      <mdb-card-body>
                        <mdb-card-title>Card title</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                </mdb-row>
              </mdb-carousel-item>
              <mdb-carousel-item>
                <mdb-row class="carousel__item">
                  <mdb-col md="4">
                    <mdb-card class="mb-2">
                      <mdb-card-image
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
                        alt="Card image cap"
                        waves
                      ></mdb-card-image>
                      <mdb-card-body>
                        <mdb-card-title>Card title</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="4" class="clearfix d-none d-md-block">
                    <mdb-card class="mb-2">
                      <mdb-card-image
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                        alt="Card image cap"
                        waves
                      ></mdb-card-image>
                      <mdb-card-body>
                        <mdb-card-title>Card title</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="4" class="clearfix d-none d-md-block">
                    <mdb-card class="mb-2">
                      <mdb-card-image
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                        alt="Card image cap"
                        waves
                      ></mdb-card-image>
                      <mdb-card-body>
                        <mdb-card-title>Card title</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                </mdb-row>
              </mdb-carousel-item>
              <mdb-carousel-item>
                <mdb-row class="carousel__item">
                  <mdb-col md="4">
                    <mdb-card class="mb-2">
                      <mdb-card-image
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                        alt="Card image cap"
                        waves
                      ></mdb-card-image>
                      <mdb-card-body>
                        <mdb-card-title>Card title</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="4" class="clearfix d-none d-md-block">
                    <mdb-card class="mb-2">
                      <mdb-card-image
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                        alt="Card image cap"
                        waves
                      ></mdb-card-image>
                      <mdb-card-body>
                        <mdb-card-title>Card title</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                  <mdb-col md="4" class="clearfix d-none d-md-block">
                    <mdb-card class="mb-2">
                      <mdb-card-image
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg"
                        alt="Card image cap"
                        waves
                      ></mdb-card-image>
                      <mdb-card-body>
                        <mdb-card-title>Card title</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                      </mdb-card-body>
                    </mdb-card>
                  </mdb-col>
                </mdb-row>
              </mdb-carousel-item>
            </template>
            <template v-slot:mobile>
              <mdb-carousel-item class="carousel__item">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-carousel-item>
              <mdb-carousel-item class="carousel__item">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-carousel-item>
              <mdb-carousel-item class="carousel__item">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-carousel-item>
              <mdb-carousel-item class="carousel__item">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-carousel-item>
              <mdb-carousel-item class="carousel__item">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-carousel-item>
              <mdb-carousel-item class="carousel__item">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-carousel-item>
              <mdb-carousel-item class="carousel__item">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-carousel-item>
              <mdb-carousel-item class="carousel__item">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-carousel-item>
              <mdb-carousel-item class="carousel__item">
                <mdb-card class="mb-2">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg"
                    alt="Card image cap"
                    waves
                  ></mdb-card-image>
                  <mdb-card-body>
                    <mdb-card-title>Card title</mdb-card-title>
                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                    <mdb-btn color="primary">Button</mdb-btn>
                  </mdb-card-body>
                </mdb-card>
              </mdb-carousel-item>
            </template>
          </mdb-multi-carousel>
        </mdb-container>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbCarousel,
  mdbCarouselItem,
  mdbMultiCarousel,
  mdbBtn,
  mdbCardText,
  mdbCarouselCaption,
  mdbRow,
  mdbIcon,
  mdbContainer,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardImage,
  mdbCol
} from "mdbvue";

export default {
  name: "MobilePage",
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbRow,
    mdbIcon,
    mdbContainer,
    mdbMultiCarousel,
    mdbBtn,
    mdbCardText,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardImage,
    mdbCol
  }
};
</script>

<style scoped>
</style>
