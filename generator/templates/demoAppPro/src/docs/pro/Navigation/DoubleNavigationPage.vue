<template>
  <div :class="sideNavFixed && 'flexible-content'">
    <!--Navbar-->
    <mdb-navbar v-show="navbarType == 'regular-fixed'" position="top" style="margin-top: 60px" dark color="primary" href="#" scrolling>
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-icon icon="bars" size="2x" @click.native="handleBtnAClick"/>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#!" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed>CSS</mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed>Components</mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed>Advanced</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!--Navbar-->
    <mdb-navbar v-show="navbarType == 'regular-non-fixed'" style="margin-top: 5px" dark color="primary" href="#">
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-icon icon="bars" size="2x" @click.native="handleBtnAClick"/>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#!" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed>CSS</mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed>Components</mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed>Advanced</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <mdb-side-nav
      logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
      :OpenedFromOutside.sync="toggleA"
      color="primary-color"
      v-show="sideNavFixed"
      waves>
      <li>
        <ul class="social">
        <li><a href="#" class="icons-sm fb-ic"><mdb-icon fab icon="facebook-f" /></a></li>
        <li><a href="#" class="icons-sm pin-ic"><mdb-icon fab icon="pinterest-p" /></a></li>
        <li><a href="#" class="icons-sm gplus-ic"><mdb-icon fab icon="google-plus-g" /></a></li>
        <li><a href="#" class="icons-sm tw-ic"><mdb-icon fab icon="twitter" /></a></li>
        </ul>
      </li>
      <li>
        <mdb-side-nav-nav>
          <mdb-side-nav-cat name="Submit blog" icon="chevron-right">
            <mdb-side-nav-item href="#">Submit listing</mdb-side-nav-item>
            <mdb-side-nav-item href="#">Registration form</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Instruction" far icon="hand-pointer">
            <mdb-side-nav-item href="#">For bloggers</mdb-side-nav-item>
            <mdb-side-nav-item href="#">For authors</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="About" icon="eye">
            <mdb-side-nav-item href="#">Introduction</mdb-side-nav-item>
            <mdb-side-nav-item href="#">Monthly meetings</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Contact me" far icon="envelope">
            <mdb-side-nav-item href="#">FAQ</mdb-side-nav-item>
            <mdb-side-nav-item href="#">Write a message</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-item header icon="envelope" href="#">Write a message</mdb-side-nav-item>
          <mdb-side-nav-item header icon="user" href="#">Profile</mdb-side-nav-item>
        </mdb-side-nav-nav>
      </li>
    </mdb-side-nav>
    <mdb-side-nav
      v-show="!sideNavFixed"
      logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
      :OpenedFromOutside.sync="toggleA"
      color="primary-color"
      hidden
      waves>
      <li>
        <ul class="social">
        <li><a href="#" class="icons-sm fb-ic"><mdb-icon fab icon="facebook-f" /></a></li>
        <li><a href="#" class="icons-sm pin-ic"><mdb-icon fab icon="pinterest-p" /></a></li>
        <li><a href="#" class="icons-sm gplus-ic"><mdb-icon fab icon="google-plus-g" /></a></li>
        <li><a href="#" class="icons-sm tw-ic"><mdb-icon fab icon="twitter" /></a></li>
        </ul>
      </li>
      <li>
        <mdb-side-nav-nav>
          <mdb-side-nav-cat name="Submit blog" icon="chevron-right">
            <mdb-side-nav-item href="#">Submit listing</mdb-side-nav-item>
            <mdb-side-nav-item href="#">Registration form</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Instruction" far icon="hand-pointer">
            <mdb-side-nav-item href="#">For bloggers</mdb-side-nav-item>
            <mdb-side-nav-item href="#">For authors</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="About" icon="eye">
            <mdb-side-nav-item href="#">Introduction</mdb-side-nav-item>
            <mdb-side-nav-item href="#">Monthly meetings</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Contact me" far icon="envelope">
            <mdb-side-nav-item href="#">FAQ</mdb-side-nav-item>
            <mdb-side-nav-item href="#">Write a message</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-item header icon="envelope" href="#">Write a message</mdb-side-nav-item>
          <mdb-side-nav-item header icon="user" href="#">Profile</mdb-side-nav-item>
        </mdb-side-nav-nav>
      </li>
    </mdb-side-nav>
    <div style="height: 100vh">
      <div class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-strong flex-center">
            <div class="container">
              <div class="white-text text-center wow fadeInUp">
                <h2>This is test message</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div :style="[{'position': 'absolute','left': '100px','top': '200px','z-index': 50}, sideNavFixed && {'padding-left': '160px'}]">
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-fixed', sideNavFixed=false">Double Navigation with hidden SideNav & fixed mdbNavbar</mdb-btn>
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed', sideNavFixed=false">Double Navigation with hidden SideNav & non-fixed mdbNavbar</mdb-btn>
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-fixed', sideNavFixed=true">Double Navigation with fixed SideNav & fixed mdbNavbar</mdb-btn>
      <mdb-btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed', sideNavFixed=true">Double Navigation with fixed SideNav & non-fixed mdbNavbar</mdb-btn>
    </div>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbSideNav, mdbSideNavNav, mdbSideNavCat, mdbSideNavItem, mdbIcon, waves } from 'mdbvue';

export default {
  name: 'DoubleNavigationPage',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbSideNav,
    mdbSideNavNav,
    mdbSideNavCat,
    mdbSideNavItem,
    mdbIcon
  },
  data() {
    return {
      active: {
        0: false
      },
      navbarType: 'regular-fixed',
      sideNavFixed: false,
      toggleA: false
    };
  },
  methods: {
    handleBtnAClick() {
      this.toggleA = !this.toggleA;
    },
    beforeEnter(el) {
      this.elHeight = el.scrollHeight;
    },
    enter(el) {
      el.style.height = this.elHeight+'px';
    },
    beforeLeave(el) {
      el.style.height = 0;
    }
  },
  mixins: [waves]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (42).jpg")no-repeat center center;
  background-size: cover;
  height: 100%;
}
.collapsible {
  margin-top: 1rem;
}

.collapsible-header {
  position: relative;
}

.collapse-item {
  overflow: hidden;
  height: 0;
  padding: 0;
  transition: height .3s;
}
.collapse-item a {
    padding-left: 47px;
    line-height: 36px;
    background-color: rgba(0,0,0,.15);
}
.fa-angle-down {
  float: right;
}
.icon-div {
  width: 49%;
  display: inline-block;
}

.rotated {
  transform: rotate(180deg);
}

.navbar i {
  cursor: pointer;
  color: white;
}

.flexible-content {
  transition: padding-left 0.5s;
}

@media (min-width: 1440px) {
  .flexible-content {
    padding-left: 240px;
  }
}
</style>
