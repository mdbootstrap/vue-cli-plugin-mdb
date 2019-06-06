<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Select</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/select/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select v-model="basicOptions" label="Basic example" />
          </mdb-col>
          <mdb-col sm="3" class="my-2">
            <mdb-btn tag="a" color="warning" floating @click.native="removeOption(basicOptions)" icon="minus" iconLeft size="sm"></mdb-btn>
            <mdb-btn tag="a" color="success" floating @click.native="addOption(basicOptions)" icon="plus" iconLeft size="sm"></mdb-btn>
            <mdb-btn tag="a" color="danger" floating @click.native="removeAllOptions(basicOptions)" icon="trash" iconLeft size="sm"></mdb-btn>
            <mdb-btn color="grey" size="sm" @click.native="selectOption(2)">Select option 2</mdb-btn>
            <mdb-btn color="grey" size="sm" @click.native="selectOption(3)">Select option 3</mdb-btn>
          </mdb-col>
          <mdb-col sm="3">
            <p class="mb-0" v-for="(option, index) in basicOptions" :key="index" :class="option.selected && 'text-success'">{{option.text}}</p>
          </mdb-col>
        </mdb-row>
      </section>   
    </section>
    <section class="demo-section">
      <h4>Color variations</h4>
      <section>  
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select color="primary" @getValue="getSelectValue" :options="colorOptions" label="Blue select" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Select with search box</h4>
      <section>  
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select search @getValue="getSelectValue" :options="searchOptions" label="Search" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Select with label and search box</h4>
      <section>  
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select search @getValue="getSelectValue" :options="labelOptions" label="Example label" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Multiple select</h4>
      <section>  
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple search selectAll :options="multiOptions" label="Example label" />
          </mdb-col>
          <mdb-col sm="3" class="my-2">
            <mdb-btn tag="a" color="warning" floating @click="removeOption(multiOptions)" icon="minus" iconLeft size="sm"></mdb-btn>
            <mdb-btn tag="a" color="success" floating @click="addOption(multiOptions)" icon="plus" iconLeft size="sm"></mdb-btn>
            <mdb-btn tag="a" color="danger" floating @click="removeAllOptions(multiOptions)" icon="trash" iconLeft size="sm"></mdb-btn>
            <mdb-btn color="grey" size="sm" @click.native="selectOptions(1, 2)">Select options 1, 2</mdb-btn>
            <mdb-btn color="grey" size="sm" @click.native="selectOptions(3, 4)">Select options 3, 4</mdb-btn>
          </mdb-col>
          <mdb-col sm="3">
            <p class="mb-0" v-for="(option, index) in multiOptions" :key="index" :class="option.selected && 'text-success'">{{option.text}}</p>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Options groups</h4>
      <section>  
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select @getValue="getSelectValue" :options="groupOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Select with icons</h4>
      <section>  
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select @getValue="getSelectValue" :options="iconOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Disabled select</h4>
      <section>  
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select disabled :options="disabledOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Resetting select</h4>
      <section>  
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select v-model="resetSelectOptions" ref="resetSelect" />
            <mdb-btn size="sm" color="danger" @click.native="$refs.resetSelect.reset();">Reset select</mdb-btn>
          </mdb-col>
          <mdb-col sm="6">
            <mdb-select v-model="resetMultiSelectOptions" ref="resetMultiSelect" multiple selectAll />
            <mdb-btn size="sm" color="danger" @click.native="$refs.resetMultiSelect.reset();">Reset multiple select</mdb-btn>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Material Select Validation</h4>
      <section>  
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select v-model="validateOptions" validation ref="validationSelect" />
            <mdb-btn size="sm" color="danger" @click.native="$refs.validationSelect.reset()">Reset</mdb-btn>
            <mdb-btn size="sm" color="primary" @click.native="$refs.validationSelect.validate()">Validate</mdb-btn>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select v-model="validateMultiOptions" validation multiple selectAll ref="validationMultiSelect" />
            <mdb-btn size="sm" color="danger" @click.native="$refs.validationMultiSelect.reset()">Reset</mdb-btn>
            <mdb-btn size="sm" color="primary" @click.native="$refs.validationMultiSelect.validate()">Validate</mdb-btn>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Outline select</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select outline v-model="outlineOptions" label="Outline select"/>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Data from API</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select v-model="axiosOptions" label="Choose country"/>
            Selected country code: {{ this.selectedData }}
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Old label syntax example</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select v-model="oldLabelOptions" />
            <label>Old label example</label>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <br><br><br><br><br><br><br><br><br>
  </mdb-container>
</template>

<script>
import { mdbSelect, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn } from 'mdbvue';
import axios from 'axios';

export default {
  name: 'SelectPage',
  components: {
    mdbSelect,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn
  },
  computed: {
    selectedData() {
      let response = this.axiosOptions.find(option => {
        return option.selected === true;
      });
      if (response) {
        return response.value;
      }
      return "Country is not selected";
    }
  },
  data() {
    return {
      basicOptions: [
        { text: 'Choose your option', value: null, disabled: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      colorOptions: [
        { text: 'Option nr 1', value: 'Option 1', selected: true }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      searchOptions: [
        { text: 'Choose your option', value: null, disabled: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      labelOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      multiOptions: [
        { text: 'Choose your options', value: null, disabled: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      groupOptions: [
        { text: 'team 1', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 1', value: 'Option 1', selected: true }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'team 2', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }
      ],
      iconOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' }, 
        { text: 'Option nr 2', value: 'Option 2', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' }, 
        { text: 'Option nr 3', value: 'Option 3', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' }
      ],
      disabledOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      resetSelectOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      resetMultiSelectOptions: [
        { text: 'Option nr 1', value: 'Option 1', selected: true }, 
        { text: 'Option nr 2', value: 'Option 2', selected: true }, 
        { text: 'Option nr 3', value: 'Option 3', selected: true }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      validateOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      validateMultiOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      outlineOptions: [
        { text: 'Choose your option', value: null, disabled: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      oldLabelOptions: [
        { text: 'Choose your option', value: null, disabled: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      axiosOptions: []
    };
  },
  methods: {
    getSelectValue(value, text) {
      console.log(value);
    },
    removeOption(data) {
      if (data.length < 2) return;
      data.pop();
    },
    removeAllOptions(data) {
      if (data.length < 2) return;
      data.splice(1);
    },
    addOption(data) {
      data.push({
        selected: false,
        text: 'Option nr ' + data.length,
        value: 'Option ' + data.length
      });
    },
    selectOption(key) {
      this.basicOptions.forEach(option => {
        option.selected = false;
      });
      this.$set(this.basicOptions[key], 'selected', true);
      this.basicOptions.sort();
    },
    selectOptions(...keys) {
      this.multiOptions.forEach(option => {
        option.selected = false;
      });
      keys.forEach(key => {
        this.$set(this.multiOptions[key], 'selected', true);
      });
      this.multiOptions.sort();
    }
  },
  mounted () {
    axios
      .get('https://restcountries.eu/rest/v2/region/europe')
      .then(response => {
        for (let i = 1; i <= 10; i++) {
          this.axiosOptions.push({text: response.data[i].name, value: response.data[i].alpha3Code});
        }
      });
  }
};
</script>

<style scoped>
</style>
