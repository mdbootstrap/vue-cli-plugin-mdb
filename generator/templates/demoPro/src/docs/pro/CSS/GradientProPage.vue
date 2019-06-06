<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5">
      <h4 class="demo-title"><strong>Gradient Pro</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/css/gradients/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <h4 class="my-4">Gradient within cards</h4>
    <mdb-row class="mx-1">

      <!--Grid column-->
      <mdb-col md="6" class="mb-4 mb-md-0">

        <!--Section: Live preview-->
        <section>
          <mdb-card narrow>
            <mdb-view hover cascade>
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask waves class="img-gradient"></mdb-mask>
            </mdb-view>
            <mdb-card-body cascade>
              <h5 class="pink-text"><mdb-icon icon="utensils" /> Culinary</h5>
              <mdb-card-title>Cheat day inspirations</mdb-card-title>
              <mdb-card-text>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</mdb-card-text>
              <mdb-btn color="unique">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </section>
        <!--Section: Live preview-->

      </mdb-col>
      <!--Grid column-->

      <!--Grid column-->
      <mdb-col md="6" class="mb-4 mb-md-0">

        <!--Section: Live preview-->
        <section>
          <mdb-card class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')">
            <div class="text-white text-center d-flex align-items-center img-gradient-overlay py-5 px-4">
              <div>
                <h5 class="orange-text"><mdb-icon icon="desktop" /> Software</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="deep-orange"><mdb-icon icon="clone left" /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
        </section>
        <!--Section: Live preview-->

      </mdb-col>
      <!--Grid column-->

    </mdb-row>

    <h4 class="my-4">Testimonial cards with gradients</h4>
    <section class="text-center">
      <!--Section heading-->
      <h2 class="h1 pt-4">Testimonials</h2>
      <!--Section description-->
      <p class="grey-text mb-5 mt-5 px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

      <mdb-row>
        <mdb-col sm="4">
          <mdb-card testimonial>
            <mdb-card-up gradient="sunny-morning"></mdb-card-up>
            <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" class="rounded-circle"></mdb-card-avatar>
            <mdb-card-body>
              <mdb-card-title>John Doe</mdb-card-title>
              <hr/>
              <p><mdb-icon icon="quote-left" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card testimonial>
            <mdb-card-up gradient="rainy-ashville"></mdb-card-up>
            <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle"></mdb-card-avatar>
            <mdb-card-body>
              <mdb-card-title>Anna Aston</mdb-card-title>
              <hr/>
              <p><mdb-icon icon="quote-left" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card testimonial>
            <mdb-card-up gradient="lady-lips"></mdb-card-up>
            <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle"></mdb-card-avatar>
            <mdb-card-body>
              <mdb-card-title>Maria Kate</mdb-card-title>
              <hr/>
              <p><mdb-icon icon="quote-left" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>

    <h4 class="my-4">Gradient buttons</h4>
    <!-- Grid row -->
    <mdb-row>

        <!-- Grid column -->
        <mdb-col md="12" class="mb-4">

            <mdb-btn tag="a" floating size="lg" gradient="purple"><mdb-icon icon="bolt" /></mdb-btn>
            <mdb-btn tag="a" floating gradient="peach"><mdb-icon icon="bolt" /></mdb-btn>
            <mdb-btn tag="a" floating size="sm" gradient="blue"><mdb-icon icon="bolt" /></mdb-btn>

        </mdb-col>
        <!-- Grid column -->

        <!-- Grid column -->
        <mdb-col md="12" class="mb-4">

            <mdb-btn gradient="peach" rounded>Peach</mdb-btn>
            <mdb-btn gradient="blue" rounded>Blue</mdb-btn>
            <mdb-btn gradient="purple" rounded>Purple</mdb-btn>

        </mdb-col>
        <!-- Grid column -->

        <!-- Grid column -->
        <mdb-col md="12" class="mb-4">

            <mdb-btn gradient="blue">Blue</mdb-btn>
            <mdb-btn gradient="purple">Purple</mdb-btn>
            <mdb-btn gradient="peach">Peach</mdb-btn>

        </mdb-col>
        <!-- Grid column -->

    </mdb-row>
    <!-- Grid row -->
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbCard, mdbView, mdbCardImage, mdbMask, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbCardAvatar, mdbCardUp } from "mdbvue";

export default {
  name: "GradientProPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbCard,
    mdbView,
    mdbCardImage,
    mdbMask,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbCardAvatar,
    mdbCardUp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 0;
}
.img-gradient {
  display:inline-block;
  opacity: 1;
}
.img-gradient:after {
  content:'';
  position:absolute;
  left:0; top:0;
  width:100%; height:100%;
  display:inline-block;
  background: -moz-linear-gradient(top, rgba(0,47,75,0.5) 0%, rgba(220, 66, 37, 0.5) 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(220, 66, 37, 0.5)), color-stop(100%,rgba(0,47,75,0.5))); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* IE10+ */
  background: linear-gradient(to bottom, rgba(0,47,75,0.5) 0%,rgba(220, 66, 37, 0.5) 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
}
.img-gradient img{
  display:block;
}

.img-gradient-overlay { /* FF3.6+ */ /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(rgba(0,47,75,0.5) 0%, rgba(220, 66, 37, 0.5) 100%);
  background: -o-linear-gradient(rgba(0,47,75,0.5) 0%, rgba(220, 66, 37, 0.5) 100%);
  background: linear-gradient(rgba(0,47,75,0.5) 0%, rgba(220, 66, 37, 0.5) 100%); /* Chrome10+,Safari5.1+ */ /* Opera 11.10+ */ /* IE10+ */ /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#002f4b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  border-radius: .3rem;
}
</style>
