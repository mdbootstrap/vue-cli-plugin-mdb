<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Mega Menu</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/navigation/mega-menu/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4 class="my-4">Mega menu dark version</h4>
      <section class="menu-section">
        <mdb-container>
        <!--Navbar-->
        <mdb-navbar class="mt-2 special-color-dark" dark>
          <!-- mdbNavbar brand -->
          <mdb-navbar-brand class="text-white text-uppercase">
            mdbNavbar
          </mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav left>
              <mdb-dropdown tag="li" megaMenu class="nav-item">
                <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Features</mdb-dropdown-toggle>
                <mdb-dropdown-menu class="mega-menu v-2 z-depth-1 special-color py-5 px-3">
                  <div class="row">
                    <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3 d-inline-block"></i>Lorem ipsum dolor sit amet
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Ut labore et dolore magna
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Ut enim ad minim veniam
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6 col-xl-3 sub-menu mb-0">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Totam rem aperiam eaque
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Beatae vitae dicta sun
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Quae ab illo inventore veritatis et quasi architecto
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Nemo enim ipsam voluptatem
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Neque porro quisquam est
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </mdb-dropdown-menu>
              </mdb-dropdown>
              <mdb-dropdown tag="li" megaMenu class="nav-item">
                <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Technology</mdb-dropdown-toggle>
                <mdb-dropdown-menu class="mega-menu v-2 z-depth-1 special-color py-5 px-3">
                  <div class="row">
                    <div class="col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                      <!--Featured image-->
                      <a href="#!" class="view overlay z-depth-1 p-0 mb-2">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/8-col/img%20(37).jpg" class="img-fluid" alt="First sample image">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                      <a class="news-title font-weight-bold pl-0" href="#!">Lorem ipsum dolor sit</a>
                      <p class="font-small text-uppercase white-text">
                        <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 20
                      </p>
                    </div>
                    <div class="col-md-6 col-xl-4 sub-menu mb-md-0 mb-4">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6 col-xl-4 sub-menu mb-0">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </mdb-dropdown-menu>
              </mdb-dropdown>
              <mdb-dropdown tag="li" megaMenu class="nav-item">
                <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Lifestyle</mdb-dropdown-toggle>
                <mdb-dropdown-menu class="mega-menu v-2 z-depth-1 special-color py-5 px-3">
                  <div class="row">
                    <div class="col-md-6 col-xl-3 sub-menu mb-4">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Lorem ipsum dolor sit amet
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Ut labore et dolore magna
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Ut enim ad minim veniam
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6 col-xl-3 sub-menu mb-4 mb-xl-0">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                      <!--Featured image-->
                      <a href="#!" class="view overlay z-depth-1 p-0 mb-2">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid" alt="First sample image">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                      <a class="news-title font-weight-bold pl-0" href="#!">Lorem ipsum dolor sit</a>
                      <p class="font-small text-uppercase white-text">
                        <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 20
                      </p>
                    </div>
                    <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                      <!--Featured image-->
                      <a href="#!" class="view overlay z-depth-1 p-0 mb-2">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(44).jpg" class="img-fluid" alt="First sample image">
                        <div class="mask rgba-white-slight"></div>
                      </a>
                      <a class="news-title font-weight-bold pl-0" href="#!">Ut labore et dolore magna</a>
                      <p class="font-small text-uppercase white-text">
                        <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 16, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 25
                      </p>
                    </div>
                    <div class="col-md-6 col-xl-3 sub-menu mb-0">
                      <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                      <ul class="list-unstyled">
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Totam rem aperiam eaque
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Beatae vitae dicta sun
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Quae ab illo inventore veritatis et quasi architecto
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Nemo enim ipsam voluptatem
                          </a>
                        </li>
                        <li>
                          <a class="menu-item pl-0" href="#!">
                            <i class="fas fa-caret-right pl-1 pr-3"></i>Neque porro quisquam est
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-navbar-nav>
            <form>
              <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
            </form>
          </mdb-navbar-toggler>
        </mdb-navbar>
        <!--/.Navbar-->
        </mdb-container>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="my-4">Mega menu light version</h4>
      <section class="menu-section">
        <mdb-container>
          <!--Navbar-->
          <mdb-navbar class="mt-2" color="white" light>
            <mdb-navbar-toggler>
              <mdb-navbar-nav left>
                <mdb-dropdown tag="li" megaMenu class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" tag="a" transparent navLink waves-fixed>News</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mega-menu v-1 z-depth-1 white py-5 px-3">
                    <div class="row">
                      <div class="col-md-5 col-xl-3 sub-menu mb-xl-0 mb-5">
                        <ul class="list-unstyled">
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Laptops
                            </a>
                          </li>
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Phones
                            </a>
                          </li>
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Lifestyle
                            </a>
                          </li>
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Technology
                            </a>
                          </li>
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Design
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-7 col-xl-4 sub-menu mb-xl-0 mb-4">
                        <h6 class="sub-title pb-3 text-uppercase font-weight-bold">Featured</h6>
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 my-3">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(42).jpg" class="img-fluid" alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <a class="news-title font-weight-bold pl-0" href="#!">Lorem ipsum dolor sit amet, consectetur isum adipisicing elit.</a>
                        <p class="font-small text-uppercase text-muted">By <a class="p-0 m-sm" href="#!">Anna Doe</a> - July 15, 2017</p>
                      </div>
                      <div class="col-md-12 col-xl-5 sub-menu mb-md-0 mb-xl-0 mb-4">
                        <h6 class="sub-title pb-3 text-uppercase font-weight-bold">Design</h6>
                        <div class="news-single">
                          <div class="row">
                            <div class="col-md-4">
                              <!--Image-->
                              <a href="#!" class="view overlay z-depth-1 p-0 my-3">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight"></div>
                              </a>
                            </div>
                            <div class="col-md-8">
                              <a class="news-title smaller mt-md-2 pl-0" href="#!">Duis aute irure dolor reprehenderit in voluptate.</a>
                              <p class="font-small text-uppercase text-muted">July 14, 2017</p>
                            </div>
                          </div>
                        </div>
                        <div class="news-single">
                          <div class="row">
                            <div class="col-md-4">
                              <!--Image-->
                              <a href="#!" class="view overlay z-depth-1 p-0 mb-3 mt-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(44).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight"></div>
                              </a>
                            </div>
                            <div class="col-md-8">
                              <a class="news-title smaller mt-md-2 pl-0" href="#!">Tempore autem reiciendis iste nam dicta.</a>
                              <p class="font-small text-uppercase text-muted">July 14, 2017</p>
                            </div>
                          </div>
                        </div>
                        <div class="news-single">
                          <div class="row">
                            <div class="col-md-4">
                              <!--Image-->
                              <a href="#!" class="view overlay z-depth-1 p-0 mb-3 mt-4">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(41).jpg" class="img-fluid" alt="First sample image">
                                <div class="mask rgba-white-slight"></div>
                              </a>
                            </div>
                            <div class="col-md-8">
                              <a class="news-title smaller mt-2 pl-0" href="#!">Eligendi dicta sunt amet, totam ea recusandae.</a>
                              <p class="font-small text-uppercase text-muted">July 14, 2017</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
              </mdb-navbar-nav>
              <!-- Links -->
              <ul class="navbar-nav nav-flex-icons ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    <i class="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <!-- Links -->
            </mdb-navbar-toggler>
          </mdb-navbar>
          <!--/.Navbar-->
        </mdb-container>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="my-4">Mega menu blue version</h4>
      <section class="menu-section">
        <mdb-container>
          <!--Navbar-->
          <mdb-navbar class="mt-2" color="primary" dark>
            <mdb-navbar-toggler>
              <mdb-navbar-nav left>
                <mdb-dropdown tag="li" megaMenu class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" tag="a" active transparent navLink waves-fixed>Gadgets</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mega-menu v-3 z-depth-1 primary-color-dark py-5 px-3">
                    <div class="row">
                      <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-5">
                        <ul class="list-unstyled">
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Technology
                            </a>
                          </li>
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Design
                            </a>
                          </li>
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Lifestyle
                            </a>
                          </li>
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Laptops
                            </a>
                          </li>
                          <li class="sub-title text-uppercase">
                            <a class="menu-item pl-1 mt-2" href="#!">
                              Phones
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(41).jpg" class="img-fluid" alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <h4 class="mb-2">
                          <a class="news-title font-weight-bold pl-0" href="#!">Lorem ipsum dolor sit amet.</a>
                        </h4>
                        <p class="font-small text-uppercase white-text">
                          <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 20
                        </p>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid" alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <h4 class="mb-2">
                          <a class="news-title font-weight-bold pl-0" href="#!">Neque porro quisquam est.</a>
                        </h4>
                        <p class="font-small text-uppercase white-text">
                          <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 16, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 46
                        </p>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-0">
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(9).jpg" class="img-fluid" alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <h4 class="mb-2">
                          <a class="news-title font-weight-bold pl-0" href="#!">Quis autem vel iure reprehit.</a>
                        </h4>
                        <p class="font-small text-uppercase white-text">
                          <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 15, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 35
                        </p>
                      </div>
                    </div>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
              </mdb-navbar-nav>
              <form>
                <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
              </form>
            </mdb-navbar-toggler>
          </mdb-navbar>
          <!--/.Navbar-->
        </mdb-container>
      </section>
    </section>
    <section class="demo-section">
      <h4 class="my-4">Mega menu hoverable</h4>
      <section class="menu-section">
        <mdb-container>
          <!--Navbar-->
          <mdb-navbar color="blue-grey darken-4" class="mt-2" dark>
            <!-- mdbNavbar brand -->
            <mdb-navbar-brand class="text-white text-uppercase">
              mdbNavbar
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
              <mdb-navbar-nav left>
                <mdb-dropdown hover tag="li" megaMenu class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Features</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mega-menu v-2 z-depth-1 blue-grey py-5 px-3">
                    <div class="row">
                      <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3 d-inline-block"></i>Lorem ipsum dolor sit amet
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Ut labore et dolore magna
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Ut enim ad minim veniam
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-0">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Totam rem aperiam eaque
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Beatae vitae dicta sun
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Quae ab illo inventore veritatis et quasi architecto
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Nemo enim ipsam voluptatem
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Neque porro quisquam est
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
                <mdb-dropdown hover tag="li" megaMenu class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Technology</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mega-menu v-2 z-depth-1 blue-grey py-5 px-3">
                    <div class="row">
                      <div class="col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-2">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/8-col/img%20(37).jpg" class="img-fluid" alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <a class="news-title font-weight-bold pl-0" href="#!">Lorem ipsum dolor sit</a>
                        <p class="font-small text-uppercase white-text">
                          <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 20
                        </p>
                      </div>
                      <div class="col-md-6 col-xl-4 sub-menu mb-md-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-4 sub-menu mb-0">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
                <mdb-dropdown hover tag="li" megaMenu class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Lifestyle</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mega-menu v-2 z-depth-1 blue-grey py-5 px-3">
                    <div class="row">
                      <div class="col-md-6 col-xl-3 sub-menu mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Lorem ipsum dolor sit amet
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Ut labore et dolore magna
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Ut enim ad minim veniam
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-4 mb-xl-0">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-2">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid" alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <a class="news-title font-weight-bold pl-0" href="#!">Lorem ipsum dolor sit</a>
                        <p class="font-small text-uppercase white-text">
                          <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 20
                        </p>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-2">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(44).jpg" class="img-fluid" alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <a class="news-title font-weight-bold pl-0" href="#!">Ut labore et dolore magna</a>
                        <p class="font-small text-uppercase white-text">
                          <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 16, 2017 / <i class="fas fa-comments-o px-1" aria-hidden="true"></i> 25
                        </p>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-0">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Totam rem aperiam eaque
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Beatae vitae dicta sun
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Quae ab illo inventore veritatis et quasi architecto
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Nemo enim ipsam voluptatem
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Neque porro quisquam est
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
              </mdb-navbar-nav>
              <form>
                <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
              </form>
            </mdb-navbar-toggler>
          </mdb-navbar>
          <!--/.Navbar-->
        </mdb-container>
      </section>
    </section>
     <section class="demo-section">
      <h4 class="my-4">Mega menu multilevel</h4>
      <section class="menu-section">
        <mdb-container>
          <!--Navbar-->
          <mdb-navbar color="pink darken-4" class="mt-2" dark>
            <!-- mdbNavbar brand -->
            <mdb-navbar-brand class="text-white text-uppercase">
              mdbNavbar
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
              <mdb-navbar-nav left>
                <mdb-dropdown tag="li" megaMenu class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Features</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mega-menu v-2 z-depth-1 pink darken-3 py-5 px-3">
                    <div class="row">
                      <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Lorem ipsum dolor sit amet
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Ut labore et dolore magna
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Ut enim ad minim veniam
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-0">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Totam rem aperiam eaque
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Beatae vitae dicta sun
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Quae ab illo inventore veritatis et quasi
                              architecto
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Nemo enim ipsam voluptatem
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Neque porro quisquam est
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
                <mdb-dropdown tag="li" megaMenu class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Technology</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mega-menu v-2 z-depth-1 pink darken-3 py-5 px-3">
                    <div class="row">
                      <div class="col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-2">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/8-col/img%20(37).jpg" class="img-fluid"
                            alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <a class="news-title font-weight-bold pl-0" href="#!">Lorem ipsum dolor sit</a>
                        <p class="font-small text-uppercase white-text">
                          <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="far fa-comments px-1"
                            aria-hidden="true"></i> 20
                        </p>
                      </div>
                      <div class="col-md-6 col-xl-4 sub-menu mb-md-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Quis nostrud exercitation
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Duis aute irure dolor in
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Laboris nisi ut aliquip ex ea commodo consequat
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Reprehenderit in voluptate
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Esse cillum dolore eu fugiat nulla pariatur
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-4 sub-menu mb-0">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Excepteur sint occaecat
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sunt in culpa qui officia
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sed ut perspiciatis unde omnis iste natus error
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Mollit anim id est laborum
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Accusantium doloremque laudantium
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>                    
                  </mdb-dropdown-menu>
                </mdb-dropdown>
                <mdb-dropdown tag="li" megaMenu class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Lifestyle</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mega-menu v-2 z-depth-1 pink darken-3 py-5 px-3">
                    <div class="row">
                      <div class="col-md-6 col-xl-3 sub-menu mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Featured</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Lorem ipsum dolor sit amet
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Consectetur adipiscing elit
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Sed do eiusmod tempor incididunt
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Ut labore et dolore magna
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Ut enim ad minim veniam
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-4 mb-xl-0">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Related</h6>
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-2">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg" class="img-fluid"
                            alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <a class="news-title font-weight-bold pl-0" href="#!">Lorem ipsum dolor sit</a>
                        <p class="font-small text-uppercase white-text">
                          <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 17, 2017 / <i class="far fa-comments px-1"
                            aria-hidden="true"></i> 20
                        </p>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Design</h6>
                        <!--Featured image-->
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-2">
                          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(44).jpg" class="img-fluid"
                            alt="First sample image">
                          <div class="mask rgba-white-slight"></div>
                        </a>
                        <a class="news-title font-weight-bold pl-0" href="#!">Ut labore et dolore magna</a>
                        <p class="font-small text-uppercase white-text">
                          <i class="fas fa-clock-o pr-2" aria-hidden="true"></i>July 16, 2017 / <i class="far fa-comments px-1"
                            aria-hidden="true"></i> 25
                        </p>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-0">
                        <h6 class="sub-title text-uppercase font-weight-bold white-text">Programming</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Totam rem aperiam eaque
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Beatae vitae dicta sun
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Quae ab illo inventore veritatis et quasi
                              architecto
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Nemo enim ipsam voluptatem
                            </a>
                          </li>
                          <li>
                            <a class="menu-item pl-0" href="#!">
                              <i class="fas fa-caret-right pl-1 pr-3"></i>Neque porro quisquam est
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </mdb-dropdown-menu>
                </mdb-dropdown>
                <!-- Multi-level dropdown -->
                <!-- <mdb-dropdown tag="li" multiLevel class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Multi-level</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mt-2 rounded-0 pink darken-3 border-0 z-depth-1">
                    <mdb-dropdown-item tag="ul" class="dropdown-submenu p-0">
                      <mdb-dropdown tag="li">
                      <mdb-dropdown-toggle slot="toggle" class="text-white w-100" tag="a" transparent navLink waves-fixed>Click me</mdb-dropdown-toggle>
                      <mdb-dropdown-menu class="ml-2 rounded-0 pink darken-2 border-0 z-depth-1">
                        <mdb-dropdown-item class="p-0 text-white">Item 1</mdb-dropdown-item>
                        <mdb-dropdown-item class="p-0 text-white">Item 2</mdb-dropdown-item>
                        <mdb-dropdown-item class="p-0 text-white">Item 3</mdb-dropdown-item>
                      </mdb-dropdown-menu>
                      </mdb-dropdown>
                    </mdb-dropdown-item>
                  </mdb-dropdown-menu>
                </mdb-dropdown> -->

                <mdb-dropdown tag="li" multiLevel class="nav-item">
                  <mdb-dropdown-toggle slot="toggle" class="text-uppercase" tag="a" transparent navLink waves-fixed>Multi-level</mdb-dropdown-toggle>
                  <mdb-dropdown-menu class="mt-2 rounded-0 pink darken-3 border-0 z-depth-1">
                    <mdb-dropdown-item class="p-0" submenu>
                      <mdb-dropdown class="w-100">
                        <mdb-dropdown-item
                          slot="toggle"
                          submenuIcon="caret-right"
                          class="submenu-item text-white"
                        >
                          Click me
                        </mdb-dropdown-item>
                        <mdb-dropdown-menu class="ml-2 rounded-0 pink darken-3 border-0 z-depth-1">
                          <mdb-dropdown-item class="text-white" href="#">Item 1</mdb-dropdown-item>
                          <mdb-dropdown-item class="text-white" href="#">Item 2</mdb-dropdown-item>
                          <mdb-dropdown-item class="text-white" href="#">Item 3</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                      </mdb-dropdown>
                    </mdb-dropdown-item>
                    <mdb-dropdown-item class="p-0" submenu>
                      <mdb-dropdown class="w-100">
                        <mdb-dropdown-item
                          slot="toggle"
                          submenuIcon="caret-right"
                          class="submenu-item text-white"
                        >
                          Click me
                        </mdb-dropdown-item>
                        <mdb-dropdown-menu class="ml-2 rounded-0 pink darken-3 border-0 z-depth-1">
                          <mdb-dropdown-item class="text-white" href="#">Item 1</mdb-dropdown-item>
                          <mdb-dropdown-item class="text-white" href="#">Item 2</mdb-dropdown-item>
                          <mdb-dropdown-item class="text-white" href="#">Item 3</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                      </mdb-dropdown>
                    </mdb-dropdown-item>
                  </mdb-dropdown-menu>
                </mdb-dropdown>

              </mdb-navbar-nav>
              <form>
                <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
              </form>
            </mdb-navbar-toggler>
          </mdb-navbar>
          <!--/.Navbar-->
        </mdb-container>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbInput, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem } from 'mdbvue';

export default {
  name: 'MegaMenuPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbInput,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem 
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu-section {
    min-height: 520px;
  }

  .submenu-item:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>