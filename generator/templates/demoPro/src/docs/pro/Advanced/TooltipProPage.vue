<template>
  <mdb-container class="mt-5">
      <mdb-row class="mt-5 align-items-center justify-content-start">
        <h4 class="demo-title"><strong>Tooltip</strong></h4>
        <a href="https://mdbootstrap.com/docs/vue/advanced/tooltips/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
      </mdb-row>
      <section class="demo-section">
        <h4>Basic example </h4>
        <section>
          <div class="mt-5 pt-5 d-flex justify-content-center">
            <mdb-tooltip material trigger="hover" :options="{placement: 'bottom'}">
              <span slot="tip">
                Who's there?
              </span>
              <mdb-btn rounded slot="reference" outline="elegant">
                Knock Knock
              </mdb-btn>
            </mdb-tooltip>
          </div>
        </section>
    </section>
    <section class="demo-section">
      <h4>Email tooltip</h4>
      <section>
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip material email trigger="hover" :options="{placement: 'left'}">
            <span slot="tip">
              Email tooltip
            </span>
            <mdb-btn slot="reference" rounded outline="blue">
              Hover over me
            </mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Small tooltip</h4>
      <section>
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip material sm trigger="hover" :options="{placement: 'top'}">
            <span slot="tip">
              Small tooltip
            </span>
            <mdb-btn slot="reference" rounded outline="light-blue">
              Hover over me
            </mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Custom HTML</h4>
      <section class="custom-html-section">
        <div class="mt-5 pt-5 d-flex justify-content-center">
          <mdb-tooltip material trigger="hover" :options="{placement: 'top'}">
            <div class="m-2">
              <mdb-card class="form-tooltip card-image" :style="{'backgroundImage': 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)'}">
                <div class="rgba-white-strong py-5 px-5 z-depth-4">
                  <div class="text-center">
                    <h3 class="mb-5 mt-4 font-weight-bold"><strong>SIGN</strong> <a class="cyan-text font-weight-bold"><strong> UP</strong></a></h3>
                  </div>
                  <mdb-input label="Your email" type="text"/>
                  <mdb-input label="Your password" type="password"/>
                  <mdb-input class="my-5" type="checkbox" id="defaultCheck17" label="Accept the Terms and Conditions" />
                  <mdb-row class="d-flex align-items-center mb-4">
                    <div class="text-center mb-3 col-md-12">
                      <mdb-btn color="cyan" rounded type="button" class="btn-block z-depth-1">Sign in</mdb-btn>
                    </div>
                  </mdb-row>
                  <mdb-col md="12">
                    <p class="font-small d-flex justify-content-end">Have an account? <a href="#" class="cyan-text ml-1 font-weight-bold"> Log in</a></p>
                  </mdb-col>
                </div>
              </mdb-card>
            </div>
            <mdb-btn slot="reference" rounded outline="cyan">
              Hover over me
            </mdb-btn>
          </mdb-tooltip>
        </div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbTooltip, mdbContainer, mdbBtn, mdbIcon, mdbRow, mdbCard, mdbInput, mdbCol } from 'mdbvue';

export default {
  name: 'TooltipProPage',
  components: {
    mdbTooltip,
    mdbContainer,
    mdbBtn,
    mdbIcon,
    mdbRow,
    mdbCard,
    mdbInput,
    mdbCol
  },
};
</script>
<style scoped>
.custom-html-section {
  min-height: 900px;
}
</style>