<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">Buttons Group </h4>
      <a href="https://mdbootstrap.com/docs/vue/components/button-group/?utm_source=DemoApp&utm_medium=MDBVuPro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Checkbox and radio button group</h4>
      <section>
        <mdb-btn-group>
          <mdb-btn color="mdb-color" @click.native="toggleActiveState2" :active="active2">Pre-checked</mdb-btn>
          <mdb-btn color="mdb-color" @click.native="toggleActiveState3" :active="active3">Check</mdb-btn>
          <mdb-btn color="mdb-color" @click.native="toggleActiveState4" :active="active4">Check</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn color="light-blue" @click.native="toggleActiveState5" :active="active5">Preselected</mdb-btn>
          <mdb-btn color="light-blue" @click.native="toggleActiveState6" :active="active6">Radio</mdb-btn>
          <mdb-btn color="light-blue" @click.native="toggleActiveState7" :active="active7">Radio</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>
    <section class="demo-section">
      <h4>Rounded button group</h4>
      <section>
        <mdb-btn-group>
          <mdb-btn color="pink" rounded>Left</mdb-btn>
          <mdb-btn color="pink" rounded>Middle</mdb-btn>
          <mdb-btn color="pink" rounded>Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn gradient="purple" rounded>Left</mdb-btn>
          <mdb-btn gradient="purple" rounded>Middle</mdb-btn>
          <mdb-btn gradient="purple" rounded>Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn color="purple" icon="star" iconClass="fa-sm" rounded>Left</mdb-btn>
          <mdb-btn color="purple" icon="heart" iconClass="fa-sm" rounded>Middle</mdb-btn>
          <mdb-btn color="purple" icon="user" iconClass="fa-sm" rounded>Right</mdb-btn>
        </mdb-btn-group>
        <br><br>
        <mdb-btn-group>
          <mdb-btn outline="deep-purple" icon="star" iconClass="fa-sm" rounded>Left</mdb-btn>
          <mdb-btn outline="deep-purple" icon="heart" iconClass="fa-sm" rounded>Middle</mdb-btn>
          <mdb-btn outline="deep-purple" icon="user" iconClass="fa-sm" rounded>Right</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbBtn, mdbBtnGroup, mdbContainer, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'ButtonsGroupProPage',
  components: {
    mdbBtn,
    mdbBtnGroup,
    mdbContainer,
    mdbIcon,
    mdbRow
  },
  data() {
    return {
      active: false,
      active2: true,
      active3: false,
      active4: false,
      active5: true,
      active6: false,
      active7: false
    };
  },
  methods: {
    toggleActiveState() {
      this.active = !this.active;
    },
    toggleActiveState2() {
      this.active2 = !this.active2;
    },
    toggleActiveState3() {
      this.active3 = !this.active3;
    },
    toggleActiveState4() {
      this.active4 = !this.active4;
    },
    toggleActiveState5() {
      this.active5 = true;
      this.active6 = false;
      this.active7 = false;
    },
    toggleActiveState6() {
      this.active5 = false;
      this.active6 = true;
      this.active7 = false;
    },
    toggleActiveState7() {
      this.active5 = false;
      this.active6 = false;
      this.active7 = true;
    }
  }
};
</script>

<style scoped>
</style>
