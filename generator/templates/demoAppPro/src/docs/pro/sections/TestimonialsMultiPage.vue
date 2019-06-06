<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Testimonials Sections</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/sections/testimonials/#v-4" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="text-center my-5">
        <mdb-carousel :interval="8000" showControls showIndicators multi slide>
          <mdb-carousel-item>
            <mdb-row>
              <mdb-col md="4">
                <mdb-testimonial>
                  <mdb-avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle img-fluid"/>
                  </mdb-avatar>
                  <h4 class="font-weight-bold mt-4">Anna Deynah</h4>
                  <h6 class="blue-text font-weight-bold my-3">Web Designer</h6>
                  <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                  <div class="grey-text">
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star-half-alt"/>
                  </div>
                </mdb-testimonial>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-testimonial>
                  <mdb-avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" class="rounded-circle img-fluid"/>
                  </mdb-avatar>
                  <h4 class="font-weight-bold mt-4">John Doe</h4>
                  <h6 class="blue-text font-weight-bold my-3">Web Developer</h6>
                  <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                  <div class="grey-text">
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                  </div>
                </mdb-testimonial>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-testimonial>
                  <mdb-avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" class="rounded-circle img-fluid"/>
                  </mdb-avatar>
                  <h4 class="font-weight-bold mt-4">Abbey Clark</h4>
                  <h6 class="blue-text font-weight-bold my-3">Photographer</h6>
                  <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
                  <div class="grey-text">
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star-o"/>
                  </div>
                </mdb-testimonial>
              </mdb-col>
            </mdb-row>
          </mdb-carousel-item>
          <mdb-carousel-item>
            <mdb-row>
              <mdb-col md="4">
                <mdb-testimonial>
                  <mdb-avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg" class="rounded-circle img-fluid"/>
                  </mdb-avatar>
                  <h4 class="font-weight-bold mt-4">Blake Dabney</h4>
                  <h6 class="blue-text font-weight-bold my-3">Web Designer</h6>
                  <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                  <div class="grey-text">
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star-half-alt"/>
                  </div>
                </mdb-testimonial>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-testimonial>
                  <mdb-avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg" class="rounded-circle img-fluid"/>
                  </mdb-avatar>
                  <h4 class="font-weight-bold mt-4">Andrea Clay</h4>
                  <h6 class="blue-text font-weight-bold my-3">Front-end developer</h6>
                  <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                  <div class="grey-text">
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                  </div>
                </mdb-testimonial>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-testimonial>
                  <mdb-avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg" class="rounded-circle img-fluid"/>
                  </mdb-avatar>
                  <h4 class="font-weight-bold mt-4">Cami Gosse</h4>
                  <h6 class="blue-text font-weight-bold my-3">Phtographer</h6>
                  <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                  <div class="grey-text">
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star-o"/>
                  </div>
                </mdb-testimonial>
              </mdb-col>
            </mdb-row>
          </mdb-carousel-item>
          <mdb-carousel-item>
            <mdb-row>
              <mdb-col md="4">
                <mdb-testimonial>
                  <mdb-avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle img-fluid"/>
                  </mdb-avatar>
                  <h4 class="font-weight-bold mt-4">Bobby Haley</h4>
                  <h6 class="blue-text font-weight-bold my-3">Web Developer</h6>
                  <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                  <div class="grey-text">
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                  </div>
                </mdb-testimonial>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-testimonial>
                  <mdb-avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle img-fluid"/>
                  </mdb-avatar>
                  <h4 class="font-weight-bold mt-4">Elisa Janson</h4>
                  <h6 class="blue-text font-weight-bold my-3">Marketer</h6>
                  <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                  <div class="grey-text">
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star-half-alt"/>
                  </div>
                </mdb-testimonial>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-testimonial>
                  <mdb-avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-circle img-fluid"/>
                  </mdb-avatar>
                  <h4 class="font-weight-bold mt-4">Rob Jacobs</h4>
                  <h6 class="blue-text font-weight-bold my-3">Front-end developer</h6>
                  <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                  <div class="grey-text">
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star"/>
                    <mdb-icon icon="star-o"/>
                  </div>
                </mdb-testimonial>
              </mdb-col>
            </mdb-row>
          </mdb-carousel-item>
        </mdb-carousel>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbContainer, mdbRow, mdbCol, mdbTestimonial, mdbAvatar, mdbIcon } from 'mdbvue';

export default {
  name: 'CarouselPage',
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbTestimonial,
    mdbAvatar,
    mdbIcon
  }
};
</script>

<style scoped>
</style>
