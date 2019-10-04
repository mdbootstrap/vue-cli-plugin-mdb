<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Hamburger Menu Pro</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/navigation/hamburger-menu/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4 class="my-4">Hamburger icon within accordion</h4>
      <section>
        <mdb-col md="6">
          <mdb-accordion icon hamburger :panes="panes">
            <ul class="list-unstyled d-flex justify-content-center pt-5 red-text">
              <li>
                <i class="fas fa-anchor mr-3 fa-2x" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fas fa-life-ring mr-3 fa-2x" aria-hidden="true"></i>
              </li>
              <li>
                <i class="far fa-star fa-2x" aria-hidden="true"></i>
              </li>
            </ul>
            <h2
              class="text-center text-uppercase red-text py-4 px-3"
            >Hello my friends, I am the nicest accordion!</h2>
            <hr class="mb-0" />
          </mdb-accordion>
        </mdb-col>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="my-4">Hamburger icon with background</h4>
      <section>
        <mdb-container>
          <!--Navbar-->
          <mdb-navbar class="mt-2" hamburger expand="lx" togglerClass="black text-white">
            <!-- mdbNavbar brand -->
            <mdb-navbar-brand>mdbNavbar</mdb-navbar-brand>
            <mdb-navbar-toggler>
              <mdb-navbar-nav right>
                <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar-toggler>
          </mdb-navbar>
          <!--/.Navbar-->
          <!--Navbar-->
          <mdb-navbar
            color="purple"
            class="mt-2 lighten-4"
            expand="lx"
            hamburger
            togglerClass="purple darken-3 text-white"
          >
            <!-- mdbNavbar brand -->
            <mdb-navbar-brand>mdbNavbar</mdb-navbar-brand>
            <mdb-navbar-toggler>
              <mdb-navbar-nav right>
                <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar-toggler>
          </mdb-navbar>
          <!--/.Navbar-->
          <!--Navbar-->
          <mdb-navbar
            color="cyan"
            class="mt-2 lighten-4"
            hamburger
            expand="lx"
            togglerClass="cyan darken-4 text-white"
          >
            <!-- mdbNavbar brand -->
            <mdb-navbar-brand>mdbNavbar</mdb-navbar-brand>
            <mdb-navbar-toggler>
              <mdb-navbar-nav right>
                <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar-toggler>
          </mdb-navbar>
          <!--/.Navbar-->
          <!--Navbar-->
          <mdb-navbar
            color="green"
            class="mt-2 lighten-4"
            hamburger
            expand="lx"
            togglerClass="aqua-gradient darken-4 text-white"
          >
            <!-- mdbNavbar brand -->
            <mdb-navbar-brand>mdbNavbar</mdb-navbar-brand>
            <mdb-navbar-toggler>
              <mdb-navbar-nav right>
                <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar-toggler>
          </mdb-navbar>
          <!--/.Navbar-->
          <!--Navbar-->
          <mdb-navbar
            color="orange"
            class="mt-2 lighten-4"
            hamburger
            expand="lx"
            togglerClass="peach-gradient darken-4 text-white"
          >
            <!-- mdbNavbar brand -->
            <mdb-navbar-brand>mdbNavbar</mdb-navbar-brand>
            <mdb-navbar-toggler>
              <mdb-navbar-nav right>
                <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
                <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
              </mdb-navbar-nav>
            </mdb-navbar-toggler>
          </mdb-navbar>
          <!--/.Navbar-->
        </mdb-container>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbAccordion,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon
} from "mdbvue";

export default {
  name: "HamburgerMenuPagePro",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbAccordion,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  },
  data() {
    return {
      panes: [
        {
          title: "How awesome accordion I am?",
          content:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable."
        },
        {
          title: "You're the greatest accordion!",
          content:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable."
        },
        {
          title: "Thank you my dear!",
          content:
            "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable."
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>