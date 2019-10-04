<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Tooltip</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/advanced/tooltips/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip material trigger="hover" :options="{placement: 'bottom'}">
            <span slot="tip">Who's there?</span>
            <mdb-btn rounded slot="reference" outline="elegant">Knock Knock</mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Email tooltip</h4>
      <section>
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip material email trigger="hover" :options="{placement: 'left'}">
            <span slot="tip">Email tooltip</span>
            <mdb-btn slot="reference" rounded outline="blue">Hover over me</mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Small tooltip</h4>
      <section>
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip material sm trigger="hover" :options="{placement: 'top'}">
            <span slot="tip">Small tooltip</span>
            <mdb-btn slot="reference" rounded outline="light-blue">Hover over me</mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Custom HTML</h4>
      <section class="custom-html-section">
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip material trigger="click" :options="{placement: 'top'}" :maxWidth="400">
            <div slot="tip">
              <mdb-card cascade>
                <mdb-view hover cascade>
                  <a href="#!">
                    <mdb-card-image
                      src="https://mdbootstrap.com/img/Photos/Others/men.jpg"
                      alt="Card image cap"
                    ></mdb-card-image>
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body class="text-center" cascade>
                  <mdb-card-title>
                    <strong>Billy Cullen</strong>
                  </mdb-card-title>
                  <h5>Web developer</h5>
                  <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam.</mdb-card-text>
                  <mdb-btn tag="a" floating small class="btn-fb">
                    <mdb-icon fab icon="facebook" />
                  </mdb-btn>
                  <mdb-btn tag="a" floating small class="btn-tw">
                    <mdb-icon fab icon="twitter" />
                  </mdb-btn>
                  <mdb-btn tag="a" floating small class="btn-dribbble">
                    <mdb-icon fab icon="dribbble" />
                  </mdb-btn>
                </mdb-card-body>
              </mdb-card>
            </div>
            <mdb-btn slot="reference" rounded outline="cyan">Click me</mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbTooltip,
  mdbContainer,
  mdbBtn,
  mdbIcon,
  mdbRow,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardImage,
  mdbCardText,
  mdbView,
  mdbMask
} from "mdbvue";

export default {
  name: "TooltipProPage",
  components: {
    mdbTooltip,
    mdbContainer,
    mdbBtn,
    mdbIcon,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardImage,
    mdbCardText,
    mdbView,
    mdbMask
  }
};
</script>
<style scoped>
/* .custom-html-section {
  min-height: 900px;
} */
</style>