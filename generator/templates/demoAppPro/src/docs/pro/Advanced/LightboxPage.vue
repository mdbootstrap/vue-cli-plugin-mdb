<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>LightBox</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/advanced/lightbox/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4>Basic lightbox</h4>
      <section>
        <mdb-container class="mt-5">
          <mdb-row class="mdb-lightbox no-margin">
            <mdb-col md="4" @click.native="show(0)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show(1)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show(2)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show(3)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(123).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show(4)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show(5)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show(6)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(132).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show(7)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show(8)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(133).jpg"
                  class="img-fluid"
                  alt
                />
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
      </section>
    </section>
    <section class="demo-section">
      <h4>Lightbox with captions</h4>
      <section>
        <mdb-container class="mt-5">
          <mdb-row class="mdb-lightbox no-margin">
            <mdb-col md="4" @click.native="show2(0)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(94).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show2(1)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(96).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show2(2)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(95).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show2(3)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(92).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show2(4)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(137).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show2(5)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(132).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show2(6)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(129).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show2(7)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(130).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
            <mdb-col md="4" @click.native="show2(8)">
              <figure>
                <img
                  src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(131).jpg"
                  class="img-fluid"
                  alt
                />
              </figure>
            </mdb-col>
          </mdb-row>
        </mdb-container>
        <mdb-lightbox
          :visible="visible2"
          :imgs="imgs2"
          :captions="captions"
          :index="index2"
          @hide="handleHide2"
        ></mdb-lightbox>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbLightbox, mdbContainer, mdbRow, mdbCol, mdbIcon } from "mdbvue";

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
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg"
      ],
      imgs2: [
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(94).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(96).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(95).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(92).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(137).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(129).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg"
      ],
      captions: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nobis sit veritatis cumque! Placeat voluptate aut pariatur! Nihil molestiae quos explicabo dignissimos quam cupiditate sequi corporis eaque corrupti. Vel, est."
      ],
      visible: false,
      index: 0,
      visible2: false,
      index2: 0
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    show2(index) {
      this.index2 = index;
      this.visible2 = true;
    },
    handleHide2() {
      this.visible2 = false;
    }
  }
};
</script>

<style scoped>
</style>
