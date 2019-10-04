<template>
  <div>
    <mdb-navbar class="navbar" position="top" dark href="#" scrolling >
      <mdb-navbar-brand>
        <img class="logo" src="https://mdbootstrap.com/img/logo/mdb-transparent.png" alt="mdb logo">
      </mdb-navbar-brand>
      <mdb-navbar-toggler right>
        <mdb-navbar-nav right>
          <mdb-nav-item class="menu" href="#!">
              <mdb-icon fab icon="pinterest-p"/>
          </mdb-nav-item>
          <mdb-nav-item class="menu" href="#!">
              <mdb-icon fab icon="dribbble"/>
          </mdb-nav-item>
          <mdb-nav-item class="menu" href="#!">
              <mdb-icon fab icon="facebook-f"/>
          </mdb-nav-item>
          <mdb-nav-item class="menu" href="#!">
              <mdb-icon fab icon="instagram"/>
          </mdb-nav-item>
          <mdb-dropdown class="menu">
          <mdb-dropdown-toggle slot="toggle" tag="a" navLink><mdb-icon icon="user" /></mdb-dropdown-toggle>
          <mdb-dropdown-menu right>
            <mdb-dropdown-item>My account</mdb-dropdown-item>
            <mdb-dropdown-item >Log out</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <mdb-row class="page row">
      <mdb-col md="6" xs="12" class="half-page column animated fadeInLeft">
        <h1 class="heading display-3">Material Design for Bootstrap</h1>
        <h2 class="subheading font-weight-bold">World's most popular framework for building responsive, mobile-first websites and apps</h2>
        <mdb-btn rounded icon="caret-right" icon-right color="lily">get started</mdb-btn>
      </mdb-col>
      <mdb-col class="column" md="6" xs="12">
        <mdb-view>
        <img class="image animated fadeInDown" src="https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg" >
        <mdb-mask flex-center class="hm-gradient" />
        </mdb-view>
      </mdb-col>
    </mdb-row>
    <mdb-row class="row">
      <mdb-container class="text-center paragraph">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </mdb-container>
    </mdb-row>
  </div>
</template>

<script>
  import {mdbNavbar, mdbNavbarNav, mdbNavItem, mdbBtn, mdbContainer, mdbNavbarBrand, mdbNavbarToggler, mdbIcon, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem, mdbRow, mdbCol, mdbView, mdbMask } from 'mdbvue';
  export default {
    name: "halfPageIntro",
    components: {
      mdbNavbar, 
      mdbNavbarNav,
      mdbNavItem,
      mdbBtn,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbContainer,
      mdbIcon,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
      mdbCol,
      mdbRow,
      mdbView,
      mdbMask
    }
  };
  
</script>

<style scoped>

  .logo {
    height: 40px;
    width: auto;
    margin: 10px;
  }

  .menu {
    text-align: end;
    padding-right: 0.5em;
  }

  .hm-gradient {
    background: linear-gradient(40deg, rgba(0,51,199,.3), rgba(209,149,249,.3));
  }

  .navbar {
    background: linear-gradient(40deg, rgba(0,51,199,.3), rgba(209,149,249,.3));
    box-shadow: 0 0 0 0 transparent;
    margin-top: 50px;
  }

  .navbar:not(.top-nav-collapse) {
    background: transparent;
  }

  .row {
    margin: 0;
    padding:0;
  }

  .column {
    margin: 0;
    padding: 0;
  }

  .half-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 6rem;
  }

  .heading {
    font-weight: 700;
    color: #5d4267;
  }

  .subheading {
    margin: 2.5rem 0;
    color: #bcb2c0;
    font-size: 1.5rem;
  }

  .btn-lily {
  background: linear-gradient(40deg, rgba(0,51,199,.7), rgba(209,149,249,.7));
  }

  .image {
    width: 100%;
  }

  .paragraph {
    padding: 3rem 1.5em;
  }



  @media screen and (max-width: 770px) {

    .half-page {
      padding:2rem;
    }

    .navbar {
      position: relative;
      margin-top: 5px;
    }
    .navbar:not(.top-nav-collapse) {  
        background: linear-gradient(40deg, rgba(0,51,199,.3), rgba(209,149,249,.3));
    }
  }

  @media screen and (max-width: 400px) {
    .half-page {
      padding: 1rem;
    }
  }

  @media screen and (max-width: 320px) {
    .heading {
      font-size: 4em;
    }
  }

</style>