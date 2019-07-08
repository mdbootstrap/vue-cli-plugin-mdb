<template>
  <div class="flexible-content">
    <mdb-navbar
      dark
      color="black"
      position="top"
      style="margin-top: 50px; z-index: 1060; padding-top: 20px"
      :toggler="false"
    >
      <mdb-navbar-nav left class="side-toggler">
        <mdb-nav-item>
          <mdb-icon icon="bars" size="lg" @click.native="toggle=!toggle" />
        </mdb-nav-item>
      </mdb-navbar-nav>
      <mdb-navbar-nav class="nav-flex-icons" right>
        <mdb-nav-item
          to="/navigation/pro/double-navigation-v1"
          waves-fixed
          icon="code-branch"
        >Version 1</mdb-nav-item>
        <mdb-nav-item to="/navigation/pro/double-navigation-v2" waves-fixed icon="eye">Version 2</mdb-nav-item>
        <mdb-nav-item
          to="/navigation/pro/double-navigation-v3"
          waves-fixed
          icon="file-code"
          far
        >Version 3</mdb-nav-item>
        <mdb-nav-item
          to="/navigation/pro/double-navigation-v4"
          waves-fixed
          icon="terminal"
        >Version 4</mdb-nav-item>
        <mdb-nav-item
          to="/navigation/pro/double-navigation-v5"
          waves-fixed
          icon="smile"
          far
        >Version 5</mdb-nav-item>
        <mdb-nav-item
          to="/navigation/pro/double-navigation-v6"
          waves-fixed
          icon="user"
          far
          active
        >Version 6</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar>
    <!--/.Navbar-->
    <div class="black-skin">
      <mdb-side-nav
        logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
        sideNavClass="sn-bg-4"
        mask="dark"
        :OpenedFromOutside.sync="toggle"
        :breakWidth="900"
        sideNavStyle="top: 110px;"
      >
        <ul>
          <li>
            <ul class="social">
              <li>
                <a href="#" class="icons-sm fb-ic">
                  <mdb-icon fab icon="facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" class="icons-sm pin-ic">
                  <mdb-icon fab icon="pinterest-p" />
                </a>
              </li>
              <li>
                <a href="#" class="icons-sm gplus-ic">
                  <mdb-icon fab icon="google-plus-g" />
                </a>
              </li>
              <li>
                <a href="#" class="icons-sm tw-ic">
                  <mdb-icon fab icon="twitter" />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <form class="search-form" role="search">
              <div class="form-group md-form mt-0 pt-1 ripple-parent" @click="wave">
                <mdb-input type="text" placeholder="Search" />
              </div>
            </form>
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
              <mdb-side-nav-item
                header
                icon="cubes"
                href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVuePro"
                target="_blank"
              >Official docs</mdb-side-nav-item>
            </mdb-side-nav-nav>
          </li>
        </ul>
      </mdb-side-nav>
    </div>
    <div style="height: 100vh; margin-bottom: -25px">
      <div class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-light flex-center">
            <div class="container">
              <div class="white-text text-center">
                <h2
                  class="font-weight-bold"
                >Double navigation with fixed sidenav under fixed navbar</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbBtn,
  mdbSideNav,
  mdbSideNavNav,
  mdbSideNavCat,
  mdbSideNavItem,
  mdbIcon,
  waves
} from "mdbvue";

export default {
  name: "DoubleNavigationPagev6",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbInput,
    mdbBtn,
    mdbSideNav,
    mdbSideNavNav,
    mdbSideNavCat,
    mdbSideNavItem,
    mdbIcon
  },
  data() {
    return {
      toggle: false
    };
  },
  mixins: [waves]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (51).jpg")
    no-repeat center center;
  background-size: cover;
  height: 100%;
}
.flexible-content,
.flexible-content .navbar {
  transition: margin-left 0.5s;
}

@media (min-width: 900px) {
  .flexible-content {
    margin-left: 240px;
  }
  .side-toggler {
    display: none;
  }
}
</style>
