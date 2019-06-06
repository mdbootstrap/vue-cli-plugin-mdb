<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Inputs</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/inputs/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Checkboxes</h4>
      <section>

        <h5 class="mb-3">Basic examples</h5>  
        <mdb-input type="checkbox" id="checkbox1" name="check1" v-model="check1" label="Material unchecked" />
        <p class="pt-2">Checked: {{ check1 }}</p>
        <mdb-input type="checkbox" id="checkbox2" name="check2" v-model="check2" label="Material checked" />
        <p class="pt-2">Checked: {{ check2 }}</p>

        <h5 class="mt-5 mb-3">Disabled examples</h5>  
        <mdb-input type="checkbox" id="checkbox1" name="check3" v-model="check3" label="Material unchecked" disabled />
        <p class="pt-2">Checked: {{ check3 }}</p>
        <mdb-input type="checkbox" id="checkbox2" name="check4" v-model="check4" label="Material checked" disabled />
        <p class="pt-2">Checked: {{ check4 }}</p>

        <h5 class="mt-5 mb-3">Inline checkboxes</h5>
        <mdb-form-inline>
          <mdb-input type="checkbox" id="checkbox5" label="Default checkobox" />
          <mdb-input type="checkbox" id="checkbox6" label="Filled-in checkobox" filled/>
          <mdb-input type="checkbox" id="checkbox7" label="Default checkobox" />
        </mdb-form-inline>

      </section>
    </section>

    <section class="demo-section">
      <h4>Radio buttons</h4>
      <section>
        <h5 class="mb-3">Basic examples</h5>  
        <mdb-input type="radio" id="option1-1" name="radio1" radioValue="option1" v-model="radio1" label="Material unchecked" />
        <mdb-input type="radio" id="option1-2" name="radio1" radioValue="option2" v-model="radio1" label="Material checked" />
        <p class="pt-2">Picked: {{ radio1 }}</p>

        <h5 class="mt-5 mb-3">Disabled examples</h5>  
        <mdb-input type="radio" id="option2-1" name="radio2" radioValue="option1" v-model="radio2" label="Material unchecked disabled" disabled />
        <mdb-input type="radio" id="option2-2" name="radio2" radioValue="option2" v-model="radio2" label="Material checked disabled" disabled />
        <p class="pt-2">Picked: {{ radio2 }}</p>

        <h5 class="mt-5 mb-3">Name property</h5>  
        <mdb-input type="radio" id="option3-1" name="groupOfMaterialRadios" radioValue="option1" v-model="radio3" label="Option 1" />
        <mdb-input type="radio" id="option3-2" name="groupOfMaterialRadios" radioValue="option2" v-model="radio3" label="Option 2" />
        <mdb-input type="radio" id="option3-3" name="groupOfMaterialRadios" radioValue="option3" v-model="radio3" label="Option 3" />
        <p class="pt-2">Picked: {{ radio3 }}</p>

        <h5 class="mt-5 mb-3">Inline</h5>  
        <mdb-form-inline>
          <mdb-input type="radio" id="option5-1" name="groupOfMaterialRadios2" radioValue="1" v-model="radio5" label="1" />
          <mdb-input type="radio" id="option5-2" name="groupOfMaterialRadios2" radioValue="2" v-model="radio5" label="2" />
          <mdb-input type="radio" id="option5-3" name="groupOfMaterialRadios2" radioValue="3" v-model="radio5" label="3" />
        </mdb-form-inline>
        <p class="pt-2">Picked: {{ radio5 }}</p>

      </section>
    </section>

    <section class="demo-section">
      <h4>Helper text</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-input type="text" label="Input text" counter small="Your username shouldn't be longer than 10 characters."/>
            <mdb-input type="text" outline label="Input text" counter small="Your username shouldn't be longer than 10 characters."/>
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Character counter</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-input type="text" label="Input text" counter />
            <mdb-input type="text" label="Input text" counter :counterMaxValue="20" />
            <mdb-input type="text" label="Input text" outline counter />
          </mdb-col>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Switch</h4>
      <section>
        <mdb-switch @getValue="getSwitchValue"/>
        <mdb-switch checked @getValue="getSwitchValue"/>
        <h4 class="mt-5 mb-3">Disabled</h4>
        <mdb-switch disabled />
      </section>
    </section>

    <section class="demo-section">
      <h4>File input</h4>
      <section>
        <h4 class="mb-3">Basic example</h4>
        <mdb-file-input @getValue="getFileInputValue" ref="fileInput" />
        <mdb-btn @click.native="resetFileInput" size="sm" color="danger">Reset</mdb-btn>
        <h4 class="mt-5 mb-3">Multiple files</h4>
        <mdb-file-input @getValue="getFileInputValue" multiple btnColor="primary" />
      </section> 
    </section>

    <section class="demo-section">      
      <h4>Slider</h4>
      <section>
        <mdb-range-input :min="0" :max="100" :value="50" @getValue="getSliderValue"></mdb-range-input>
      </section>
    </section>

    <section class="demo-section">
      <h4>Slider with different width</h4>
      <section>
        <mdb-range-input wrapperClass="my-4 w-25" :min="0" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
        <mdb-range-input wrapperClass="my-4 w-50" :min="0" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
        <mdb-range-input wrapperClass="my-4 w-75" :min="0" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
        <mdb-range-input wrapperClass="my-4 w-100" :min="0" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
      </section>
    </section>

    <section class="demo-section">
      <h4>Slider with first and last value</h4>
      <section>
        <div class="d-flex justify-content-center my-4">
          <mdb-range-input wrapperClass="my-4 w-25" :min="20" :max="50" :value="25" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
        </div>
        <div class="d-flex justify-content-center my-4">
          <mdb-range-input wrapperClass="my-4 w-50" :min="0" :max="40" :value="40" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
        </div>
        <div class="d-flex justify-content-center my-4">
          <mdb-range-input wrapperClass="my-4 w-75" :min="0" :max="100" :value="0" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
        </div>
        <div class="d-flex justify-content-center my-4">
          <mdb-range-input wrapperClass="my-4 w-100" :min="40" :max="100" :value="50" @getValue="getSliderValue" wrapperClassName></mdb-range-input>
        </div>
      </section>
    </section>

    <section class="demo-section">
      <h4>Button checkboxes</h4>
      <section>
        <h5 class="title mb-3">Classic checkbox buttons</h5>
        <mdb-btn-group>
          <mdb-btn color="primary" @click.native="toggleActiveState1" :active="active1">Checkbox 1 (pre-checked)</mdb-btn>
          <mdb-btn color="primary" @click.native="toggleActiveState2" :active="active2">Checkbox 2</mdb-btn>
          <mdb-btn color="primary" @click.native="toggleActiveState3" :active="active3">Checkbox 3</mdb-btn>
        </mdb-btn-group>

        <h5 class="title my-3">Rounded checkbox buttons</h5>
        <mdb-btn-group>
          <mdb-btn color="pink" rounded @click.native="toggleActiveState1" :active="active1">Checkbox 1 (pre-checked)</mdb-btn>
          <mdb-btn color="pink" rounded @click.native="toggleActiveState2" :active="active2">Checkbox 2</mdb-btn>
          <mdb-btn color="pink" rounded @click.native="toggleActiveState3" :active="active3">Checkbox 3</mdb-btn>
        </mdb-btn-group>

        <h5 class="title my-3">Rounded checkbox buttons</h5>
        <mdb-btn-group>
          <mdb-btn color="warning" rounded icon="diamond" iconRight @click.native="toggleActiveState1" :active="active1">Checkbox 1 (pre-checked)</mdb-btn>
          <mdb-btn color="warning" rounded icon="user" iconRight @click.native="toggleActiveState2" :active="active2">Checkbox 2</mdb-btn>
          <mdb-btn color="warning" rounded icon="code" iconRight @click.native="toggleActiveState3" :active="active3">Checkbox 3</mdb-btn>
        </mdb-btn-group>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbInput, mdbFormInline, mdbSwitch, mdbFileInput, mdbRangeInput, mdbBtn, mdbBtnGroup, mdbIcon, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'InputsProPage',
  components: {
    mdbContainer,
    mdbInput,
    mdbFormInline,
    mdbSwitch,
    mdbFileInput,
    mdbRangeInput,
    mdbBtn,
    mdbBtnGroup,
    mdbIcon,
    mdbRow,
    mdbCol
  },
  data() {
    return {
      check1: false,
      check2: true,
      check3: false,
      check4: true,
      radio1: 'option2',
      radio2: 'option2',
      radio3: 'option2',
      radio5: '',
      active1: true,
      active2: false,
      active3: false,
      multiCheckboxes: false
    };
  },
  methods: {
    getSliderValue (val) {
      console.log(val);
    },
    getFileInputValue (val) {
      console.log(val);
    },
    getSwitchValue (val) {
      console.log(val);
    },
    toggleActiveState1() {
      this.active1 = !this.active1;
    },
    toggleActiveState2() {
      this.active2 = !this.active2;
    },
    toggleActiveState3() {
      this.active3 = !this.active3;
    },
    resetFileInput() {
      this.$refs.fileInput.reset();
    }
  }
};

</script>

<style scoped>
h5 {
  font-weight: bold;
}
</style>
