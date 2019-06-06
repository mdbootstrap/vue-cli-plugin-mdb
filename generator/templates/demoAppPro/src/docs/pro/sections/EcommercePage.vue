<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>eCommerce Sections</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/sections/e-commerce/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card narrow ecommerce>
              <view-wrapper overlay="white-slight" cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg" waves top alt="sample photo"/>
              </view-wrapper>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="grey-text">
                  <h5>Denim</h5>
                </a>
                <mdb-card-title>
                  <strong>
                    <a href="">Denim trousers</a>
                  </strong>
                </mdb-card-title>
                <ul class="rating">
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star-o"></mdb-icon>
                  </li>
                </ul>
                <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left font-weight-bold">
                    <strong>49$</strong>
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to cart
                        </div>
                        <mdb-icon slot="reference" icon="shopping-cart" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Share
                        </div>
                        <mdb-icon slot="reference" icon="share-alt" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a class="active">
                      <mdb-tooltip trigger="hover" class="active" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Added to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card narrow ecommerce>
              <view-wrapper overlay="white-slight" cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg" waves top alt="sample photo"/>
              </view-wrapper>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="grey-text">
                  <h5>Shoes</h5>
                </a>
                <mdb-card-title>
                  <strong>
                    <a href="">High heels</a>
                  </strong>
                </mdb-card-title>
                <ul class="rating">
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                </ul>
                <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left font-weight-bold">
                    <strong>89$</strong>
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to cart
                        </div>
                        <mdb-icon slot="reference" icon="shopping-cart" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Share
                        </div>
                        <mdb-icon slot="reference" icon="share-alt" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card narrow ecommerce>
              <view-wrapper overlay="white-slight" cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg" waves top alt="sample photo"/>
              </view-wrapper>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="grey-text">
                  <h5>Outwear</h5>
                </a>
                <mdb-card-title>
                  <strong>
                    <a href="">Brown coat</a>
                  </strong>
                </mdb-card-title>
                <ul class="rating">
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star-half-full"></mdb-icon>
                  </li>
                </ul>
                <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left font-weight-bold">
                    <strong>59$</strong>
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to cart
                        </div>
                        <mdb-icon slot="reference" icon="shopping-cart" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Share
                        </div>
                        <mdb-icon slot="reference" icon="share-alt" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card narrow ecommerce>
              <view-wrapper overlay="white-slight" cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg" waves top alt="sample photo"/>
              </view-wrapper>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="grey-text">
                  <h5>Blouses</h5>
                </a>
                <mdb-card-title>
                  <strong>
                    <a href="">Shirt</a>
                  </strong>
                </mdb-card-title>
                <ul class="rating">
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star"></mdb-icon>
                  </li>
                  <li>
                    <mdb-icon icon="star-o"></mdb-icon>
                  </li>
                </ul>
                <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left font-weight-bold">
                    <strong>119$</strong>
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to cart
                        </div>
                        <mdb-icon slot="reference" icon="shopping-cart" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Share
                        </div>
                        <mdb-icon slot="reference" icon="share-alt" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a class="active">
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Added to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card wide ecommerce>
              <view-wrapper overlay="white-slight" cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg" top alt="sample photo" waves/>
              </view-wrapper>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="text-muted">
                  <h5>Camera</h5>
                </a>
                <mdb-card-title>
                  <strong><a href="">GoPro</a></strong>
                </mdb-card-title>
                <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left font-weight-bold">
                    <strong>1439$</strong>
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Quick look
                        </div>
                        <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card wide ecommerce>
              <view-wrapper overlay="white-slight" cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg" top alt="sample photo" waves/>
              </view-wrapper>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="text-muted">
                  <h5>Photography</h5>
                </a>
                <mdb-card-title>
                  <strong><a href="">Camera</a></strong>
                </mdb-card-title>
                <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left font-weight-bold">
                    <strong>1160$</strong>
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Quick look
                        </div>
                        <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card wide ecommerce>
              <view-wrapper overlay="white-slight" cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg" top alt="sample photo" waves/>
              </view-wrapper>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="text-muted">
                  <h5>Smartphone</h5>
                </a>
                <mdb-card-title>
                  <strong><a href="">iPhone 6S</a></strong>
                </mdb-card-title>
                <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left font-weight-bold">
                    <strong>2160$</strong>
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Quick look
                        </div>
                        <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card class="align-items-center">
              <view-wrapper hover>
                <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" alt="sample photo"/>
                <a><mdb-mask overlay="white-slight" waves/></a>
              </view-wrapper>
              <mdb-card-body class="text-center">
                <a href="" class="grey-text">
                  <h5>Shirt</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Denim shirt <mdb-badge pill color="danger-color">NEW</mdb-badge></a>
                  </strong>
                </h5>
                <h4 class="font-weight-bold blue-text">
                  <strong>120$</strong>
                </h4>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card class="align-items-center">
              <view-wrapper hover>
                <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg" alt="sample photo"/>
                <a><mdb-mask overlay="white-slight" waves/></a>
              </view-wrapper>
              <mdb-card-body class="text-center">
                <a href="" class="grey-text">
                  <h5>Sport wear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Sweatshirt</a>
                  </strong>
                </h5>
                <h4 class="font-weight-bold blue-text">
                  <strong>139$</strong>
                </h4>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card class="align-items-center">
              <view-wrapper hover>
                <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" alt="sample photo"/>
                <a><mdb-mask overlay="white-slight" waves/></a>
              </view-wrapper>
              <mdb-card-body class="text-center">
                <a href="" class="grey-text">
                  <h5>Sport wear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Grey blouse <mdb-badge pill color="primary-color">BEST</mdb-badge></a>
                  </strong>
                </h5>
                <h4 class="font-weight-bold blue-text">
                  <strong>99$</strong>
                </h4>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card class="align-items-center">
              <view-wrapper hover>
                <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg" alt="sample photo"/>
                <a><mdb-mask overlay="white-slight" waves/></a>
              </view-wrapper>
              <mdb-card-body class="text-center">
                <a href="" class="grey-text">
                  <h5>Outwear</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">Black jacket</a>
                  </strong>
                </h5>
                <h4 class="font-weight-bold blue-text">
                  <strong>219$</strong>
                </h4>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card collection class="z-depth-1-half">
              <div class="view zoom">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg" class="img-fluid" alt=""/>
                <div class="stripe dark">
                  <a>
                    <p>Red trousers <mdb-icon icon="angle-right"></mdb-icon></p>
                  </a>
                </div>
              </div>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card collection class="z-depth-1-half">
              <div class="view zoom">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg" class="img-fluid" alt=""/>
                <div class="stripe light">
                  <a>
                    <p>Sweatshirt <mdb-icon icon="angle-right"></mdb-icon></p>
                  </a>
                </div>
              </div>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card collection class="z-depth-1-half">
              <div class="view zoom">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg" class="img-fluid" alt=""/>
                <div class="stripe dark">
                  <a>
                    <p>Accessories <mdb-icon icon="angle-right"></mdb-icon></p>
                  </a>
                </div>
              </div>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
            <mdb-card collection class="z-depth-1-half">
              <div class="view zoom">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg" class="img-fluid" alt=""/>
                <div class="stripe light">
                  <a>
                    <p>Sweatshirt <mdb-icon icon="angle-right"></mdb-icon></p>
                  </a>
                </div>
              </div>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our bestsellers</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-carousel :interval="8000" showControls showIndicators multi slide>
          <mdb-carousel-item>
            <mdb-row>
              <mdb-col md="4">
                <mdb-card narrow ecommerce class="mb-2">
                  <view-wrapper hover cascade>
                    <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg" alt="sample photo"/>
                    <a><mdb-mask overlay="white-slight" waves/></a>
                  </view-wrapper>
                  <mdb-card-body cascade>
                    <a href="" class="text-muted">
                      <h5>Shoes</h5>
                    </a>
                    <mdb-card-title><strong><a href="">Leather boots</a></strong></mdb-card-title>
                    <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                    <mdb-card-footer color="white" textColor="black" class="px-1">
                      <span class="float-left">69$</span>
                      <span class="float-right">
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Quick look
                            </div>
                            <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Add to watchlist
                            </div>
                            <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                      </span>
                    </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card narrow ecommerce class="mb-2">
                  <view-wrapper hover cascade>
                    <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg" alt="sample photo"/>
                    <a><mdb-mask overlay="white-slight" waves/></a>
                  </view-wrapper>
                  <mdb-card-body cascade>
                    <a href="" class="text-muted">
                      <h5>Jeans</h5>
                    </a>
                    <mdb-card-title><strong><a href="">Slim jeans</a></strong></mdb-card-title>
                    <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                    <mdb-card-footer color="white" textColor="black" class="px-1">
                      <span class="float-left">99$</span>
                      <span class="float-right">
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Quick look
                            </div>
                            <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Add to watchlist
                            </div>
                            <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                      </span>
                    </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card narrow ecommerce class="mb-2">
                  <view-wrapper hover cascade>
                    <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg" alt="sample photo"/>
                    <a><mdb-mask overlay="white-slight" waves/></a>
                  </view-wrapper>
                  <mdb-card-body cascade>
                    <a href="" class="text-muted">
                      <h5>Shorts</h5>
                    </a>
                    <mdb-card-title><strong><a href="">Denim shorts</a></strong></mdb-card-title>
                    <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                    <mdb-card-footer color="white" textColor="black" class="px-1">
                      <span class="float-left">49$</span>
                      <span class="float-right">
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Quick look
                            </div>
                            <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Add to watchlist
                            </div>
                            <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                      </span>
                    </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-carousel-item>
          <mdb-carousel-item>
            <mdb-row>
              <mdb-col md="4">
                <mdb-card narrow ecommerce class="mb-2">
                  <view-wrapper hover cascade>
                    <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg" alt="sample photo"/>
                    <a><mdb-mask overlay="white-slight" waves/></a>
                  </view-wrapper>
                  <mdb-card-body cascade>
                    <a href="" class="text-muted">
                      <h5>Accessories</h5>
                    </a>
                    <mdb-card-title><strong><a href="">Summer Hat</a></strong></mdb-card-title>
                    <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                    <mdb-card-footer color="white" textColor="black" class="px-1">
                      <span class="float-left">39$</span>
                      <span class="float-right">
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Quick look
                            </div>
                            <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Add to watchlist
                            </div>
                            <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                      </span>
                    </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card narrow ecommerce class="mb-2">
                  <view-wrapper hover cascade>
                    <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg" alt="sample photo"/>
                    <a><mdb-mask overlay="white-slight" waves/></a>
                  </view-wrapper>
                  <mdb-card-body cascade>
                    <a href="" class="text-muted">
                      <h5>Shoes</h5>
                    </a>
                    <mdb-card-title><strong><a href="">Black Heels</a></strong></mdb-card-title>
                    <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                    <mdb-card-footer color="white" textColor="black" class="px-1">
                      <span class="float-left">79$</span>
                      <span class="float-right">
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Quick look
                            </div>
                            <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Add to watchlist
                            </div>
                            <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                      </span>
                    </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card narrow ecommerce class="mb-2">
                  <view-wrapper hover cascade>
                    <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(31).jpg" alt="sample photo"/>
                    <a><mdb-mask overlay="white-slight" waves/></a>
                  </view-wrapper>
                  <mdb-card-body cascade>
                    <a href="" class="text-muted">
                      <h5>Outwear</h5>
                    </a>
                    <mdb-card-title><strong><a href="">Black Jacket</a></strong></mdb-card-title>
                    <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                    <mdb-card-footer color="white" textColor="black" class="px-1">
                      <span class="float-left">149$</span>
                      <span class="float-right">
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Quick look
                            </div>
                            <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Add to watchlist
                            </div>
                            <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                      </span>
                    </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-carousel-item>
          <mdb-carousel-item>
            <mdb-row>
              <mdb-col md="4">
                <mdb-card narrow ecommerce class="mb-2">
                  <view-wrapper hover cascade>
                    <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg" alt="sample photo"/>
                    <a><mdb-mask overlay="white-slight" waves/></a>
                  </view-wrapper>
                  <mdb-card-body cascade>
                    <a href="" class="text-muted">
                      <h5>Accessories</h5>
                    </a>
                    <mdb-card-title><strong><a href="">Leather bag</a></strong></mdb-card-title>
                    <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                    <mdb-card-footer color="white" textColor="black" class="px-1">
                      <span class="float-left">29$</span>
                      <span class="float-right">
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Quick look
                            </div>
                            <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Add to watchlist
                            </div>
                            <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                      </span>
                    </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card narrow ecommerce class="mb-2">
                  <view-wrapper hover cascade>
                    <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg" alt="sample photo"/>
                    <a><mdb-mask overlay="white-slight" waves/></a>
                  </view-wrapper>
                  <mdb-card-body cascade>
                    <a href="" class="text-muted">
                      <h5>Accessproes</h5>
                    </a>
                    <mdb-card-title><strong><a href="">Leather Belt</a></strong></mdb-card-title>
                    <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                    <mdb-card-footer color="white" textColor="black" class="px-1">
                      <span class="float-left">89$</span>
                      <span class="float-right">
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Quick look
                            </div>
                            <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Add to watchlist
                            </div>
                            <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                      </span>
                    </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col md="4" class="clearfix d-none d-md-block">
                <mdb-card narrow ecommerce class="mb-2">
                  <view-wrapper hover cascade>
                    <mdb-card-image waves top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(57).jpg" alt="sample photo"/>
                    <a><mdb-mask overlay="white-slight" waves/></a>
                  </view-wrapper>
                  <mdb-card-body cascade>
                    <a href="" class="text-muted">
                      <h5>Shoes</h5>
                    </a>
                    <mdb-card-title><strong><a href="">Snickers</a></strong></mdb-card-title>
                    <mdb-card-text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</mdb-card-text>
                    <mdb-card-footer color="white" textColor="black" class="px-1">
                      <span class="float-left">139$</span>
                      <span class="float-right">
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Quick look
                            </div>
                            <mdb-icon slot="reference" icon="eye" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                        <a>
                          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                            <div class="tooltip">
                              Add to watchlist
                            </div>
                            <mdb-icon slot="reference" icon="heart" class="grey-text ml-3"></mdb-icon>
                          </mdb-tooltip>
                        </a>
                      </span>
                    </mdb-card-footer>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </mdb-carousel-item>
        </mdb-carousel>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card pricing>
              <div class="price header white-text blue rounded-top">
                <h2 class="number">10</h2>
                <div class="version">
                  <h5 class="mb-0">Basic</h5>
                </div>
              </div>
              <mdb-card-body class="striped mb-1">
                <ul>
                  <li>
                    <p class="mt-2"><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>20 GB Of Storage</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>2 Email Accounts</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="times" class="red-text pr-2"></mdb-icon>24h Tech Support</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="times" class="red-text pr-2"></mdb-icon>300 GB Bandwidth</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="times" class="red-text pr-2"></mdb-icon>User Management </p>
                  </li>
                </ul>
                <mdb-btn color="blue">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card pricing>
              <div class="price header white-text indigo rounded-top">
                <h2 class="number">20</h2>
                <div class="version">
                  <h5 class="mb-0">Pro</h5>
                </div>
              </div>
              <mdb-card-body class="striped mb-1">
                <ul>
                  <li>
                    <p class="mt-2"><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>20 GB Of Storage</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>4 Email Accounts</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>24h Tech Support</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="times" class="red-text pr-2"></mdb-icon>300 GB Bandwidth</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="times" class="red-text pr-2"></mdb-icon>User Management </p>
                  </li>
                </ul>
                <mdb-btn color="indigo">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card pricing>
              <div class="price header white-text deep-purple rounded-top">
                <h2 class="number">30</h2>
                <div class="version">
                  <h5 class="mb-0">Enterprise</h5>
                </div>
              </div>
              <mdb-card-body class="striped mb-1">
                <ul>
                  <li>
                    <p class="mt-2"><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>20 GB Of Storage</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>5 Email Accounts</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>24h Tech Support</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>300 GB Bandwidth</p>
                  </li>
                  <li>
                    <p><mdb-icon icon="check" class="green-text pr-2"></mdb-icon>User Management </p>
                  </li>
                </ul>
                <mdb-btn color="deep-purple">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg')">
              <div class="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                <mdb-card-body>
                  <h5>Basic</h5>
                  <div class="price pt-0">
                    <h2 class="number mb-0">10</h2>
                  </div>
                  <ul class="striped mb-0">
                    <li>
                      <p><strong>1</strong> project</p>
                    </li>
                    <li>
                      <p><strong>100</strong> components</p>
                    </li>
                    <li>
                      <p><strong>150</strong> features</p>
                    </li>
                    <li>
                      <p><strong>200</strong> members</p>
                    </li>
                    <li>
                      <p><strong>250</strong> messages</p>
                    </li>
                  </ul>
                  <mdb-btn outline="white" color="white">Buy now</mdb-btn>
                </mdb-card-body>
              </div>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg')">
              <div class="text-white text-center pricing-card d-flex align-items-center rgba-teal-strong py-3 px-3 rounded">
                <mdb-card-body>
                  <h5>Pro</h5>
                  <div class="price pt-0">
                    <h2 class="number mb-0">20</h2>
                  </div>
                  <ul class="striped mb-0">
                    <li>
                      <p><strong>3</strong> projects</p>
                    </li>
                    <li>
                      <p><strong>200</strong> components</p>
                    </li>
                    <li>
                      <p><strong>250</strong> features</p>
                    </li>
                    <li>
                      <p><strong>300</strong> members</p>
                    </li>
                    <li>
                      <p><strong>350</strong> messages</p>
                    </li>
                  </ul>
                  <mdb-btn outline="white" color="white">Buy now</mdb-btn>
                </mdb-card-body>
              </div>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg')">
              <div class="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                <mdb-card-body>
                  <h5>Enterprise</h5>
                  <div class="price pt-0">
                    <h2 class="number mb-0">30</h2>
                  </div>
                  <ul class="striped mb-0">
                    <li>
                      <p><strong>5</strong> projects</p>
                    </li>
                    <li>
                      <p><strong>300</strong> components</p>
                    </li>
                    <li>
                      <p><strong>350</strong> features</p>
                    </li>
                    <li>
                      <p><strong>400</strong> members</p>
                    </li>
                    <li>
                      <p><strong>450</strong> messages</p>
                    </li>
                  </ul>
                  <mdb-btn outline="white" color="white">Buy now</mdb-btn>
                </mdb-card-body>
              </div>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card>
              <mdb-card-body>
                <h5 class="mb-4">Basic plan</h5>
                <div class="d-flex justify-content-center">
                  <div class="card-circle d-flex justify-content-center align-items-center">
                    <mdb-icon icon="home" class="light-blue-text"></mdb-icon>
                  </div>
                </div>
                <h2 class="font-weight-bold my-4">59$</h2>
                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa pariatur id nobis accusamus deleniti cumque hic laborum.</p>
                <mdb-btn rounded color="light-blue">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card class="purple-gradient">
              <mdb-card-body class="white-text">
                <h5 class="mb-4">Premium plan</h5>
                <div class="d-flex justify-content-center">
                  <div class="card-circle d-flex justify-content-center align-items-center">
                    <mdb-icon icon="layer-group" class="white-text"></mdb-icon>
                  </div>
                </div>
                <h2 class="font-weight-bold my-4">79$</h2>
                <p>Esse corporis saepe laudantium velit adipisci cumque iste ratione facere non distinctio cupiditate sequi atque.</p>
                <mdb-btn outline="white" rounded color="white">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card>
              <mdb-card-body>
                <h5 class="mb-4">Advanced plan</h5>
                <div class="d-flex justify-content-center">
                  <div class="card-circle d-flex justify-content-center align-items-center">
                    <mdb-icon icon="chart-bar" class="light-blue-text"></mdb-icon>
                  </div>
                </div>
                <h2 class="font-weight-bold my-4">99$</h2>
                <p class="grey-text">At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium repellat eveniet quia vitae.</p>
                <mdb-btn rounded color="light-blue">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card>
              <mdb-card-body>
                <h5 class="mb-4">Basic plan</h5>
                <div class="d-flex justify-content-center">
                  <div class="card-circle d-flex justify-content-center align-items-center">
                    <mdb-icon icon="home" class="indigo-text"></mdb-icon>
                  </div>
                </div>
                <h2 class="font-weight-bold my-4">59$</h2>
                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa pariatur id nobis accusamus deleniti cumque hic laborum.</p>
                <mdb-btn rounded color="indigo">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card class="indigo">
              <mdb-card-body class="white-text">
                <h5 class="mb-4">Premium plan</h5>
                <div class="d-flex justify-content-center">
                  <div class="card-circle d-flex justify-content-center align-items-center">
                    <mdb-icon icon="layer-group" class="white-text"></mdb-icon>
                  </div>
                </div>
                <h2 class="font-weight-bold my-4">79$</h2>
                <p>Esse corporis saepe laudantium velit adipisci cumque iste ratione facere non distinctio cupiditate sequi atque.</p>
                <mdb-btn outline="white" rounded color="white">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card>
              <mdb-card-body>
                <h5 class="mb-4">Advanced plan</h5>
                <div class="d-flex justify-content-center">
                  <div class="card-circle d-flex justify-content-center align-items-center">
                    <mdb-icon icon="chart-bar" class="indigo-text"></mdb-icon>
                  </div>
                </div>
                <h2 class="font-weight-bold my-4">99$</h2>
                <p class="grey-text">At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium repellat eveniet quia vitae.</p>
                <mdb-btn rounded color="indigo">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card pricing>
              <mdb-card-body>
                <h5 class="font-weight-bold mt-3">Basic</h5>
                <div class="price pt-0">
                  <h2 class="number red-text mb-0">10</h2>
                </div>
                <ul class="striped mb-1">
                  <li>
                    <p><strong>1</strong> project</p>
                  </li>
                  <li>
                    <p><strong>100</strong> components</p>
                  </li>
                  <li>
                    <p><strong>150</strong> features</p>
                  </li>
                  <li>
                    <p><strong>200</strong> members</p>
                  </li>
                  <li>
                    <p><strong>250</strong> messages</p>
                  </li>
                </ul>
                <mdb-btn rounded color="danger" class="mb-4">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card class="card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg')">
              <div class="text-white text-center pricing-card d-flex align-items-center rgba-indigo-strong py-3 px-3 rounded">
                <mdb-card-body>
                  <h5 class="font-weight-bold mt-2">Pro</h5>
                  <div class="price pt-0">
                    <h2 class="number mb-0">20</h2>
                  </div>
                  <ul class="striped mb-0">
                    <li>
                      <p><strong>3</strong> projects</p>
                    </li>
                    <li>
                      <p><strong>200</strong> components</p>
                    </li>
                    <li>
                      <p><strong>250</strong> features</p>
                    </li>
                    <li>
                      <p><strong>300</strong> members</p>
                    </li>
                    <li>
                      <p><strong>350</strong> messages</p>
                    </li>
                  </ul>
                  <mdb-btn outline="white" rounded color="white">Buy now</mdb-btn>
                </mdb-card-body>
              </div>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card pricing>
              <mdb-card-body>
                <h5 class="font-weight-bold mt-3">Enterprise</h5>
                <div class="price pt-0">
                  <h2 class="number mb-0">30</h2>
                </div>
                <ul class="striped mb-1">
                  <li>
                    <p><strong>5</strong> projects</p>
                  </li>
                  <li>
                    <p><strong>300</strong> components</p>
                  </li>
                  <li>
                    <p><strong>350</strong> features</p>
                  </li>
                  <li>
                    <p><strong>400</strong> members</p>
                  </li>
                  <li>
                    <p><strong>450</strong> messages</p>
                  </li>
                </ul>
                <mdb-btn rounded color="danger" class="mb-4">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>

      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Our pricing plans</h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card pricing class="white-text">
              <div class="aqua-gradient rounded-top">
                <h4 class="option" style="padding: 2.5rem; marginBottom: 0; fontWeight: 500">BASIC</h4>
              </div>
              <mdb-card-body class="striped green-striped card-background px-5">
                <h2 class="my-4 pb-3 h1">20$</h2>
                <ul>
                  <li>
                    <p><strong>1</strong> project</p>
                  </li>
                  <li>
                    <p><strong>100</strong> components</p>
                  </li>
                  <li>
                    <p><strong>150</strong> features</p>
                  </li>
                  <li>
                    <p><strong>200</strong> members</p>
                  </li>
                </ul>
                <mdb-btn rounded gradient="aqua" class="mb-3 mt-3">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card pricing class="white-text">
              <div class="peach-gradient rounded-top">
                <h4 class="option" style="padding: 2.5rem; marginBottom: 0; fontWeight: 500">PRO</h4>
              </div>
              <mdb-card-body class="striped orange-striped card-background px-5">
                <h2 class="my-4 pb-3 h1">80$</h2>
                <ul>
                  <li>
                    <p><strong>3</strong> projects</p>
                  </li>
                  <li>
                    <p><strong>200</strong> components</p>
                  </li>
                  <li>
                    <p><strong>250</strong> features</p>
                  </li>
                  <li>
                    <p><strong>300</strong> members</p>
                  </li>
                </ul>
                <mdb-btn rounded gradient="peach" class="mb-3 mt-3">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card pricing class="white-text">
              <div class="purple-gradient rounded-top">
                <h4 class="option" style="padding: 2.5rem; marginBottom: 0; fontWeight: 500">ENTERPRISE</h4>
              </div>
              <mdb-card-body class="striped purple-striped card-background px-5">
                <h2 class="my-4 pb-3 h1">100$</h2>
                <ul>
                  <li>
                    <p><strong>5</strong> projects</p>
                  </li>
                  <li>
                    <p><strong>300</strong> components</p>
                  </li>
                  <li>
                    <p><strong>350</strong> features</p>
                  </li>
                  <li>
                    <p><strong>400</strong> members</p>
                  </li>
                </ul>
                <mdb-btn rounded gradient="purple" class="mb-3 mt-3">Buy now</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard,  mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardFooter, mdbCardText, mdbIcon, mdbBtn, mdbTooltip, mdbBadge, ViewWrapper, mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbTestimonial, mdbAvatar, mdbMask  } from 'mdbvue';

export default {
  name: 'EcommercePage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbCardText,
    mdbIcon,
    mdbBtn,
    mdbTooltip,
    mdbBadge,
    ViewWrapper,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbTestimonial,
    mdbAvatar,
    mdbMask
  }
};
</script>

<style scoped>
</style>
