<template>
  <div style="margin-top: -15px">
    <mdb-edge-header color="teal darken-2">
      <div class="category-page-background"></div>
    </mdb-edge-header>
    <mdb-container class="free-bird">
      <mdb-row>
        <mdb-col md="8" class="mx-auto">
          <mdb-jumbotron class="pt-4">
            <h2 class="pb-4"><mdb-icon icon="th" class="text-danger mr-2" /><strong>Sections</strong></h2>
            <h6 class="my-3">INTROS</h6>
            <mdb-list-group>
              <!-- FREE -->
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/app">
                <h5 class="justify-content-between d-flex align-items-center">
                  App <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/cto">
                <h5 class="justify-content-between d-flex align-items-center">
                  Call to Action Button  <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/classic">
                <h5 class="justify-content-between d-flex align-items-center">
                  Classic Register Form <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/contactform">
                <h5 class="justify-content-between d-flex align-items-center">
                  Contact Form  <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/halfpageintro">
                <h5 class="justify-content-between d-flex align-items-center">
                  Half Page Intro <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/minimalist">
                <h5 class="justify-content-between d-flex align-items-center">
                  Minimalist <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/parallax">
                <h5 class="justify-content-between d-flex align-items-center">
                  Parallax <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/video">
                <h5 class="justify-content-between d-flex align-items-center">
                  Video Background <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
            </mdb-list-group>
            <!-- PRO -->
            <h6 class="my-3">SECTIONS</h6>
            <mdb-list-group>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/contact">
                <h5 class="justify-content-between d-flex align-items-center">
                  Contact <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/blog">
                <h5 class="justify-content-between d-flex align-items-center">
                  Blog <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/e-commerce">
                <h5 class="justify-content-between d-flex align-items-center">
                  E-commerce <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/features">
                <h5 class="justify-content-between d-flex align-items-center">
                  Features <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/magazine">
                <h5 class="justify-content-between d-flex align-items-center">
                  Magazine <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/projects">
                <h5 class="justify-content-between d-flex align-items-center">
                  Projects <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/social">
                <h5 class="justify-content-between d-flex align-items-center">
                  Social <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/team">
                <h5 class="justify-content-between d-flex align-items-center">
                  Team <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router to="/sections/testimonials">
                <h5 class="justify-content-between d-flex align-items-center">
                  Testimonials <mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" router href="/sections/testimonials-multi">
                <h5 class="justify-content-between d-flex align-items-center">
                  Testimonials Multi Item<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
            </mdb-list-group>
          </mdb-jumbotron>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbNavItem, mdbListGroup, mdbEdgeHeader } from 'mdbvue';

export default {
  name: 'SectionsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbJumbotron,
    mdbNavItem,
    mdbListGroup,
    mdbEdgeHeader
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.category-page-background {
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background: url('https://mdbootstrap.com/wp-content/uploads/2016/11/mdb-pro-min-1.jpg') center;
  background-size: cover;
}

.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: .3s;
}

.example-components-list h6 {
  padding: 20px 10px 5px 10px;
  color: grey;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list i {
  float: right;
  padding-top: 3px;
}

.nav-link.navbar-link h5 {
  color: #212529;
}
</style>
