<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Sidenav</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/navigation/sidenav/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Toggle left sidenav</h4>
      <section>
        <div class="text-center icon-div">
          <mdb-icon icon="bars" size="3x" @click.native="toggleSideNav('A')"/>
        </div>
      </section>
      <div class="deep-purple-skin">
        <mdb-side-nav logo="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" sideNavClass="sn-bg-4" mask="strong" :OpenedFromOutside.sync="toggleA" hidden>
          <ul>
            <li>
              <ul class="social">
              <li><a href="#" class="icons-sm fb-ic"><mdb-icon fab icon="facebook-f" /></a></li>
              <li><a href="#" class="icons-sm pin-ic"><mdb-icon fab icon="pinterest-p" /></a></li>
              <li><a href="#" class="icons-sm gplus-ic"><mdb-icon fab icon="google-plus-g" /></a></li>
              <li><a href="#" class="icons-sm tw-ic"><mdb-icon fab icon="twitter" /></a></li>
              </ul>
            </li>
            <li>
              <form class="search-form" role="search">
                <div class="form-group md-form mt-0 pt-1 ripple-parent" @click="wave">
                  <input type="text" class="form-control" placeholder="Search">
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
                <mdb-side-nav-item header icon="user" href="#" @click.native="toggleSideNav('A')">Profile</mdb-side-nav-item>
                <mdb-side-nav-item header icon="cubes" href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVuePro" target="_blank">Official docs</mdb-side-nav-item>
              </mdb-side-nav-nav>
            </li>
          </ul>
        </mdb-side-nav>
      </div>
    </section>
    <section class="demo-section">
      <h4>Toggle right sidenav</h4>
      <section>
        <div class="text-center icon-div">
          <mdb-icon icon="bars" size="3x" @click.native="toggleSideNav('B')"/>
        </div>
      </section>
      <div class="indigo-skin">
        <mdb-side-nav logo="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" sideNavClass="sn-bg-4" mask="strong" :OpenedFromOutside.sync="toggleB" hidden right>
          <ul>
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
                <mdb-side-nav-item header icon="user" href="#" @click.native="toggleSideNav('B')">Profile</mdb-side-nav-item>
                <mdb-side-nav-item header icon="cubes" href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVuePro" target="_blank">Official docs</mdb-side-nav-item>
              </mdb-side-nav-nav>
            </li>
          </ul>
        </mdb-side-nav>
      </div>
    </section>
    <section class="demo-section">
      <h4>Left slim sidenav</h4>
      <section>
        <div class="text-center icon-div">
          <mdb-icon icon="bars" size="3x" @click.native="toggleSideNav('C')"/>
        </div>
      </section>
      <div class="light-blue-skin">
        <mdb-side-nav slim :isCollapsed="collapseC" name="Anna Deynah" :OpenedFromOutside.sync="toggleC" logo="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" logoRound sideNavClass="sn-bg-1" mask="strong" hidden>
            <mdb-side-nav-nav>
              <mdb-side-nav-cat name="Submit blog" icon="chevron-right">
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
                <mdb-side-nav-item href="#" slimIcon="paper-plane" >Write a message</mdb-side-nav-item>
              </mdb-side-nav-cat>
              <mdb-side-nav-item icon="angle-double-left" open-icon="angle-double-right" @toggle="toggleSlimC" toggler :isCollapsed="collapseC" fixed>Minimize</mdb-side-nav-item>
            </mdb-side-nav-nav>
        </mdb-side-nav>
      </div>
    </section>
    <section class="demo-section">
      <h4>Right slim navbar</h4>
      <section>
        <div class="text-center icon-div">
          <mdb-icon icon="bars" size="3x" @click.native="toggleSideNav('D')"/>
        </div>
      </section>
      <div class="light-blue-skin">
        <mdb-side-nav slim :isCollapsed="collapseD" name="Anna Deynah" :OpenedFromOutside.sync="toggleD" logo="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" logoRound sideNavClass="sn-bg-1" mask="strong" right hidden>
            <mdb-side-nav-nav>
              <mdb-side-nav-cat name="Submit blog" icon="chevron-right">
                <mdb-side-nav-item href="#" slim="S">Submit listing</mdb-side-nav-item>
                <mdb-side-nav-item href="#" slim="R">Registration form</mdb-side-nav-item>
              </mdb-side-nav-cat>
              <mdb-side-nav-cat name="Instruction" far icon="hand-pointer">
                <mdb-side-nav-item href="#" slim="B">For bloggers</mdb-side-nav-item>
                <mdb-side-nav-item href="#" slim="A">For authors</mdb-side-nav-item>
              </mdb-side-nav-cat>
              <mdb-side-nav-cat name="About" icon="eye">
                <mdb-side-nav-item href="#" slim="I">Introduction</mdb-side-nav-item>
                <mdb-side-nav-item href="#" slim="M">Monthly meetings</mdb-side-nav-item>
              </mdb-side-nav-cat>
              <mdb-side-nav-cat name="Contact me" far icon="envelope">
                <mdb-side-nav-item href="#">FAQ</mdb-side-nav-item>
                <mdb-side-nav-item href="#" slim="W">Write a message</mdb-side-nav-item>
              </mdb-side-nav-cat>
              <mdb-side-nav-item icon="angle-double-right" open-icon="angle-double-left" @toggle="toggleSlimD" toggler :isCollapsed="collapseD" fixed>Minimize</mdb-side-nav-item>
            </mdb-side-nav-nav>
        </mdb-side-nav>
      </div>
    </section>
  </mdb-container>
</template>

<script>
  import { mdbSideNav, mdbSideNavNav, mdbSideNavCat, mdbSideNavItem, mdbContainer, mdbRow, mdbIcon, waves } from 'mdbvue';

  export default {
    name: 'SideNavPage',
    components: {
      mdbSideNav,
      mdbSideNavNav,
      mdbSideNavCat,
      mdbSideNavItem,
      mdbContainer,
      mdbRow,
      mdbIcon
    },
    data(){
      return {
        toggleA: false,
        toggleB: false,
        toggleC: false,
        toggleD: false,
        collapseC: false,
        collapseD: false
      };
    },
    methods: {
      toggleSideNav(sn) {
        this[`toggle${sn}`]=!this[`toggle${sn}`];
      },
      toggleSlimC() {
        this.collapseC = !this.collapseC;
      },
      toggleSlimD() {
        this.collapseD = !this.collapseD;
      }
    },
    mixins: [waves]
  };
</script>

<style>
.navbar {
  z-index: 1040;}
  .icon-div {
    width: 49%;
    display: inline-block;
  }
  .icon-div .fas {
    cursor: pointer;
  }
</style>
