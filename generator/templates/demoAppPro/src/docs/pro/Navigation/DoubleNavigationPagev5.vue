<template>
  <div class="flexible-content" :style="flexibleContentStyle">
    <mdb-navbar
      dark
      color="unique-color-dark"
      position="top"
      style="margin-top: 50px; padding-top: 20px"
      :toggler="false"
    >
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
          active
        >Version 5</mdb-nav-item>
        <mdb-nav-item
          to="/navigation/pro/double-navigation-v6"
          waves-fixed
          icon="user"
          far
        >Version 6</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar>
    <!--/.Navbar-->
    <div class="navy-blue-skin">
      <mdb-side-nav
        slim
        :isCollapsed="collapse"
        name="Anna Deynah"
        :breakWidth="0"
        logo="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
        logoRound
        sideNavClass="sn-bg-1"
        mask="strong"
        sideNavStyle="top: 50px; padding-top: 10px"
      >
        <mdb-side-nav-nav>
          <mdb-side-nav-cat name="Submit blog" icon="chevron-down">
            <mdb-side-nav-item href="#" slimIcon="address-book">Submit listing</mdb-side-nav-item>
            <mdb-side-nav-item href="#" slimIcon="address-card">Registration form</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Instruction" far icon="hand-pointer">
            <mdb-side-nav-item href="#" slimIcon="blog">For bloggers</mdb-side-nav-item>
            <mdb-side-nav-item href="#" slimIcon="pen">For authors</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="About" icon="eye">
            <mdb-side-nav-item href="#" slimIcon="handshake">Introduction</mdb-side-nav-item>
            <mdb-side-nav-item href="#" slimIcon="tasks">Monthly meetings</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Contact me" far icon="envelope">
            <mdb-side-nav-item href="#">FAQ</mdb-side-nav-item>
            <mdb-side-nav-item href="#" slimIcon="paper-plane">Write a message</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-item
            icon="angle-double-left"
            open-icon="angle-double-right"
            @toggle="collapse = !collapse"
            toggler
            :isCollapsed="collapse"
            fixed
          >Minimize</mdb-side-nav-item>
        </mdb-side-nav-nav>
      </mdb-side-nav>
    </div>
    <div :style="contentStyle" class="page-content">
      <div class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-strong flex-center">
            <div class="container">
              <div class="white-text text-center">
                <h2
                  class="font-weight-bold"
                >Double navigation with fixed slim sidenav & fixed navbar</h2>
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
  name: "DoubleNavigationPagev1",
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
      toggle: false,
      wide: true,
      collapse: true,
      flexibleContentStyle: false
    };
  },
  computed: {
    contentStyle() {
      return `height: 100vh; margin-bottom: -25px; margin-left: ${this.collapse ? 60 : 240}px`;
    }
  },
  methods: {
    toggleCollapse() {
      this.collapse = !this.collapse;
      this.handleResize();
    }
  },
  mixins: [waves]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (44).jpg")
    no-repeat center center;
  background-size: cover;
  height: 100%;
}
.navbar i {
  cursor: pointer;
  color: white;
}
.flexible-content,
.flexible-content .navbar {
  transition: margin-left 0.5s;
}

.page-content {
  transition: all 0.2s linear;
}
</style>
