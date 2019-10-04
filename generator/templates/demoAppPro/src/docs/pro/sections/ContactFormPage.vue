<template>
  <div>
    <header>
      <!--Navbar-->
      <mdb-navbar style="margin-top: 50px; padding-top: 20px;" :color="'primary'" position="top" dark href="#" transparent scrolling>
        <mdb-container>
          <mdbNavbarBrand href="#"><strong>MDB</strong></mdbNavbarBrand>
          <mdb-navbar-toggler style="max-width: 1140px">
            <mdb-navbar-nav left>
              <mdb-nav-item href="#" waves-fixed active>Home</mdb-nav-item>
              <mdb-nav-item href="#" waves-fixed>Link</mdb-nav-item>
              <mdb-nav-item href="#" waves-fixed>Profile</mdb-nav-item>
            </mdb-navbar-nav>
            <!--Search form -->
            <form>
              <mdb-input type="text" class="text-white f-flex" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
            </form>
            <!--/.Search form -->
          </mdb-navbar-toggler>
        </mdb-container>
      </mdb-navbar>
      <!--/.Navbar-->

      <!--mdbView-->
      <mdb-view>
        <mdb-mask overlay="indigo-strong" class="d-flex justify-content-center align-items-center">
          <mdb-container>
              <!--Grid row-->
              <mdb-row class="pt-lg-5 mt-lg-5">
                <!--Grid column-->
                <mdb-col md="6" class="mb-5 mt-md-0 mt-5 white-text text-center text-md-left animated fadeInLeft">
                  <h1 class="display-4 font-weight-bold ">Lorem ipsum</h1>
                  <hr class="hr-light">
                  <h6 class="mb-3 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                  nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                  dolor molestiae, quisquam iste.</h6>
                  <mdb-btn outline="white">Learn more</mdb-btn>
                </mdb-col>
                <!--Grid column-->
                <!--Grid column-->
                <mdb-col md="6" xl="5" class="mb-4 animated fadeInRight">
                  <!--Form-->
                  <mdb-card>
                    <mdb-card-body class="z-depth-2">
                      <!--Header-->
                      <div class="text-center">
                        <h3 class="dark-grey-text">
                          <strong>Write to us:</strong>
                        </h3>
                        <hr>
                      </div>
                      <!--Body-->
                      <div class="md-form">
                      <!--Input with icon prefix-->
                        <mdb-input type="text" icon="user" iconClass="grey-text" label="Your name" id="form-name"/>
                        <mdb-input type="text" icon="envelope" iconClass="grey-text" label="Your mail" id="form-email"/>
                        <!--Textarea with icon prefix-->
                        <mdb-textarea icon="pencil-alt" iconClass="grey-text" label="Your message" id="form-text" :rows="3"/>
                      </div>
                      <div class="text-center mt-3">
                        <mdb-btn color="indigo">Send</mdb-btn>
                        <hr>
                        <fieldset class="form-check">
                          <mdb-input type="checkbox" label="Subscribe me to the newsletter" id="form-subscribe" inline/>
                        </fieldset>
                      </div>
                    </mdb-card-body>
                  </mdb-card>
                  <!--/.Form-->
                </mdb-col>
                <!--Grid column-->
              </mdb-row>
              <!--Grid row-->
          </mdb-container>
        </mdb-mask>
      </mdb-view>
      <!--/.mdbView-->
    </header>

    <main>
      <mdb-container>
        <mdb-row class="py-5">
          <mdb-col md="12" class="text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </mdb-col>
        </mdb-row>
      </mdb-container>
    </main>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbTextarea, mdbView, mdbMask, mdbRow, mdbCol, mdbContainer, mdbBtn, mdbCard, mdbCardBody, mdbNavbarBrand } from 'mdbvue';

export default {
  name: 'ContactFormPage',
  components: {
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbInput,
    mdbTextarea,
    mdbView,
    mdbMask,
    mdbRow,
    mdbCol,
    mdbContainer,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbNavbarBrand
  }
};
</script>

<style scoped>
.navbar {
  transition: 1s;
}
.navbar .md-form {
  margin: 0;
}
.top-nav-collapse {
    background-color: #39448c !important;
}
@media (max-width: 990px){
  .navbar {
    background-color: #424f95 !important;
  }
}
.view {
  background-image: url(https://mdbootstrap.com/img/Photos/Others/images/89.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 60px);
  margin-top: -10px;
}
h6 {
    line-height: 1.7;
}
</style>
