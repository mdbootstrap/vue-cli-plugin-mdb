<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Cards</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/plugins/vue/card-animations/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4>Card with share icon</h4>
      <section>
        <mdb-row>
          <mdb-col sm="4">
            <mdb-card>
              <mdb-view hover>
                <a href="#!">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Others/photo9.jpg"
                    alt="Card image cap"
                  ></mdb-card-image>
                  <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                </a>
              </mdb-view>
              <mdb-row class="justify-content-end mr-2 mb-4">
                <transition name="social-fb-btn">
                  <mdb-btn v-if="show" tag="a" floating action class="btn-fb">
                    <mdb-icon fab icon="facebook-f" />
                  </mdb-btn>
                </transition>
                <transition name="social-tw-btn">
                  <mdb-btn v-if="show" tag="a" floating action class="btn-tw">
                    <mdb-icon fab icon="twitter" />
                  </mdb-btn>
                </transition>
                <transition name="social-gplus-btn">
                  <mdb-btn v-if="show" tag="a" floating action class="btn-gplus">
                    <mdb-icon fab icon="google-plus-g" />
                  </mdb-btn>
                </transition>
                <mdb-btn tag="a" floating action color="indigo" @click="show = !show">
                  <mdb-icon icon="share-alt" />
                </mdb-btn>
              </mdb-row>

              <mdb-card-body>
                <mdb-card-title>Card title</mdb-card-title>
                <hr />
                <p
                  class="font-small grey-dark-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <mdb-btn rounded color="indigo">Read more</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Sliding Cards with share icon</h4>
      <section>
        <mdb-row>
          <mdb-col sm="4">
            <mdb-card class="mt-5 pb-1">
              <mdb-sliding-card :show="show2" direction="right" :width="340">
                <mdb-card-body>
                  <mdb-card-title class="text-center">
                    Social shares
                    <mdb-btn flat @click="show2 = !show2" class="float-right p-0 m-0">
                      <mdb-icon icon="times" size="lg" color />
                    </mdb-btn>
                  </mdb-card-title>
                  <hr />
                  <mdb-row class="justify-content-center pt-3">
                    <mdb-btn tag="a" floating class="btn-dribbble">
                      <mdb-icon fab icon="dribbble" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-slack">
                      <mdb-icon fab icon="slack-hash" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-ins">
                      <mdb-icon fab icon="instagram" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-pin">
                      <mdb-icon fab icon="pinterest" />
                    </mdb-btn>
                  </mdb-row>
                  <mdb-row class="justify-content-center">
                    <mdb-btn tag="a" floating class="btn-tw">
                      <mdb-icon fab icon="twitter" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-gplus">
                      <mdb-icon fab icon="google-plus-g" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-git">
                      <mdb-icon fab icon="github" />
                    </mdb-btn>
                  </mdb-row>
                  <h5 class="text-center pt-5 pb-2">Join our community</h5>
                  <hr />
                  <mdb-row class="justify-content-center pt-4">
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-fb">
                      <mdb-icon fab icon="facebook-f" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-tw">
                      <mdb-icon fab icon="twitter" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-li">
                      <mdb-icon fab icon="linkedin-in" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-ins">
                      <mdb-icon fab icon="instagram" />
                    </mdb-btn>
                  </mdb-row>
                </mdb-card-body>
              </mdb-sliding-card>
              <mdb-view hover>
                <a href="#!">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Others/photo11.jpg"
                    alt="Card image cap"
                  ></mdb-card-image>
                  <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                </a>
              </mdb-view>
              <mdb-card-body>
                <mdb-card-title class="d-flex justify-content-between align-items-center">
                  Card title
                  <mdb-btn flat @click="show2 = !show2" class="p-0 m-0">
                    <mdb-icon icon="share-alt" size="lg" />
                  </mdb-btn>
                </mdb-card-title>

                <hr />
                <p
                  class="font-small grey-dark-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <mdb-btn class="pl-0" flat>
                  Read more
                  <mdb-icon class="pl-2" icon="angle-double-right" />
                </mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col sm="8">
            <mdb-card>
              <mdb-sliding-card :show="show3" direction="top">
                <mdb-card-body>
                  <mdb-card-title class="text-center">
                    Social shares
                    <mdb-btn flat @click="show3 = !show3" class="float-right p-0 m-0">
                      <mdb-icon icon="times" size="lg" color />
                    </mdb-btn>
                  </mdb-card-title>
                  <hr />
                  <mdb-row class="justify-content-center pt-3">
                    <mdb-btn tag="a" floating class="btn-dribbble">
                      <mdb-icon fab icon="dribbble" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-slack">
                      <mdb-icon fab icon="slack-hash" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-ins">
                      <mdb-icon fab icon="instagram" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-pin">
                      <mdb-icon fab icon="pinterest" />
                    </mdb-btn>
                  </mdb-row>
                  <mdb-row class="justify-content-center">
                    <mdb-btn tag="a" floating class="btn-tw">
                      <mdb-icon fab icon="twitter" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-gplus">
                      <mdb-icon fab icon="google-plus-g" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-git">
                      <mdb-icon fab icon="github" />
                    </mdb-btn>
                  </mdb-row>
                  <h5 class="text-center pt-5 pb-2">Join our community</h5>
                  <hr />
                  <mdb-row class="justify-content-center pt-4">
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-fb">
                      <mdb-icon fab icon="facebook-f" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-tw">
                      <mdb-icon fab icon="twitter" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-li">
                      <mdb-icon fab icon="linkedin-in" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-ins">
                      <mdb-icon fab icon="instagram" />
                    </mdb-btn>
                  </mdb-row>
                </mdb-card-body>
              </mdb-sliding-card>
              <mdb-view hover>
                <a href="#!">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(75).jpg"
                    alt="Card image cap"
                  ></mdb-card-image>
                  <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                </a>
              </mdb-view>
              <mdb-card-body>
                <mdb-card-title class="d-flex justify-content-between align-items-center">Card title</mdb-card-title>

                <hr />
                <p
                  class="font-small grey-dark-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <mdb-btn tag="a" color="pink" floating @click="show3 = !show3">
                  <mdb-icon icon="share-alt" />
                </mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row class="pt-4">
          <mdb-col sm="7">
            <mdb-card>
              <mdb-sliding-card :show="show5" direction="left" :width="617">
                <mdb-card-body>
                  <mdb-card-title class="text-center">
                    Social shares
                    <mdb-btn flat @click="show5 = !show5" class="float-right p-0 m-0">
                      <mdb-icon icon="times" size="lg" color />
                    </mdb-btn>
                  </mdb-card-title>
                  <hr />
                  <mdb-row class="justify-content-center pt-3">
                    <mdb-btn tag="a" floating class="btn-dribbble">
                      <mdb-icon fab icon="dribbble" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-slack">
                      <mdb-icon fab icon="slack-hash" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-ins">
                      <mdb-icon fab icon="instagram" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-pin">
                      <mdb-icon fab icon="pinterest" />
                    </mdb-btn>
                  </mdb-row>
                  <mdb-row class="justify-content-center">
                    <mdb-btn tag="a" floating class="btn-tw">
                      <mdb-icon fab icon="twitter" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-gplus">
                      <mdb-icon fab icon="google-plus-g" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-git">
                      <mdb-icon fab icon="github" />
                    </mdb-btn>
                  </mdb-row>
                  <h5 class="text-center pt-5 pb-2">Join our community</h5>
                  <hr />
                  <mdb-row class="justify-content-center pt-4">
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-fb">
                      <mdb-icon fab icon="facebook-f" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-tw">
                      <mdb-icon fab icon="twitter" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-li">
                      <mdb-icon fab icon="linkedin-in" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-ins">
                      <mdb-icon fab icon="instagram" />
                    </mdb-btn>
                  </mdb-row>
                </mdb-card-body>
              </mdb-sliding-card>
              <mdb-view hover>
                <a href="#!">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(72).jpg"
                    alt="Card image cap"
                  ></mdb-card-image>
                  <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                </a>
              </mdb-view>
              <mdb-card-body>
                <hr />
                <p
                  class="font-small grey-dark-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <hr />
                <mdb-btn
                  rounded
                  @click="show5 = !show5"
                  icon="share-alt"
                  color="elegant"
                  class="float-right"
                >Follow us</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col sm="5">
            <mdb-card class="text-center">
              <mdb-sliding-card :show="show4">
                <mdb-card-body>
                  <mdb-card-title class="text-center">
                    Social shares
                    <mdb-btn flat @click="show4 = !show4" class="float-right p-0 m-0">
                      <mdb-icon icon="times" size="lg" color />
                    </mdb-btn>
                  </mdb-card-title>
                  <hr />
                  <mdb-row class="justify-content-center pt-3">
                    <mdb-btn tag="a" floating class="btn-dribbble">
                      <mdb-icon fab icon="dribbble" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-slack">
                      <mdb-icon fab icon="slack-hash" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-ins">
                      <mdb-icon fab icon="instagram" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-pin">
                      <mdb-icon fab icon="pinterest" />
                    </mdb-btn>
                  </mdb-row>
                  <mdb-row class="justify-content-center">
                    <mdb-btn tag="a" floating class="btn-tw">
                      <mdb-icon fab icon="twitter" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-gplus">
                      <mdb-icon fab icon="google-plus-g" />
                    </mdb-btn>
                    <mdb-btn tag="a" floating class="btn-git">
                      <mdb-icon fab icon="github" />
                    </mdb-btn>
                  </mdb-row>
                  <h5 class="text-center pt-5 pb-2">Join our community</h5>
                  <hr />
                  <mdb-row class="justify-content-center pt-4">
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-fb">
                      <mdb-icon fab icon="facebook-f" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-tw">
                      <mdb-icon fab icon="twitter" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-li">
                      <mdb-icon fab icon="linkedin-in" />
                    </mdb-btn>
                    <mdb-btn tag="a" class="pl-4 pr-4 btn-ins">
                      <mdb-icon fab icon="instagram" />
                    </mdb-btn>
                  </mdb-row>
                </mdb-card-body>
              </mdb-sliding-card>
              <mdb-view hover>
                <a href="#!">
                  <mdb-card-image
                    src="https://mdbootstrap.com/img/Photos/Others/food.jpg"
                    alt="Card image cap"
                  ></mdb-card-image>
                  <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                </a>
              </mdb-view>
              <mdb-card-body>
                <mdb-card-title>Follow us</mdb-card-title>
                <hr />
                <mdb-btn
                  tag="a"
                  floating
                  size="lg"
                  @click="show4 = !show4"
                  icon="share-alt"
                  gradient="peach"
                />
                <hr/>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mb-4">Flipping card - version 1</h4>
      <section>
        <mdb-flipping-card
          :flipped="flipped"
          innerClass="text-center h-100 w-100"
          style="max-width: 22rem; height: 465px;"
        >
          <mdb-card class="face front">
            <mdb-view hover>
              <a href="#!">
                <mdb-card-image
                  src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg"
                  alt="Card image cap"
                ></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body>
              <mdb-card-title class="pl-5">
                Card title
                <mdb-btn class="float-right pb-5" style="bottom: 10px" flat @click="flipped=true">
                  <mdb-icon size="lg" class="black-text" icon="share-alt" />
                </mdb-btn>
              </mdb-card-title>

              <hr />
              <p
                class="font-small grey-dark-text"
              >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <mdb-btn flat>
                Read more
                <mdb-icon class="pl-2" icon="angle-double-right" />
              </mdb-btn>
            </mdb-card-body>
          </mdb-card>
          <mdb-card class="face back" style="height: 465px;">
            <mdb-card-body>
              <mdb-card-title class="pl-5">
                Social shares
                <mdb-btn style="bottom: 10px" flat @click="flipped=false">
                  <mdb-icon size="lg" icon="times" />
                </mdb-btn>
              </mdb-card-title>
              <hr />
              <mdb-row class="justify-content-center pt-3">
                <mdb-btn tag="a" floating class="btn-dribbble">
                  <mdb-icon fab icon="dribbble" />
                </mdb-btn>
                <mdb-btn tag="a" floating class="btn-slack">
                  <mdb-icon fab icon="slack-hash" />
                </mdb-btn>
                <mdb-btn tag="a" floating class="btn-ins">
                  <mdb-icon fab icon="instagram" />
                </mdb-btn>
                <mdb-btn tag="a" floating class="btn-pin">
                  <mdb-icon fab icon="pinterest" />
                </mdb-btn>
              </mdb-row>
              <mdb-row class="justify-content-center">
                <mdb-btn tag="a" floating class="btn-tw">
                  <mdb-icon fab icon="twitter" />
                </mdb-btn>
                <mdb-btn tag="a" floating class="btn-gplus">
                  <mdb-icon fab icon="google-plus-g" />
                </mdb-btn>
                <mdb-btn tag="a" floating class="btn-git">
                  <mdb-icon fab icon="github" />
                </mdb-btn>
              </mdb-row>
              <h5 class="text-center pt-5 pb-2">Join our community</h5>
              <hr />
              <mdb-row class="justify-content-center pt-4">
                <mdb-btn tag="a" class="pl-4 pr-4 btn-fb">
                  <mdb-icon fab icon="facebook-f" />
                </mdb-btn>
                <mdb-btn tag="a" class="pl-4 pr-4 btn-tw">
                  <mdb-icon fab icon="twitter" />
                </mdb-btn>
                <mdb-btn tag="a" class="pl-4 pr-4 btn-li">
                  <mdb-icon fab icon="linkedin-in" />
                </mdb-btn>
                <mdb-btn tag="a" class="pl-4 pr-4 btn-ins">
                  <mdb-icon fab icon="instagram" />
                </mdb-btn>
              </mdb-row>
            </mdb-card-body>
          </mdb-card>
        </mdb-flipping-card>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="mb-4">Flipping card - version 2</h4>
      <section>
        <mdb-flipping-card
          :flipped="flipped2"
          innerClass="text-center h-100 w-100"
          style="max-width: 22rem; height: 416px;"
        >
          <mdb-card class="face front" style="height: 416px;">
            <mdb-card-up>
              <img
                class="card-image-top"
                src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
                alt="a photo of a house facade"
              />
            </mdb-card-up>
            <mdb-avatar class="mx-auto white" circle>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                class="rounded-circle"
              />
            </mdb-avatar>
            <mdb-card-body>
              <h4 class="font-weight-bold mb-3">Marie Johnson</h4>
              <p class="font-weight-bold blue-text">Web developer</p>
              <a class="rotate-btn" @click="flipped2=true">
                <mdb-icon class="pr-2" icon="redo" />Click here to rotate
              </a>
            </mdb-card-body>
          </mdb-card>
          <mdb-card class="face back" style="height: 416px;">
            <mdb-card-body>
              <h4 class="font-weight-bold">About me</h4>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta. Blanditiis rem amet repellat, dolores nihil quae in mollitia asperiores ut rerum repellendus, voluptatum eum, officia laudantium quaerat?</p>
              <hr />
              <ul class="list-inline py-2">
                <li class="list-inline-item">
                  <a class="p-2 fa-lg fb-ic">
                    <mdb-icon fab icon="facebook" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 fa-lg tw-ic">
                    <mdb-icon fab icon="twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 fa-lg gplus-ic">
                    <mdb-icon fab icon="google-plus" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 fa-lg li-ic">
                    <mdb-icon fab icon="linkedin" />
                  </a>
                </li>
              </ul>
              <a class="rotate-btn" @click="flipped2=false">
                <mdb-icon class="pr-2" icon="undo" />Click here to rotate back
              </a>
            </mdb-card-body>
          </mdb-card>
        </mdb-flipping-card>
      </section>
    </section>
  </mdb-container>
</template>
<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardUp,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbIcon,
  mdbFlippingCard,
  mdbAvatar,
  mdbSlidingCard
} from "mdbvue";

export default {
  name: "CardAnimationsPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardUp,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon,
    mdbFlippingCard,
    mdbAvatar,
    mdbSlidingCard
  },
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      flipped: false,
      flipped2: false
    };
  }
};
</script>

<style>
.social-fb-btn-enter-active {
  transition: all 0.7s ease;
}
.social-fb-btn-leave-active {
  transition: all 0.3s ease;
}
.social-fb-btn-enter,
.social-fb-btn-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.social-tw-btn-enter-active {
  transition: all 0.5s ease;
}
.social-tw-btn-leave-active {
  transition: all 0.3s ease;
}
.social-tw-btn-enter,
.social-tw-btn-leave-to {
  transform: translateX(70px);
  opacity: 0;
}

.social-gplus-btn-enter-active {
  transition: all 0.3s ease;
}
.social-gplus-btn-leave-active {
  transition: all 0.3s ease;
}
.social-gplus-btn-enter,
.social-gplus-btn-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
