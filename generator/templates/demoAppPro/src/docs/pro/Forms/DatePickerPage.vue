<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Date Picker</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/date-picker/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker @getValue="getPickerValue" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>V-model example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date" />
            <mdb-btn @click.native="date = '2012-02-02'">Change</mdb-btn>
          </mdb-col>
          <mdb-col class="d-flex justify-content-center align-items-center" sm="6">
            {{date}}
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>V-model with placeholder</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker v-model="date2" :option="{placeholder: 'Pick a date'}"/>
            <mdb-btn @click.native="date2 = '2012-02-02'">Change</mdb-btn>
          </mdb-col>
          <mdb-col class="d-flex justify-content-center align-items-center" sm="6">
            {{date2}}
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Limits</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker @getValue="getPickerValue" :limit="limit" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Auto hide</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker @getValue="getPickerValue" autoHide />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
     <section class="demo-section">
      <h4>Default date</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-date-picker :defaultDate="date3" :option="options" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbDatePicker, mdbRow, mdbCol, mdbIcon, mdbBtn } from 'mdbvue';

export default {
  name: 'DatePickerPage',
  components: {
    mdbContainer,
    mdbDatePicker,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn
  },
  methods: {
    getPickerValue(value) {
      console.log(value);
    }
  },
  data() {
    return {
      date: '',
      date2: '2018-04-13',
      date3: '2018-04-13',
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: '2019-02-01',
        to: '2019-06-20'
      }],
      options: {
        placeholder: '2018-04-13',
        label: "default date"
      }
    };
  }
};

</script>

<style>
</style>
