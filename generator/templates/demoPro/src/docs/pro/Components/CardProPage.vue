<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Cards</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/cards/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-container class="mt-5">
      <h4 class="mb-4">Cascading cards</h4>
      <mdb-row>
        <mdb-col sm="4">
          <mdb-card wide>
            <mdb-view hover cascade>
              <a href="#!">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap" ></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body class="text-center" cascade>
              <mdb-card-title><strong>Alison Belmont</strong></mdb-card-title>
              <h5 class="blue-text"><strong>Graffiti Artist</strong></h5>
              <mdb-card-text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</mdb-card-text>
              <a class="icons-sm li-ic"><mdb-icon fab icon="linkedin" /></a>
              <a class="icons-sm tw-ic"><mdb-icon fab icon="twitter" /></a>
              <a class="icons-sm fb-ic"><mdb-icon fab icon="facebook" /></a>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card narrow>
            <mdb-view hover cascade>
              <a href="#!">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body cascade>
              <h5 class="pink-text pb-2 pt-1"><mdb-icon icon="utensils" /> Culinary</h5>
              <mdb-card-title><strong>Cheat day inspirations</strong></mdb-card-title>
              <mdb-card-text>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</mdb-card-text>
              <mdb-btn color="unique">Button</mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card cascade>
            <mdb-view hover cascade>
              <a href="#!">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body class="text-center" cascade>
              <mdb-card-title><strong>Billy Cullen</strong></mdb-card-title>
              <h5>Web developer</h5>
              <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam.</mdb-card-text>
              <mdb-btn tag="a" floating small class="btn-fb"><mdb-icon fab icon="facebook" /></mdb-btn>
              <mdb-btn tag="a" floating small class="btn-tw"><mdb-icon fab icon="twitter" /></mdb-btn>
              <mdb-btn tag="a" floating small class="btn-dribbble"><mdb-icon fab icon="dribbble" /></mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <hr class="my-5"/>
      <h4 class="mb-4">Cascading card with a footer</h4>
      <mdb-row>
        <mdb-col sm="4">
          <mdb-card wide>
            <mdb-view hover cascade>
              <a href="#!">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap" ></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body class="text-center pb-0" cascade>
              <mdb-card-title><strong>Alison Belmont</strong></mdb-card-title>
              <h5 class="blue-text"><strong>Graffiti Artist</strong></h5>
              <mdb-card-text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</mdb-card-text>
              <a class="icons-sm li-ic"><mdb-icon fab icon="linkedin" /></a>
              <a class="icons-sm tw-ic"><mdb-icon fab icon="twitter" /></a>
              <a class="icons-sm fb-ic"><mdb-icon fab icon="facebook" /></a>
              <mdb-card-footer class="text-muted mt-4">2 days ago</mdb-card-footer>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <hr class="my-5"/>
      <h4 class="mb-4">Cascading panels</h4>
      <mdb-row>
        <mdb-col sm="4">
          <mdb-card narrow>
            <mdb-view gradient="purple" cascade>
              <h2 class="card-header-title">Ally Cook</h2>
              <p>Follow me</p>
              <mdb-btn tag="a" floating transparent small><mdb-icon fab icon="facebook-f" /></mdb-btn>
              <mdb-btn tag="a" floating transparent small><mdb-icon fab icon="twitter" /></mdb-btn>
              <mdb-btn tag="a" floating transparent small><mdb-icon fab icon="google-plus-g" /></mdb-btn>
            </mdb-view>
            <mdb-card-body class="text-center" cascade>
              <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commod</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card wide>
            <mdb-view gradient="peach" cascade>
              <h2 class="card-header-title mb-3">Title of the news</h2>
              <p class="mb-0"><mdb-icon icon="calendar-alt" /> 26.07.2017</p>
            </mdb-view>
            <mdb-card-body class="text-center" cascade>
              <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.</mdb-card-text>
              <a class="orange-text mt-1 d-flex flex-row-reverse">
                <h5 class="p-2" waves>Read more <mdb-icon icon="angle-double-right" /></h5>
              </a>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card cascade>
            <mdb-view gradient="blue" cascade>
              <h2 class="card-header-title">Marta</h2>
              <p class="mb-0">Deserves her own card</p>
            </mdb-view>
            <mdb-card-body class="text-center" cascade>
              <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.</mdb-card-text>
              <hr/>
              <a class="px-2 icons-sm tw-ic"><mdb-icon fab icon="twitter" size="lg" /></a>
              <a class="px-2 icons-sm li-ic"><mdb-icon fab icon="linkedin-in" size="lg" /></a>
              <a class="px-2 icons-sm fb-ic"><mdb-icon fab icon="facebook-f" size="lg" /></a>
              <a class="px-2 icons-sm email-ic"><mdb-icon icon="envelope" size="lg" /></a>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <hr class="my-5"/>
      <h4 class="mb-4">Reversed cascade</h4>
      <mdb-row>
        <mdb-card cascade wide reverse>
          <mdb-view hover cascade>
            <a href="#!">
              <mdb-card-image src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap"></mdb-card-image>
              <mdb-mask waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="text-center" cascade>
            <mdb-card-title><strong>My adventure</strong></mdb-card-title>
            <h6 class="indigo-text py-2"><strong>Photography</strong></h6>
            <mdb-card-text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</mdb-card-text>
            <a class="px-2 li-ic"><mdb-icon fab icon="linkedin-in" size="lg" /></a>
            <a class="px-2 tw-ic"><mdb-icon fab icon="twitter" size="lg" /></a>
            <a class="px-2 fb-ic"><mdb-icon fab icon="facebook-f" size="lg" /></a>
          </mdb-card-body>
        </mdb-card>
      </mdb-row>
      <hr class="my-5"/>
      <h4 class="mb-4">Action button & footer</h4>
      <mdb-row>
        <mdb-col sm="4">
          <mdb-card>
            <mdb-view hover>
              <a href="#!">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="Card image cap"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-btn tag="a" floating action class="ml-auto mr-4 mdb-color lighten-3"><mdb-icon icon="chevron-right" class="pl-1" /></mdb-btn>
            <mdb-card-body>
              <mdb-card-title>Card title</mdb-card-title>
              <hr/>
              <p class="font-small grey-dark-text mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </mdb-card-body>
            <mdb-card-footer color="mdb-color" class="lighten-3 p-0 text-center">
              <ul class="list-unstyled list-inline font-small mt-3">
                <li class="list-inline-item pr-2 white-text"><mdb-icon far icon="clock" class="pr-1" />05/10/2015</li>
                <li class="list-inline-item pr-2"><a href="#" class="white-text"><mdb-icon far icon="comments" class="pr-1" />12</a></li>
                <li class="list-inline-item pr-2"><a href="#" class="white-text"><mdb-icon fab icon="facebook" class="pr-1" />21</a></li>
                <li class="list-inline-item"><a href="#" class="white-text"><mdb-icon fab icon="twitter" class="pr-1" />5</a></li>
              </ul>
            </mdb-card-footer>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <hr class="my-5"/>
      <h2>Flat buttons</h2>
      <mdb-row>
        <mdb-col sm="4">
          <mdb-card>
            <mdb-view hover>
              <a href="#!">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" alt="Card image cap"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body>
              <a class="activator mr-4"><mdb-icon icon="share-alt" /></a>
              <mdb-card-title>Light version</mdb-card-title>
              <hr/>
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <a class="black-text d-flex justify-content-end"><h5>Read more <mdb-icon icon="angle-double-right" class="pl-1" /></h5></a>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card dark>
            <mdb-view hover>
              <a href="#!">
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg" alt="Card image cap"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body color="elegant" class="white-text">
              <a class="activator mr-4"><mdb-icon icon="share-alt" /></a>
              <mdb-card-title>Dark version</mdb-card-title>
              <hr class="hr-light"/>
              <p class="font-small mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a class="white-text d-flex justify-content-end"><h5>Read more <mdb-icon icon="angle-double-right" class="pl-1" /></h5></a>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <hr class="my-5"/>
      <h4 class="mb-4">Testimonial card</h4>
      <mdb-row>
        <mdb-col sm="4">
          <mdb-card testimonial>
            <mdb-card-up class="indigo lighten-1"></mdb-card-up>
            <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="rounded-circle"></mdb-card-avatar>
            <mdb-card-body>
              <mdb-card-title>Anna Doe</mdb-card-title>
              <hr/>
              <p><mdb-icon icon="quote-left" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card testimonial>
            <mdb-card-up gradient="aqua" class="lighten-1"></mdb-card-up>
            <mdb-card-avatar color="white" class="mx-auto"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" class="rounded-circle"></mdb-card-avatar>
            <mdb-card-body>
              <mdb-card-title>Martha Smith</mdb-card-title>
              <hr/>
              <p><mdb-icon icon="quote-left" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <hr class="my-5"/>
      <h2>Image overlay</h2>
      <mdb-row>
        <mdb-col sm="6">
          <mdb-card class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
            <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 class="pink-text"><mdb-icon icon="chart-pie" /> Marketing</h5>
                <mdb-card-title tag="h3" class="pt-2"><strong>This is card title</strong></mdb-card-title>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                    Odit sed qui, dolorum!.</p>
                <mdb-btn color="pink" icon="clone left"><mdb-icon  /> View project</mdb-btn>
              </div>
            </div>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="6">
          <mdb-card class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')">
            <div class="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
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
        </mdb-col>
      </mdb-row>
      <hr class="my-5"/>
      <h4 class="mb-4">Flipping card</h4>
      <mdb-flipping-card :flipped="flipped" innerClass="text-center h-100 w-100" style="max-width: 22rem; height: 416px;">
        <mdb-card class="face front">
          <mdb-card-up>
            <img  class="card-image-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" alt="a photo of a house facade" />
          </mdb-card-up>
          <mdb-avatar class="mx-auto white" circle>
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle"/>
          </mdb-avatar>
          <mdb-card-body>
            <h4 class="font-weight-bold mb-3">Marie Johnson</h4>
            <p class="font-weight-bold blue-text">Web developer</p>
            <a class="rotate-btn" @click="flipped=true"><mdb-icon icon="redo"/> Click here to rotate</a>
          </mdb-card-body>
        </mdb-card>
        <mdb-card class="face back" style="height: 416px;">
          <mdb-card-body>
            <h4 class="font-weight-bold">About me</h4>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta. Blanditiis rem amet repellat, dolores nihil quae in mollitia asperiores ut rerum repellendus, voluptatum eum, officia laudantium quaerat?
            </p>
            <hr/>
            <ul class="list-inline py-2">
              <li class="list-inline-item"><a class="p-2 fa-lg fb-ic"><mdb-icon fab icon="facebook"/></a></li>
              <li class="list-inline-item"><a class="p-2 fa-lg tw-ic"><mdb-icon fab icon="twitter"/></a></li>
              <li class="list-inline-item"><a class="p-2 fa-lg gplus-ic"><mdb-icon fab icon="google-plus"/></a></li>
              <li class="list-inline-item"><a class="p-2 fa-lg li-ic"><mdb-icon fab icon="linkedin"/></a></li>
            </ul>
            <a class="rotate-btn" @click="flipped=false"><mdb-icon icon="undo"/> Click here to rotate back</a>
          </mdb-card-body>
        </mdb-card>
      </mdb-flipping-card>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFlippingCard, mdbAvatar } from 'mdbvue';

export default {
  name: 'CardProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon,
    mdbFlippingCard,
    mdbAvatar
  },
  data() {
    return {
      flipped: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  font-weight: bold;
}
</style>
