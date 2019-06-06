<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Time Picker</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/time-picker/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-time-picker
              id="timePickerTwo"
              placeholder="Select your time"
              label="format: 24h"
              :hoursFormat="24"
              color="info-color"
              @getValue="getPickerValue"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Twelve hour clock</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-time-picker
              id="timePickerOne"
              placeholder="Select your time"
              label="format: am/pm"
              @getValue="getPickerValue"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Translations</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6" md="4">
            <mdb-time-picker
              id="timePickerOne"
              placeholder="Select your time"
              label="format: am/pm"
              @getValue="getPickerValue"
              doneLabel="Accept"
              clearLabel="Reset"
            />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbTimePicker, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
  name: 'TimePickerPage',
  data() {
    return {
    };
  },
  methods: {
    getPickerValue(value) {
      console.log(value);
    }
  },
  components: {
    mdbTimePicker,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
