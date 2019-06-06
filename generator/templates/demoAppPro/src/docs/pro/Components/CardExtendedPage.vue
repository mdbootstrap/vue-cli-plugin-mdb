<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Extended Cards</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/cards/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <h4 class="mb-4">Promoting card</h4>
    <mdb-card class="promoting-card" style="width: 22rem">
      <mdb-card-body class="d-flex flex-row">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" class="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
        <div>
          <mdb-card-title class="font-weight-bold mb-2">New spicy meals</mdb-card-title>
          <mdb-card-text><mdb-icon icon="clock" class="pr-2" />07/24/2018</mdb-card-text>
        </div>
      </mdb-card-body>
      <mdb-view>
        <a href="#!">
          <mdb-card-image top class="rounded-0" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg" alt="Card image cap"/> 
          <mdb-mask overlay="white-slight" waves />
        </a>
      </mdb-view>
      <mdb-card-body>
        <div class="collapse-content">
          <mdb-card-text :class="['collapse', show1 && 'show']" ref="collapse1" :style="'height:' + height1">Recently, we added several exotic new dishes to the menu of our restaurant. They come from countries such as Mexico, Argentina, and Spain. Come to us, have a delicious wine and enjoy the juicy meals from around the world.</mdb-card-text>
          <mdb-btn @click.native="toggle1" tag="a" flat darkWaves :class="['red-text p-1 my-1 mr-0', !show1 && 'collapsed']"></mdb-btn>
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">Share this post</div>
            <mdb-icon slot="reference" icon="share-alt" class="text-muted float-right p-1 my-1"/>
          </mdb-tooltip>
          <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
            <div class="tooltip">I like it</div>
            <mdb-icon slot="reference" icon="heart" class="text-muted float-right p-1 my-1 mr-3"/>
          </mdb-tooltip>
        </div>
      </mdb-card-body>
    </mdb-card>
    <hr class="my-5" />
    <h4 class="mb-4">Weather card</h4>
    <mdb-card class="weather-card" style="width: 22rem">
      <mdb-card-body class="pb-3">
        <mdb-card-title class="font-weight-bold">Warsaw</mdb-card-title>
        <mdb-card-text>Mon, 12:30 PM, Mostly Sunny</mdb-card-text>
        <div class="d-flex justify-content-between">
          <p class="display-1 degree">23</p>
          <mdb-icon icon="sun" size="5x" class="pt-3 amber-text" />
        </div>
        <div class="d-flex justify-content-between mb-4">
          <p><mdb-icon icon="tint" size="lg" class="text-info pr-2"/>3% Precipitation</p>
          <p><mdb-icon icon="leaf" size="lg" class="grey-text pr-2"/>21 hm/h Winds</p>
        </div>
        <mdb-progress color="dark" :value="40" />
        <ul class="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
          <li class="pl-4">8AM</li>
          <li>11AM</li>
          <li>2PM</li>
          <li>5PM</li>
          <li class="pr-4">8PM</li>
        </ul>
        <div class="collapse-content">

          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <div v-if="show2" class="collapse-item">
              <mdb-tbl borderless sm class="mb-0">
                <tbody>
                  <tr>
                    <td class="font-weight-normal align-middle">Tuesday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">24&deg;<span class="text-muted">/12&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="sun" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Wednesday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">19&deg;<span class="text-muted">/10&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="cloud" size="lg" class="text-info" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Thursday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">23&deg;<span class="text-muted">/15&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="sun" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Friday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">26&deg;<span class="text-muted">/19&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="sun" size="lg" class="amber-text" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Saturday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">20&deg;<span class="text-muted">/16&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="cloud" size="lg" class="text-info" />
                    </td>
                  </tr>
                  <tr>
                    <td class="font-weight-normal align-middle">Sunday</td>
                    <td class="float-right font-weight-normal">
                      <p class="mb-1">22&deg;<span class="text-muted">/13&deg;</span></p>
                    </td>
                    <td class="float-right mr-3">
                      <mdb-icon icon="sun" size="lg" class="amber-text" />
                    </td>
                  </tr>
                </tbody>
              </mdb-tbl>
            </div>
          </transition>
          <hr />
          <mdb-btn tag="a" @click.native="show2 = !show2" :class="['p-1 my-1 mr-0 deep-purple-text', !show2 && 'collapsed']" flat darkWaves aria-expanded="false" aria-controls="collapseExample" />
        </div>
      </mdb-card-body>
    </mdb-card>
    <hr class="my-5" />
    <h4 class="mb-4">Booking card</h4>
    <mdb-card class="booking-card" style="width: 22rem">
      <mdb-view>
        <a href="#!">
          <mdb-card-image top src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" alt="Card image cap" />
          <mdb-mask overlay="white-slight" waves />
        </a>
      </mdb-view>
      <mdb-card-body>
        <mdb-card-title class="font-weight-bold"><a>La Sirena restaurant</a></mdb-card-title>
        <ul class="list-unstyled list-inline rating mb-0">
          <li class="list-inline-item mr-0"><mdb-icon icon="star" class="amber-text" /></li>
          <li class="list-inline-item mr-0"><mdb-icon icon="star" class="amber-text" /></li>
          <li class="list-inline-item mr-0"><mdb-icon icon="star" class="amber-text" /></li>
          <li class="list-inline-item mr-0"><mdb-icon icon="star" class="amber-text" /></li>
          <li class="list-inline-item"><mdb-icon icon="star-half-o" class="amber-text" /></li>
          <li class="list-inline-item"><p class="text-muted">4.5 (413)</p></li>
        </ul>
        <p class="mb-2">$ • American, Restaurant</p>
        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
        <hr class="my-4">
        <p class="lead"><strong>Tonight's availability</strong></p>
        <ul class="list-unstyled list-inline d-flex justify-content-between mb-0">
          <li class="list-inline-item mr-0">
            <mdb-chip waves class="mr-0">5:30PM</mdb-chip>
          </li>
          <li class="list-inline-item mr-0">
            <mdb-chip waves class="deep-purple white-text mr-0">7:30PM</mdb-chip>
          </li>
          <li class="list-inline-item mr-0">
            <mdb-chip waves class="mr-0">8:00PM</mdb-chip>
          </li>
          <li class="list-inline-item mr-0">
            <mdb-chip waves class="mr-0">9:00PM</mdb-chip>
          </li>
        </ul>
        <mdb-btn tag="a" flat darkWaves class="deep-purple-text p-1 mx-0 mb-0">Button</mdb-btn>
      </mdb-card-body>
    </mdb-card>
    <hr class="my-5" />
    <h4 class="mb-4">Gradient cards</h4>
    <mdb-row>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient1 && 'show']" @click.native="gradient1 = true" v-on-clickaway="away1">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 blue-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient1">
                    <h3 class="card-title font-weight-bold">Today's sales</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient1">
                    <mdb-icon icon="money-bill-alt" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient1">
                <p class="text-uppercase text-muted">Today's sales</p>
                <h4 class="font-weight-bold">2000$</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient1">
              <mdb-progress color="primary" :value="25" />
              <p class="text-muted">Better than last week (25%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient2 && 'show']" @click.native="gradient2 = true" v-on-clickaway="away2">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 purple-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient2">
                    <h3 class="card-title font-weight-bold">Subscriptions</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient2">
                    <mdb-icon icon="chart-line" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient2">
                <p class="text-uppercase text-muted">Subscriptions</p>
                <h4 class="font-weight-bold">200</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient2">
              <mdb-progress color="purple" :value="25" />
              <p class="text-muted">Worse than last week (25%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient3 && 'show']" @click.native="gradient3 = true" v-on-clickaway="away3">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 peach-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient3">
                    <h3 class="card-title font-weight-bold">Traffic</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient3">
                    <mdb-icon icon="chart-pie" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient3">
                <p class="text-uppercase text-muted">Traffic</p>
                <h4 class="font-weight-bold">20000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient3">
              <mdb-progress color="amber" :value="75" />
              <p class="text-muted">Worse than last week (75%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
      <mdb-col md="6" class="mb-4">
        <mdb-card :class="['gradient-card', gradient4 && 'show']" @click.native="gradient4 = true" v-on-clickaway="away4">
          <div class="d-flex d-inline-flex">
            <div class="card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)">
              <a>
                <mdb-mask waves class="text-white d-flex h-100 aqua-gradient-rgba">
                  <div class="first-content align-self-center p-3" v-if="!gradient4">
                    <h3 class="card-title font-weight-bold">Organic traffic</h3>
                    <p class="lead mb-0">Click on this card to see details</p>
                  </div>
                  <div class="second-content align-self-center mx-auto text-center" v-if="gradient4">
                    <mdb-icon icon="chart-bar" size="3x" />
                  </div>
                </mdb-mask>
              </a>
            </div>
            <!-- Data -->
            <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
              <div class="third-content collapse-item mt-4 mb-2 mr-4 text-right justify-content-end ml-auto" v-if="gradient4">
                <p class="text-uppercase text-muted">Organic traffic</p>
                <h4 class="font-weight-bold">2000</h4>
              </div>
            </transition>
          </div>
          <!-- Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
            <mdb-card-body class="collapse-item" v-if="gradient4">
              <mdb-progress color="cyan" :value="50" />
              <p class="text-muted">Better than last week (50%)</p>
              <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
              <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
            </mdb-card-body>
          </transition>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <hr class="my-5" />
    <h4 class="mb-4">Chart card</h4>
    <mdb-card class="chart-card" style="width: 22rem">
      <mdb-card-body class="pb-0">
        <mdb-card-title class="font-weight-bold">Alie Corporation</mdb-card-title>
        <p class="card-text mb-4">NYSE: AZHC  •  Oct 16, 1:45PM</p>
        <div class="d-flex justify-content-between">
          <p class="display-4 align-self-end">887.32</p>
          <p class="align-self-end pb-2">887.02 (.03%)</p>
        </div>
      </mdb-card-body>
      <div class="classic-tabs">
        <mdb-tab class="tabs-white nav-fill" justify>
          <mdb-tab-item class="ml-0" :active="tab==0" @click.native.prevent="tab=0">Profile</mdb-tab-item>
          <mdb-tab-item :active="tab==1" @click.native.prevent="tab=1">Follow</mdb-tab-item>
          <mdb-tab-item :active="tab==2" @click.native.prevent="tab=2">Contact</mdb-tab-item>
        </mdb-tab>
        <mdb-tab-content>
          <mdb-tab-pane class="fade" key="show1" v-if="tab==0">
            <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="300"/>
          </mdb-tab-pane>
          <mdb-tab-pane class="fade" key="show2" v-if="tab==1">
            <p align="justify" class="font-small text-muted mx-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
            <p align="justify" class="font-small text-muted mx-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
          </mdb-tab-pane>
          <mdb-tab-pane class="fade" key="show3" v-if="tab==2">
            <img class="img-fluid z-depth-1 rounded mb-3" alt="sample image" src="https://mdbootstrap.com/img/Photos/Others/intro1.jpg">
            <p align="justify" class="font-small text-muted mx-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima at ipsum sit amet.</p>
          </mdb-tab-pane>
        </mdb-tab-content>
      </div>
    </mdb-card>

    <hr class="my-5" />

    <h4 class="mb-4">Map card</h4>

    <!-- Card -->
    <mdb-card class="map-card" style="width: 23rem">
      <!--Google map-->
      <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
        <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
          style="border:0" allowfullscreen></iframe>
      </div>
      <!-- Card content -->
      <mdb-card-body class="px-0" :class="mapCardClosed && 'closed'" @click.native="mapCardClosed = !mapCardClosed">
        <div class="button px-2 mt-3">
          <mdb-btn color="living-coral" tag="a" floating size="lg" class="living-coral float-right"><mdb-icon icon="bicycle" /></mdb-btn>
        </div>
        <div class="white px-4 pb-4 pt-3-5">
          <!-- Title -->
          <h5 class="card-title h5 living-coral-text">Central Park Zoo</h5>
          <div class="d-flex justify-content-between living-coral-text">
            <h6 class="card-subtitle font-weight-light">A place to relax</h6>
            <h6 class="font-small font-weight-light mt-n1">25 min</h6>
          </div>
          <hr>
          <div class="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
            <div>
              <i class="fas fa-phone fa-lg mb-3"></i>
              <p class="mb-0">Call</p>
            </div>
            <div>
              <i class="fas fa-cat fa-lg mb-3"></i>
              <p class="mb-0">Love</p>
            </div>
            <div>
              <i class="far fa-grin-beam-sweat fa-lg mb-3"></i>
              <p class="mb-0">Smile</p>
            </div>
          </div>
          <hr>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row" class="px-0 pb-3 pt-2">
                    <i class="fas fa-map-marker-alt living-coral-text"></i>
                </th>
                <td class="pb-3 pt-2">East 64th Street, New York, NY 10021, US</td>
              </tr>
              <tr class="mt-2">
                <th scope="row" class="px-0 pb-3 pt-2">
                  <i class="far fa-clock living-coral-text"></i>
                </th>
                <td class="pb-3 pt-2"><span class="deep-purple-text mr-2"> Closed</span> Opens 10 AM</td>
              </tr>
              <tr class="mt-2">
                <th scope="row" class="px-0 pb-3 pt-2">
                  <i class="fas fa-cloud-moon living-coral-text"></i>
                </th>
                <td class="pb-3 pt-2">Sunny weather tommorow</td>
              </tr>
            </tbody>
          </table>
        </div>
      </mdb-card-body>
    </mdb-card>

    <!-- Card -->
    <hr class="my-5" />

    <h4 class="mb-4">Calendar card</h4>
    <!-- Material form register -->
    <mdb-card class="card-form md-calendar" style="width: 23rem">

      <!--Card content-->
      <mdb-card-body class="rounded-top white-text pr-0">

        <h3 class="font-weight-bold text-center text-white mt-4 mb-5 pb-3">MDB Calendar</h3>

        <div class="my-4">
          <ul class="list-unstyled d-flex justify-content-between mr-4">
            <li class="h4">October</li>
            <li class="text-white-50 mt-2">2018</li>
          </ul>
        </div>

        <ul class="list-unstyled weekdays text-white-50">
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
          <li>Su</li>
        </ul>

        <ul class="list-unstyled days">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li class="active rounded-left">11</li>
          <li class="active">12</li>
          <li class="active">13</li>
          <li class="active">14</li>
          <li class="active rounded-left">15</li>
          <li class="active">16</li>
          <li class="active">17</li>
          <li class="active">18</li>
          <li class="active">19</li>
          <li class="active">20</li>
          <li class="active">21</li>
          <li class="active">22</li>
          <li class="active">23</li>
          <li class="active">24</li>
          <li class="active rounded-right">25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ul>

      </mdb-card-body>

      <mdb-card class="card card-form-2">
        <mdb-card-body>

          <h6 class="mt-2 mb-4 font-weight-bold">My calendars</h6>

          <!-- Filled-in checkbox -->
          <div class="form-check red-checkbox pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" id="filledInCheckbox" checked>
            <label class="form-check-label" for="filledInCheckbox">Joe Doe</label>
          </div>

          <!-- Filled-in checkbox -->
          <div class="form-check purple-checkbox pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" id="filledInCheckbox4">
            <label class="form-check-label" for="filledInCheckbox4">Company calendar</label>
          </div>

          <!-- Filled-in checkbox -->
          <div class="form-check blue-checkbox pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" id="filledInCheckbox1" checked>
            <label class="form-check-label" for="filledInCheckbox1">To-Do list</label>
          </div>

          <!-- Filled-in checkbox -->
          <div class="form-check teal-checkbox pl-0 mb-3">
            <input type="checkbox" class="form-check-input filled-in" id="filledInCheckbox2" checked>
            <label class="form-check-label" for="filledInCheckbox2">Reminders</label>
          </div>

          <!-- Filled-in checkbox -->
          <div class="form-check unique-checkbox pl-0">
            <input type="checkbox" class="form-check-input filled-in" id="filledInCheckbox3">
            <label class="form-check-label" for="filledInCheckbox3">Birthday</label>
          </div>

        </mdb-card-body>

      </mdb-card>

    </mdb-card>
    <!-- Material form register -->

    <hr class="my-5" />

    <h4 class="mb-4">Panels card</h4>

    <mdb-card class="panels-card" style="width: 23rem">

      <div class="rounded-top grey lighten-2 dark-grey-text">
        <ul class="list-inline float-right my-0 py-1 pr-3">
          <li class="list-inline-item">
            <mdb-icon fab icon="facebook" aria-hidden="true"></mdb-icon>
          </li>
          <li class="list-inline-item">
            <mdb-icon fab icon="twitter" aria-hidden="true"></mdb-icon>
          </li>
          <li class="list-inline-item">
            <mdb-icon fab icon="instagram" aria-hidden="true"></mdb-icon>
          </li>
        </ul>
      </div>

      <!--Navbar-->
      <nav class="navbar navbar-expand-lg navbar-dark grey lighten-5 d-flex justify-content-between z-depth-1-bottom">

          <div>
            <ul class="list-inline my-2 py-1 dark-grey-text">
              <li class="list-inline-item">
                <i class="fas fa-bars" aria-hidden="true"></i>
              </li>
              <li class="list-inline-item font-weight-bold text-uppercase">
                weather
              </li>
            </ul>
          </div>

          <div>
            <ul class="list-inline my-2 py-1 dark-grey-text">
              <li class="list-inline-item">
                <i class="fas fa-search" aria-hidden="true"></i>
                <i class="fas fa-ellipsis-v pl-3" aria-hidden="true"></i>
              </li>
            </ul>
          </div>

      </nav>
      <!--/.Navbar-->

      <div class="card-body grey lighten-5 rounded-bottom">

        <!-- Grid row -->
        <div class="row">

          <!-- Grid column -->
          <div class="col-6 p-1">

            <div class="card grey lighten-2">
              <div class="card-body pb-0">
                <i class="fas fa-cloud fa-3x pb-4"></i>
                <div class="d-flex justify-content-between">
                  <p class="mb-0 h5">15&deg;</p>
                  <p class="mb-0 hour">12:15 PM</p>
                </div>
              </div>
              <hr>
              <div class="card-body pt-0">
                <h6 class="font-weight-bold mb-1">San Francisco</h6>
                <p class="mb-0">Cloudy</p>
              </div>
            </div>

          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-6 p-1">

            <div class="card orange lighten-3">
              <div class="card-body pb-0">
                <i class="fas fa-sun fa-3x pb-4"></i>
                <div class="d-flex justify-content-between">
                  <p class="mb-0 h5">23&deg;</p>
                  <p class="mb-0 hour">3:25 PM</p>
                </div>
              </div>
              <hr>
              <div class="card-body pt-0">
                <h6 class="font-weight-bold mb-1">New York City</h6>
                <p class="mb-0">Sunny</p>
              </div>
            </div>

          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row -->

        <!-- Grid row -->
        <div class="row">

          <!-- Grid column -->
          <div class="col-6 p-1">

            <div class="card indigo lighten-3">
              <div class="card-body pb-0">
                <i class="fas fa-tint fa-3x pb-4"></i>
                <div class="d-flex justify-content-between">
                  <p class="mb-0 h5">10&deg;</p>
                  <p class="mb-0 hour">10:30 AM</p>
                </div>
              </div>
              <hr>
              <div class="card-body pt-0">
                <h6 class="font-weight-bold mb-1">Seattle</h6>
                <p class="mb-0">Light rain</p>
              </div>
            </div>

          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-6 p-1">

            <div class="card grey lighten-2">
              <div class="card-body pb-0">
                <i class="fas fa-cloud fa-3x pb-4"></i>
                <div class="d-flex justify-content-between">
                  <p class="mb-0 h5">14&deg;</p>
                  <p class="mb-0 hour">8:10 PM</p>
                </div>
              </div>
              <hr>
              <div class="card-body pt-0">
                <h6 class="font-weight-bold mb-1">Milwaukee</h6>
                <p class="mb-0">Cloudy</p>
              </div>
            </div>

          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row -->

        <!-- Grid row -->
        <div class="row">

          <!-- Grid column -->
          <div class="col-6 p-1">

            <div class="card orange lighten-3">
              <div class="card-body pb-0">
                <i class="fas fa-sun fa-3x pb-4"></i>
                <div class="d-flex justify-content-between">
                  <p class="mb-0 h5">25&deg;</p>
                  <p class="mb-0 hour">1:35 PM</p>
                </div>
              </div>
              <hr>
              <div class="card-body pt-0">
                <h6 class="font-weight-bold mb-1">Honolulu</h6>
                <p class="mb-0">Sunny</p>
              </div>
            </div>

          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-6 p-1">

            <div class="card indigo white-text">
              <div class="card-body pb-0">
                <i class="fas fa-umbrella fa-3x pb-4"></i>
                <div class="d-flex justify-content-between">
                  <p class="mb-0 h5">5&deg;</p>
                  <p class="mb-0 hour">7:00 AM</p>
                </div>
              </div>
              <hr class="hr-light">
              <div class="card-body pt-0">
                <h6 class="font-weight-bold mb-1">Anchorage</h6>
                <p class="mb-0">Heavy rain</p>
              </div>
            </div>

          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row -->
      </div>
    </mdb-card>

  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbIcon, mdbView, mdbMask, mdbBtn, mdbTooltip, mdbProgress, mdbTbl, mdbChip, mdbTab, mdbTabItem, mdbTabContent, mdbTabPane, mdbLineChart } from 'mdbvue';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'CardProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbTooltip,
    mdbProgress,
    mdbTbl,
    mdbChip,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane,
    mdbLineChart
  },
  mounted() {
    this.fullHeight1 = this.$refs.collapse1.$el.scrollHeight + 'px';
    this.fullHeight2 = '100%';
  },
  data() {
    return {
      show1: false,
      show2: false,
      height1: '2.65rem',
      gradient1: false,
      gradient2: false,
      gradient3: false,
      gradient4: false,
      tab: 0,
      lineChartData: {
        labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,0.4)',
            borderColor: '#673ab7',
            pointBackgroundColor: 'transparent',
            borderWidth: 2,
            pointBorderColor: '#673ab7',
            pointBorderWidth: 1,
            data: [885, 884, 887, 883, 888, 889, 888]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            }
          }]
        }
      },
      mapCardClosed: true
    };
  },
  methods: {
    toggle1() {
      this.show1 = !this.show1;
      this.show1 ? this.height1 = this.fullHeight1 : this.height1 = '2.65rem';
    },
    beforeEnter(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    leave(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    away1() {
      this.gradient1 = false;
    },
    away2() {
      this.gradient2 = false;
    },
    away3() {
      this.gradient3 = false;
    },
    away4() {
      this.gradient4 = false;
    }
  },
  mixins: [clickaway]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  font-weight: bold;
}
.collapse {
  transition: height 0.3s;  
}
.collapse-item {
  transition: all 0.5s;  
}
.gradient-card {
  transition: 0.5s ease-in-out; 
}
.gradient-card.show {
  margin-top: 20px;
}
.gradient-card .card-image {
  display: inline-block;
  width: 100%;
  transition: 0.5s ease-in-out; 
}
.gradient-card.show .card-image {
  width: 112px;
  height: 112px;
  margin-left: 20px;
  margin-top: -20px;
}
.gradient-card .card-body {
  padding: 0 1.25rem;
}
.collapse-content .fas.fa-heart:hover {
  color: #f44336 !important;
}
.collapse-content .fas.fa-share-alt:hover {
  color: #0d47a1 !important;
}
.card.weather-card .collapse-content a.collapsed:after {
  content: 'Expand'; }

.card.weather-card .collapse-content a:not(.collapsed):after {
  content: 'Collapse'; }

.map-card .card-body {
  position: absolute;
  width: 100%;
  height: 77%;
  top: 23%;
  overflow: hidden;
  background-color: transparent;
  transition: all 1s;
  border-radius:0 !important;
}
.map-card .card-body.closed {
  top: 100%;
  height: 8.1rem;
  margin-top: -8.1rem;
}
.map-card .map-container {
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
}
.map-card .map-container iframe {
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
}
.map-card .button .btn-floating  {
  margin-top: -2rem;
}
.map-card .living-coral {
  background-color: #FA7268;
}
.map-card .living-coral-text {
  color: #FA7268;
}
.map-card .table th {
  width: 2rem;
}
.map-card .pt-3-5 {
  padding-top: 1.25rem;
}

.md-calendar {
  background-color: #69004b; }
  .md-calendar .weekdays,
  .md-calendar .days {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; }
    .md-calendar .weekdays li,
    .md-calendar .days li {
      text-align: center;
      width: 13.6%;
      padding: .9rem 0; }
    .md-calendar .days li {
      margin-bottom: .5rem;
      font-size: .9rem; }
      .md-calendar .days li.active {
        background-color: #fb0025; }
        .md-calendar .days li.active.rounded-right {
          -webkit-border-top-right-radius: 50% !important;
          border-top-right-radius: 50% !important;
          -webkit-border-bottom-right-radius: 50% !important;
          border-bottom-right-radius: 50% !important; }
        .md-calendar .days li.active.rounded-left {
          -webkit-border-top-left-radius: 50% !important;
          border-top-left-radius: 50% !important;
          -webkit-border-bottom-left-radius: 50% !important;
          border-bottom-left-radius: 50% !important; }
    .md-calendar .red-checkbox .form-check-input[type=checkbox].filled-in:checked + label:after {
      background-color: #fb0025;
      border: 2px solid #fb0025; }
    .md-calendar .red-checkbox .form-check-input[type=checkbox].filled-in:not(:checked) + label:after {
      border: 2px solid #fb0025; }
    .md-calendar .purple-checkbox .form-check-input[type=checkbox].filled-in:checked + label:after {
      background-color: #69004b;
      border: 2px solid #69004b; }
    .md-calendar .purple-checkbox .form-check-input[type=checkbox].filled-in:not(:checked) + label:after {
      border: 2px solid #69004b; }
    .md-calendar .blue-checkbox .form-check-input[type=checkbox].filled-in:checked + label:after {
      background-color: #0d47a1;
      border: 2px solid #0d47a1; }
    .md-calendar .blue-checkbox .form-check-input[type=checkbox].filled-in:not(:checked) + label:after {
      border: 2px solid #0d47a1; }
    .md-calendar .teal-checkbox .form-check-input[type=checkbox].filled-in:checked + label:after {
      background-color: #00695c;
      border: 2px solid #00695c; }
    .md-calendar .teal-checkbox .form-check-input[type=checkbox].filled-in:not(:checked) + label:after {
      border: 2px solid #00695c; }
    .md-calendar .unique-checkbox .form-check-input[type=checkbox].filled-in:checked + label:after {
      background-color: #3F729B;
      border: 2px solid #3F729B; }
    .md-calendar .unique-checkbox .form-check-input[type=checkbox].filled-in:not(:checked) + label:after {
      border: 2px solid #3F729B; }

      .card.panels-card .hour {
        font-size: .8rem;
        margin-top: .3rem; }
</style>

<style>
.card.chart-card .classic-tabs .nav.tabs-white li a {
  color: #757575;
  font-weight: 500;
}
.card.chart-card .classic-tabs .nav.tabs-white li a.active {
  color: #673ab7;
}
</style>
