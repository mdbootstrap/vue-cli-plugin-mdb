<template>
  <mdb-container class="text-center mt-5">
    <mdb-row class="mt-5">
      <h4 class="demo-title"><strong>Video Pro </strong></h4>
      <a href="https://mdbootstrap.com/plugins/vue/video/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <h4 class="my-4 text-left">Video within modals</h4>

    <mdb-row>

      <!-- Grid column -->
      <mdb-col lg="4" md="12" class="mb-4">
        <a @click="showModal = true"><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg" alt="video" data-toggle="modal" data-target="#modal1"></a>
        <mdb-modal size="lg" :show="showModal" @close="showModal = false">
          <mdb-modal-body class="mb-0 p-0">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U"
                allowfullscreen></iframe>
            </div>
          </mdb-modal-body>
          <mdb-modal-footer class="justify-content-center">
            <span class="mr-4">Spread the word!</span>
            <a class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>
            <!--Twitter-->
            <a class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>
            <!--Google +-->
            <a class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>
            <!--Linkedin-->
            <a class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>
            <mdb-btn outline="primary" rounded size="md" class="ml-4" @click.native="showModal = false">Close</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </mdb-col>
      <!-- Grid column -->
      <!-- Grid column -->
      <mdb-col lg="4" md="6" class="mb-4">
        <a @click="showModal2 = true"><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg" alt="video" data-toggle="modal" data-target="#modal1"></a>
        <mdb-modal size="lg" :show="showModal2" @close="showModal2 = false">
          <mdb-modal-body class="mb-0 p-0">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wTcNtgA6gHs"
                allowfullscreen></iframe>
            </div>
          </mdb-modal-body>
          <mdb-modal-footer class="justify-content-center">
            <span class="mr-4">Spread the word!</span>
            <a class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>
            <!--Twitter-->
            <a class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>
            <!--Google +-->
            <a class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>
            <!--Linkedin-->
            <a class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>
            <mdb-btn outline="primary" rounded size="md" class="ml-4" @click.native="showModal2 = false">Close</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </mdb-col>
      <!-- Grid column -->
      <!-- Grid column -->
      <mdb-col lg="4" md="6" class="mb-4">
        <a @click="showModal3 = true"><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg" alt="video" data-toggle="modal" data-target="#modal1"></a>
        <mdb-modal size="lg" :show="showModal3" @close="showModal3 = false">
          <mdb-modal-body class="mb-0 p-0">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM"
                allowfullscreen></iframe>
            </div>
          </mdb-modal-body>
          <mdb-modal-footer class="justify-content-center">
            <span class="mr-4">Spread the word!</span>
            <a class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>
            <!--Twitter-->
            <a class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>
            <!--Google +-->
            <a class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>
            <!--Linkedin-->
            <a class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>
            <mdb-btn outline="primary" rounded size="md" class="ml-4" @click.native="showModal3 = false">Close</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </mdb-col>
      <!-- Grid column -->

    </mdb-row>

    <h4 class="my-4 text-left">Video background</h4>
    <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/video">
      <mdb-btn>Live preview</mdb-btn>
    </mdb-nav-item>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbModal, mdbModalBody, mdbModalFooter, mdbBtn, mdbNavItem } from 'mdbvue';

export default {
  name: 'VideoProPage',
  data() {
    return {
      showModal: false,
      showModal2: false,
      showModal3: false,
      loading: true
    };
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbModal,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn,
    mdbNavItem,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    margin: 0;
  }

</style>
