<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Jumbotron</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/jumbotron/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Jumbotron without padding</h4>
      <section>
        <mdb-jumbotron class="mb-0 p-0">
          <mdb-view class="rounded-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg" alt="">
            <a><mdb-mask waves overlay="white-slight"/></a>        
          </mdb-view>
          <mdb-card-body class="text-center">
            <h3 class="card-title h3 my-4"><strong>Card title</strong></h3>
            <p class="card-text py-2">Some quick example text to build on the card title and make up the bulk of the card's</p>
            <mdb-btn tag="a" gradient="purple" rounded class="mb-4">Button</mdb-btn>
          </mdb-card-body>
        </mdb-jumbotron>
      </section>
    </section>
    <section class="demo-section">
      <h4>Light background</h4>
      <section>
        <mdb-jumbotron class="mb-0 text-center blue-grey lighten-5">
          <h2 class="card-title h2">Material Design for Bootstrap</h2>
          <p class="indigo-text my-4 font-weight-bold">Powerful and free Material Design UI KIT</p>
          <mdb-row class="d-flex justify-content-center">
            <mdb-col xl="7" class="pb-2">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.</p>
            </mdb-col>
          </mdb-row>
          <hr class="my-4 pb-2">
          <mdb-btn gradient="blue" rounded icon="gem" iconRight>Buy now</mdb-btn>
          <mdb-btn color="indigo" rounded icon="download" iconRight>Download</mdb-btn>
        </mdb-jumbotron>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbJumbotron, mdbBtn, mdbCardBody, mdbView, mdbMask, mdbContainer, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'JumbotronPagePro',
  components: {
    mdbJumbotron,
    mdbBtn,
    mdbCardBody,
    mdbView,
    mdbMask,
    mdbContainer,
    mdbIcon,
    mdbRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
