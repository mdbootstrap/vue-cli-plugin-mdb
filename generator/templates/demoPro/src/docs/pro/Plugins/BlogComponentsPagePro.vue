<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Blog components</strong></h4>
      <a href="https://mdbootstrap.com/plugins/vue/blog-components/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank">
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <hr class="mb-5" />
    <section class="demo-section">
      <h4>Comments List v.2</h4>
      <section>
        <mdb-card-header class="border-0 font-weight-bold d-flex justify-content-between">4 comments</mdb-card-header>
        <mdb-media class="d-block d-md-flex mt-4">
          <img class="card-img-64 rounded-circle d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image">
          <mdb-media-body class="text-center text-md-left ml-md-3 ml-0">
            <h5 class="font-weight-bold mt-0">
              <a class="text-default" href="">Miley Steward</a>
              <a href="" class="pull-right">
                <mdb-icon class="text-default" icon="reply" />
              </a>
            </h5>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <mdb-media class="d-block d-md-flex mt-4">
              <img class="card-img-64 rounded-circle d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg" alt="Generic placeholder image">
              <mdb-media-body class="text-center text-md-left ml-md-3 ml-0">
                <h5 class="font-weight-bold mt-0">
                  <a class="text-default" href="">Tommy Smith</a>
                  <a href="" class="pull-right">
                    <mdb-icon class="text-default" icon="reply" />
                  </a>
                </h5>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </mdb-media-body>
            </mdb-media>
            <div class="form-group mt-4">
              <mdb-textarea id="quickReplyFormComment" label="Your comment" rows="4"></mdb-textarea>
              <div class="text-center my-4">
                <mdb-btn color="default" size="sm" rounded type="submit">Post</mdb-btn>
              </div>
            </div>
            <mdb-media class="d-block d-md-flex mt-4">
              <img class="card-img-64 rounded-circle d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg" alt="Generic placeholder image">
              <mdb-media-body class="text-center text-md-left ml-md-3 ml-0">
                <h5 class="font-weight-bold mt-0">
                  <a class="text-default" href="">Sylvester the Cat</a>
                  <a href="" class="pull-right">
                    <mdb-icon class="text-default" icon="reply" />
                  </a>
                </h5>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </mdb-media-body>
            </mdb-media>
          </mdb-media-body>
        </mdb-media>
        <mdb-media class="d-block d-md-flex mt-4">
          <img class="card-img-64 rounded-circle d-flex mx-auto mb-3" src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" alt="Generic placeholder image">
          <mdb-media-body class="text-center text-md-left ml-md-3 ml-0">
            <h5 class="font-weight-bold mt-0">
              <a class="text-default" href="">Caroline Horwitz</a>
              <a href="" class="pull-right">
                <mdb-icon class="text-default" icon="reply" />
              </a>
            </h5>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
            officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </mdb-media-body>
        </mdb-media>
        <mdb-pagination color="teal" circle class="d-flex justify-content-center mt-5">
          <mdb-page-item>First</mdb-page-item>
          <mdb-page-nav prev></mdb-page-nav>
          <mdb-page-item active>1</mdb-page-item>
          <mdb-page-item>2</mdb-page-item>
          <mdb-page-item>3</mdb-page-item>
          <mdb-page-item>4</mdb-page-item>
          <mdb-page-item>5</mdb-page-item>
          <mdb-page-nav next></mdb-page-nav>
          <mdb-page-item>Last</mdb-page-item>
        </mdb-pagination>
      </section>
    </section>
    <section class="demo-section">
      <h4>Reply Form v.2</h4>
      <section>
        <mdb-card-header class="border-0 font-weight-bold d-flex justify-content-between">Leave a reply</mdb-card-header>
        <form class="px-1 mt-4">

        <!-- Comment -->
        <div class="form-group">
          <mdb-textarea id="replyFormComment" rows="5" label="Your comment" />
        </div>

        <!-- Name -->
        <mdb-input type="text" id="replyFormName" label="Your name" />

        <!-- Email -->
        <mdb-input type="email" id="replyFormEmail" label="Your e-mail" />

        <div class="text-center mt-4">
          <mdb-btn color="default" size="md" rounded type="submit">Post</mdb-btn>
        </div>

      </form>
      <!-- Default form reply -->
      </section>
    </section>
    <section class="demo-section">
      <h4>Reply Form v.4</h4>
      <section>
        <!-- Reply form -->
        <form>

          <div class="d-md-flex flex-md-fill">

            <mdb-input type="text" placeholder="Username">
              <span slot="prepend" class="input-group-text md-addon pr-4" id="basic-addon9"><mdb-icon icon="user" /></span>
            </mdb-input>
            <mdb-input type="text" placeholder="Email">
              <span slot="prepend" class="input-group-text md-addon pr-4" id="basic-addon10"><mdb-icon icon="at" /></span>
            </mdb-input>
            <mdb-input type="text" placeholder="Website">
              <span slot="prepend" class="input-group-text md-addon pr-4" id="basic-addon101"><mdb-icon icon="code" /></span>
            </mdb-input>

          </div>

          <mdb-input type="textarea" :rows="5" placeholder="Write something here">
            <span slot="prepend" class="input-group-text align-items-start md-addon pr-4"><mdb-icon icon="pencil-alt" /></span>
          </mdb-input>

          <div class="text-center mt-4">
            <mdb-btn color="default" size="md" rounded type="submit">Submit</mdb-btn>
          </div>

        </form>
        <!-- Reply form -->
      </section>
    </section>
    <section class="demo-section">
      <h4>Reply Form (logged in user) v.2</h4>
      <section>
        <mdb-card-header class="border-0 font-weight-bold d-flex justify-content-between">Leave a reply (logged in user)</mdb-card-header>
        <div class="d-md-flex flex-md-fill px-1">
          <div class="d-flex justify-content-center mr-md-5 mt-md-5 mt-4">
            <img class="card-img-100 z-depth-1 rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
              alt="avatar">
          </div>
          <mdb-input type="textarea" class="w-100 pt-0" id="exampleFormControlTextarea1" :rows="5" placeholder="Write something here..."></mdb-input>
        </div>
        <div class="text-center mt-4">
          <mdb-btn color="default" rounded size="md" type="submit">Submit</mdb-btn>
        </div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbCardHeader, mdbMedia, mdbMediaBody, mdbPagination, mdbPageNav, mdbPageItem, mdbTextarea, mdbInput, mdbBtn } from 'mdbvue';

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCardHeader,
    mdbMedia,
    mdbMediaBody,
    mdbPagination,
    mdbPageNav,
    mdbPageItem,
    mdbTextarea,
    mdbInput,
    mdbBtn
  }
};
</script>

<style>
</style>