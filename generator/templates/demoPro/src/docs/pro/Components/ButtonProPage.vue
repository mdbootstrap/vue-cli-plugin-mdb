<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Buttons</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/components/buttons/?utm_source=DemoApp&utm_medium=MDBVuePro"
        wavesFixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <hr class="mb-5">

    <section class="demo-section">
      <h4>Gradient buttons</h4>
      <section>
        <mdb-btn gradient="peach" rounded>Peach gradient button</mdb-btn>
        <mdb-btn gradient="purple" rounded>Purple gradient button</mdb-btn>
        <mdb-btn gradient="blue" rounded>Blue gradient button</mdb-btn>
        <mdb-btn gradient="aqua" rounded>Aqua gradient button</mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>Rounded buttons</h4>
      <section>
        <mdb-btn color="primary" rounded>Primary rounded button</mdb-btn>
        <mdb-btn color="default" rounded>Default rounded button</mdb-btn>
        <mdb-btn color="secondary" rounded>Secondary rounded button</mdb-btn>
        <mdb-btn color="success" rounded>Success rounded button</mdb-btn>
        <mdb-btn color="info" rounded>Info rounded button</mdb-btn>
        <mdb-btn color="warning" rounded>Warning rounded button</mdb-btn>
        <mdb-btn color="danger" rounded>Danger rounded button</mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>Rounded outline buttons</h4>
      <section>
        <mdb-btn outline="primary" darkWaves rounded>Primary outline button</mdb-btn>
        <mdb-btn outline="default" darkWaves rounded>Default outline button</mdb-btn>
        <mdb-btn outline="secondary" darkWaves rounded>Secondary outline button</mdb-btn>
        <mdb-btn outline="success" darkWaves rounded>Success outline button</mdb-btn>
        <mdb-btn outline="info" darkWaves rounded>Info outline button</mdb-btn>
        <mdb-btn outline="warning" darkWaves rounded>Warning outline button</mdb-btn>
        <mdb-btn outline="danger" darkWaves rounded>Danger outline button</mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>Floating buttons</h4>
      <section>
        <mdb-btn tag="a" gradient="purple" floating size="lg">
          <mdb-icon icon="bolt"/>
        </mdb-btn>
        <mdb-btn tag="a" gradient="peach" floating>
          <mdb-icon icon="leaf"/>
        </mdb-btn>
        <mdb-btn tag="a" gradient="blue" floating size="sm">
          <mdb-icon icon="star"/>
        </mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>Flat button</h4>
      <section>
        <mdb-btn flat size="lg" darkWaves>Click me</mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>Toggle button</h4>
      <section>
        <mdb-btn color="primary" @click.native="toggleActiveState" :active="active">Single Toggle</mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>Checkbox and radio buttons</h4>
      <section>
        <mdb-btn-group>
          <mdb-btn
            color="primary"
            @click.native="toggleActiveState2"
            :active="active2"
          >Checkbox 1 (pre-checked)</mdb-btn>
          <mdb-btn color="primary" @click.native="toggleActiveState3" :active="active3">Checkbox 2</mdb-btn>
          <mdb-btn color="primary" @click.native="toggleActiveState4" :active="active4">Checkbox 3</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>

    <section class="demo-section">
      <h4>Checkbox and radio buttons</h4>
      <section>
        <mdb-btn-group>
          <mdb-btn
            color="primary"
            @click.native="toggleActiveState5"
            :active="active5"
          >Radio 1 (preselected)</mdb-btn>
          <mdb-btn color="primary" @click.native="toggleActiveState6" :active="active6">Radio 2</mdb-btn>
          <mdb-btn color="primary" @click.native="toggleActiveState7" :active="active7">Radio 3</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>

    <mdb-btn-fixed
      @mouseenter.native="hover"
      @mouseleave.native="hoverOut"
      icon="pencil-alt"
      size="lg"
      :bottom="30"
      :right="25"
    >
      <mdb-btn-fixed-item :show="show" color="red" icon="star"/>
      <mdb-btn-fixed-item :show="show" color="yellow" icon="user"/>
      <mdb-btn-fixed-item :show="show" color="green" icon="envelope"/>
      <mdb-btn-fixed-item :show="show" color="blue" icon="shopping-cart"/>
    </mdb-btn-fixed>
    <mdb-btn-fixed
      @click.native.prevent="pageUp"
      color="blue"
      icon="arrow-up"
      size="lg"
      :bottom="30"
      :right="105"
    />
  </mdb-container>
</template>

<script>
import {
  mdbBtn,
  mdbBtnGroup,
  mdbBtnFixed,
  mdbBtnFixedItem,
  mdbIcon,
  mdbContainer,
  mdbRow
} from "mdbvue";

export default {
  data() {
    return {
      show: false,
      active: false,
      active2: true,
      active3: false,
      active4: false,
      active5: true,
      active6: false,
      active7: false
    };
  },
  name: "ButtonPage",
  components: {
    mdbBtn,
    mdbBtnGroup,
    mdbBtnFixed,
    mdbBtnFixedItem,
    mdbIcon,
    mdbContainer,
    mdbRow
  },
  methods: {
    pageUp() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
    hover() {
      this.show = true;
    },
    hoverOut() {
      this.show = false;
    },
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
