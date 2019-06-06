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
        <mdb-input type="checkbox" id="checkbox1" v-model="check" label="Default checkbox" />
        <p class="pt-2">Checked: {{ check }}</p>

        <h5 class="mt-5 mb-3">Filled-in checkbox</h5>
        <mdb-input type="checkbox" id="checkbox2" @change="checkboxChange" label="Filled-in checkbox" checked filled/>

        <h5 class="mt-5 mb-3">Multiple checkboxes, bound to the same Array</h5>
        <mdb-input type="checkbox" id="checkboxArray1" v-model="checkArray" checkboxValue="Jack" label="Jack" />
        <mdb-input type="checkbox" id="checkboxArray2" v-model="checkArray" checkboxValue="John" label="John" />
        <mdb-input type="checkbox" id="checkboxArray3" v-model="checkArray" checkboxValue="Mike" label="Mike" />
        <p class="pt-2">Checked names: {{ checkArray }}</p>
        
        <h5 class="mt-5 mb-3">Disabled checkboxes</h5>
        <mdb-input type="checkbox" id="checkbox3" label="Default checkbox" disabled/>
        <mdb-input type="checkbox" id="checkbox4" label="Filled-in checkbox" filled disabled/>

        <h5 class="mt-5 mb-3">Inline checkboxes</h5>
        <mdb-form-inline>
          <mdb-input type="checkbox" id="checkbox5" @change="checkboxChange" label="Default checkbox" />
          <mdb-input type="checkbox" id="checkbox6" @change="checkboxChange" label="Filled-in checkbox" filled/>
          <mdb-input type="checkbox" id="checkbox7" @change="checkboxChange" label="Default checkbox" />
        </mdb-form-inline>

      </section>
    </section>

    <section class="demo-section">
      <h4>Radio buttons</h4>
      <section>
        <h5 class="mb-5">Basic examples</h5>
        <mdb-input type="radio" id="option1-1" name="option1" radioValue="option1" label="Option 1" v-model="radio" />
        <mdb-input type="radio" id="option1-2" name="option1" radioValue="option2" label="Option 2" v-model="radio" />
        <mdb-input type="radio" id="option1-3" name="option1" radioValue="option3" label="Option 3" v-model="radio" />
        <p class="pt-2">Picked: {{ radio }}</p>

        <h5 class="my-5">Radio buttons with gap</h5>
        <mdb-input type="radio"
          gap
          id="option2-1"
          name="option2"
          value="option1"
          label="Option 1"
          @input="handleRadio"
        />
        <mdb-input type="radio"
          gap
          id="option2-2"
          name="option2"
          value="option2"
          label="Option 2"
          @input="handleRadio"
          checked
        />
        <mdb-input type="radio"
          gap
          id="option2-3"
          name="option2"
          value="option3"
          label="Option 3"
          @input="handleRadio"
        />

        <h5 class="my-5">Inline radio buttons</h5>
        <mdb-form-inline>
          <mdb-input type="radio"
            id="option3-1"
            name="option3"
            value="option1"
            label="Option 1"
            @input="handleRadio"
          />
          <mdb-input type="radio"
            id="option3-2"
            name="option3"
            value="option2"
            label="Option 2"
            @input="handleRadio"
          />
          <mdb-input type="radio"
            id="option3-3"
            name="option3"
            value="option3"
            label="Option 3"
            @input="handleRadio"
          />
        </mdb-form-inline>
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
import { mdbContainer, mdbInput, mdbFormInline, mdbSwitch, mdbRangeInput, mdbBtn, mdbBtnGroup, mdbIcon, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'InputsProPage',
  components: {
    mdbContainer,
    mdbInput,
    mdbFormInline,
    mdbSwitch,
    mdbRangeInput,
    mdbBtn,
    mdbBtnGroup,
    mdbIcon,
    mdbRow,
    mdbCol
  },
  data() {
    return {
      radio: 'option2',
      active1: true,
      active2: false,
      active3: false,
      check: false,
      checkArray: ['John'],
      multiCheckboxes: false
    };
  },
  methods: {
    checkboxChange (val) {
      console.log(val);
    },
    handleRadio (val) {
      console.log(val);
    },
    getSliderValue (val) {
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
    }
  }
};

</script>

<style scoped>
h5 {
  font-weight: bold;
}
</style>
