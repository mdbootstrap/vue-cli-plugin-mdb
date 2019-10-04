<template>
  <div>
    <mdb-navbar style="margin-top: 50px; padding: 20px" position="top" color="light-blue" dark transparent scrolling>
      <mdb-container>
        <mdb-navbar-brand href="#"><strong>MDB</strong></mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item waves-fixed active>Home</mdb-nav-item>
            <mdb-nav-item waves-fixed>Link</mdb-nav-item>
            <mdb-nav-item waves-fixed>Profile</mdb-nav-item>
          </mdb-navbar-nav>
          <!--Search form -->
          <mdb-navbar-nav right>
            <form>
              <mdb-input type="text" class="text-white f-flex" placeholder="Search" aria-label="Search" navInput waves waves-fixed/>
            </form>
          </mdb-navbar-nav>
          <!--/.Search form -->
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>

    <mdb-parallax
      src="https://mdbootstrap.com/img/Photos/Others/images/76.jpg'"
      height="full"
      factor="2"
      >
      <mdb-mask overlay="blue-slight" flexCenter>
        <mdb-row class="mb-5 pb-5 text-center white-text">
          <mdb-col md="12" xl="12" class="mx-auto">
            <h1 class="display-3 font-weight-bold animated fadeInDown">Natalie <a class="indigo-text">Smith</a></h1>
            <h5 class="font-weight-bold pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 animated fadeInDown">Web developer & graphic designer</h5>
            <mdb-btn size="lg animated fadeInDown" color="light-blue">portfolio</mdb-btn>
            <mdb-btn size="lg animated fadeInDown" color="indigo">about me</mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-mask>
    </mdb-parallax>
    <main>
      <mdb-container>
          <!--Grid row-->
          <mdb-row class="py-5">

            <!--Grid column-->
            <mdb-col md="12" class="text-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

            </mdb-col>
            <!--Grid column-->
          </mdb-row>
          <!--Grid row-->
      </mdb-container>
    </main>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbContainer, mdbParallax, mdbMask, mdbRow, mdbCol, mdbBtn } from 'mdbvue';
export default {
  name: 'ParallaxPage',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbInput,
    mdbContainer,
    mdbParallax,
    mdbMask,
    mdbRow,
    mdbCol,
    mdbBtn
  }
};
</script>
<style scoped>
.top-nav-collapse {
  background-color: #82b1ff !important;
}

h1, h5 {
  text-transform: uppercase;
}

h5 {
  letter-spacing: 3px;
}
</style>
