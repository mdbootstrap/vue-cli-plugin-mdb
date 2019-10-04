<template>
  <div class="video-background-page">
    <mdb-navbar style="margin-top: 50px; padding-top: 25px;" color="primary" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdbNavbarBrand href="#"><strong>MDB</strong></mdbNavbarBrand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>About</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Services</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Opinions</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Team</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Contact</mdb-nav-item>
          </mdb-navbar-nav>
          <mdb-navbar-nav right>
            <mdb-nav-item href="#!" waves-fixed><mdb-icon fab icon="facebook-f" class="light-green-text-2"/></mdb-nav-item>
            <mdb-nav-item href="#!" waves-fixed><mdb-icon fab icon="twitter" class="light-green-text-2"/></mdb-nav-item>
            <mdb-nav-item href="#!" waves-fixed><mdb-icon fab icon="instagram" class="light-green-text-2"/></mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>

    <mdb-view style="margin-top: -10px" src="https://mdbootstrap.com/img/video/animation.mp4" video>
      <mdb-mask class="d-flex justify-content-center align-items-center gradient">
        <mdb-container class="px-md-3 px-sm-0">
          <mdb-row>
            <mdb-col md="12" class="mb-4 white-text text-center animated fadeIn">
              <h3 class="display-3 font-weight-bold mb-0 pt-md-5 ">Creative Agency </h3>
              <hr class="hr-light my-4 w-75 "  />
              <h4 class="subtext-header mt-2 mb-4" >Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti consequuntur nihil.</h4>
              <mdb-btn outline="white" rounded color="white" ><mdb-icon icon="home"/> Visit us</mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>

    <mdb-container>
      <mdb-row class="pt-5 pb-4">
        <mdb-col md="12" class="text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';

export default {
  name: 'VideoBackgroundPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand
  }
};
</script>

<style scoped>
.video-background-page .gradient {
    background: -moz-linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
    background: -webkit-linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
    background: linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
}

.video-background-page .view video {
  top: 0!important;
  left: 0!important;
  transform: none!important;
  height: calc(100vh - 60px);
}

.video-background-page .navbar {
  transition: background .5s ease-in-out,padding .5s ease-in-out;
}

.top-nav-collapse {
  background-color: #563e91 !important;
}
</style>
