<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">Social Buttons </h4>
      <a href="https://mdbootstrap.com/docs/vue/components/buttons-social/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Various sizes of buttons and icons</h4>
      <section>
        <mdb-btn class="btn-so" icon="stack-overflow" fab size="lg">Stack overflow</mdb-btn>
        <span class="counter">22</span>
        <mdb-btn class="btn-so" icon="stack-overflow" fab>Stack overflow</mdb-btn>
        <span class="counter">22</span>
        <mdb-btn class="btn-so" icon="stack-overflow" fab size="md">Stack overflow</mdb-btn>
        <span class="counter">22</span>
        <mdb-btn class="btn-so" icon="stack-overflow" fab size="sm">Stack overflow</mdb-btn>
        <span class="counter">22</span>
        <br><br>
        <mdb-btn class="btn-fb" icon="facebook-f" fab size="lg">Facebook</mdb-btn>
        <mdb-btn class="btn-fb" icon="facebook-f" fab>Facebook</mdb-btn>
        <mdb-btn class="btn-fb" icon="facebook-f" fab size="md">Facebook</mdb-btn>
        <mdb-btn class="btn-fb" icon="facebook-f" fab size="sm">Facebook</mdb-btn>
        <br><br>
        <mdb-btn class="btn-dribbble" icon="dribbble" fab size="lg" />
        <mdb-btn class="btn-dribbble" icon="dribbble" fab />
        <mdb-btn class="btn-dribbble" icon="dribbble" fab size="md" />
        <mdb-btn class="btn-dribbble" icon="dribbble" fab size="sm" />
        <br><br>
        <mdb-btn class="btn-slack" icon="slack-hash" fab size="lg" />
        <span class="counter">22</span>
        <mdb-btn class="btn-slack" icon="slack-hash" fab />
        <span class="counter">22</span>
        <mdb-btn class="btn-slack" icon="slack-hash" fab size="md" />
        <span class="counter">22</span>
        <mdb-btn class="btn-slack" icon="slack-hash" fab size="sm" />
        <span class="counter">22</span>
        <br><br>
        <mdb-btn tag="a" floating class="btn-tw" icon="twitter" fab size="lg" />
        <mdb-btn tag="a" floating class="btn-tw" icon="twitter" fab />
        <mdb-btn tag="a" floating class="btn-tw" icon="twitter" fab size="md" />
        <mdb-btn tag="a" floating class="btn-tw" icon="twitter" fab size="sm" />
        <br><br>
        <a class="reddit-ic" role="button"><mdb-icon icon="reddit-alien" fab size="5x" class="pr-3" /></a>
        <a class="reddit-ic" role="button"><mdb-icon icon="reddit-alien" fab size="4x" class="pr-3" /></a>
        <a class="reddit-ic" role="button"><mdb-icon icon="reddit-alien" fab size="3x" class="pr-3" /></a>
        <a class="reddit-ic" role="button"><mdb-icon icon="reddit-alien" fab size="2x" class="pr-3" /></a>
        <a class="reddit-ic" role="button"><mdb-icon icon="reddit-alien" fab size="lg" class="pr-3" /></a>
        <a class="reddit-ic" role="button"><mdb-icon icon="reddit-alien" fab /></a>
      </section>
    </section>
    <section class="demo-section">
      <h4>Full name social buttons</h4>
      <section>
        <mdb-btn class="btn-fb" icon="facebook-f" fab>Facebook</mdb-btn>
        <mdb-btn class="btn-tw" icon="twitter" fab>Twitter</mdb-btn>
        <mdb-btn class="btn-gplus" icon="google-plus-g" fab>Google +</mdb-btn>
        <mdb-btn class="btn-li" icon="linkedin-in" fab>Linkedin</mdb-btn>
        <mdb-btn class="btn-ins" icon="instagram" fab>Instagram</mdb-btn>
        <mdb-btn class="btn-pin" icon="pinterest" fab>Pinterest</mdb-btn>
        <mdb-btn class="btn-vk" icon="vk" fab>Vkontakte</mdb-btn>
        <mdb-btn class="btn-so" icon="stack-overflow" fab>Stack Overflow</mdb-btn>
        <mdb-btn class="btn-yt" icon="youtube" fab>Youtube</mdb-btn>
        <mdb-btn class="btn-slack" icon="slack-hash" fab>Slack</mdb-btn>
        <mdb-btn class="btn-git" icon="github" fab>Github</mdb-btn>
        <mdb-btn class="btn-comm" icon="comments">Comments</mdb-btn>
        <mdb-btn class="btn-email" icon="envelope">Email</mdb-btn>
        <mdb-btn class="btn-dribbble" icon="dribbble" fab>Dribbble</mdb-btn>
        <mdb-btn class="btn-reddit" icon="reddit-alien" fab>Reddit</mdb-btn>
      </section>
    </section>
    <section class="demo-section">
      <h4>Simple social buttons</h4>
      <section>
        <mdb-btn class="btn-fb" icon="facebook-f" fab></mdb-btn>
        <mdb-btn class="btn-tw" icon="twitter" fab></mdb-btn>
        <mdb-btn class="btn-gplus" icon="google-plus-g" fab></mdb-btn>
        <mdb-btn class="btn-li" icon="linkedin-in" fab></mdb-btn>
        <mdb-btn class="btn-ins" icon="instagram" fab></mdb-btn>
        <mdb-btn class="btn-pin" icon="pinterest" fab></mdb-btn>
        <mdb-btn class="btn-vk" icon="vk" fab></mdb-btn>
        <mdb-btn class="btn-so" icon="stack-overflow" fab></mdb-btn>
        <mdb-btn class="btn-yt" icon="youtube" fab></mdb-btn>
        <mdb-btn class="btn-slack" icon="slack-hash" fab></mdb-btn>
        <mdb-btn class="btn-git" icon="github" fab></mdb-btn>
        <mdb-btn class="btn-comm" icon="comments"></mdb-btn>
        <mdb-btn class="btn-email" icon="envelope"></mdb-btn>
        <mdb-btn class="btn-dribbble" icon="dribbble" fab></mdb-btn>
        <mdb-btn class="btn-reddit" icon="reddit-alien" fab></mdb-btn>
      </section>
    </section>
    <section class="demo-section">
      <h4>Floating social buttons</h4>
      <section>
        <mdb-btn tag="a" size="lg" floating class="btn-fb" icon="facebook-f" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-tw" icon="twitter" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-gplus" icon="google-plus-g" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-li" icon="linkedin-in" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-ins" icon="instagram" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-pin" icon="pinterest" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-vk" icon="vk" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-so" icon="stack-overflow" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-yt" icon="youtube" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-slack" icon="slack-hash" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-git" icon="github" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-comm" icon="comments"></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-email" icon="envelope"></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-dribbble" icon="dribbble" fab></mdb-btn>
        <mdb-btn tag="a" size="lg" floating class="btn-reddit" icon="reddit-alien" fab></mdb-btn>
      </section>
    </section>
    <section class="demo-section">
      <h4>Full name social counters</h4>
      <section>
        <mdb-btn class="btn-fb" icon="facebook-f" fab>Facebook</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-tw" icon="twitter" fab>Twitter</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-gplus" icon="google-plus-g" fab>Google +</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-li" icon="linkedin-in" fab>Linkedin</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-ins" icon="instagram" fab>Instagram</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-pin" icon="pinterest" fab>Pinterest</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-vk" icon="vk" fab>Vkontakte</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-so" icon="stack-overflow" fab>Stack Overflow</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-yt" icon="youtube" fab>Youtube</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-slack" icon="slack-hash" fab>Slack</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-git" icon="github" fab>Github</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-comm" icon="comments">Comments</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-email" icon="envelope">Email</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-dribbble" icon="dribbble" fab>Dribbble</mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-reddit" icon="reddit-alien" fab>Reddit</mdb-btn><span class="counter">22</span>
      </section>
    </section>
    <section class="demo-section">
      <h4>Simple social counters</h4>
      <section>
        <mdb-btn class="btn-fb" icon="facebook-f" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-tw" icon="twitter" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-gplus" icon="google-plus-g" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-li" icon="linkedin-in" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-ins" icon="instagram" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-pin" icon="pinterest" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-vk" icon="vk" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-so" icon="stack-overflow" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-yt" icon="youtube" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-slack" icon="slack-hash" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-git" icon="github" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-comm" icon="comments"></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-email" icon="envelope"></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-dribbble" icon="dribbble" fab></mdb-btn><span class="counter">22</span>
        <mdb-btn class="btn-reddit" icon="reddit-alien" fab></mdb-btn><span class="counter">22</span>
      </section>
    </section>
    <section class="demo-section">
      <h4>Social icons</h4>
      <section>
        <a class="fb-ic mr-3" role="button"><mdb-icon fab icon="facebook-f" size="lg" /></a>
        <a class="tw-ic mr-3" role="button"><mdb-icon fab icon="twitter" size="lg" /></a>
        <a class="gplus-ic mr-3" role="button"><mdb-icon fab icon="google-plus-g" size="lg" /></a>
        <a class="li-ic mr-3" role="button"><mdb-icon fab icon="linkedin-in" size="lg" /></a>
        <a class="ins-ic mr-3" role="button"><mdb-icon fab icon="instagram" size="lg" /></a>
        <a class="pin-ic mr-3" role="button"><mdb-icon fab icon="pinterest" size="lg" /></a>
        <a class="vk-ic mr-3" role="button"><mdb-icon fab icon="vk" size="lg" /></a>
        <a class="so-ic mr-3" role="button"><mdb-icon fab icon="stack-overflow" size="lg" /></a>
        <a class="yt-ic mr-3" role="button"><mdb-icon fab icon="youtube" size="lg" /></a>
        <a class="slack-ic mr-3" role="button"><mdb-icon fab icon="slack-hash" size="lg" /></a>
        <a class="git-ic mr-3" role="button"><mdb-icon fab icon="github" size="lg" /></a>
        <a class="comm-ic mr-3" role="button"><mdb-icon icon="comments" size="lg" /></a>
        <a class="email-ic mr-3" role="button"><mdb-icon icon="envelope" size="lg" /></a>
        <a class="dribbble-ic mr-3" role="button"><mdb-icon fab icon="dribbble" size="lg" /></a>
        <a class="reddit-ic mr-3" role="button"><mdb-icon fab icon="reddit-alien" size="lg" /></a>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbBtn, mdbContainer, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'ButtonsSocialPage',
  components: {
    mdbBtn,
    mdbContainer,
    mdbIcon,
    mdbRow
  }
};
</script>

<style scoped>
</style>
