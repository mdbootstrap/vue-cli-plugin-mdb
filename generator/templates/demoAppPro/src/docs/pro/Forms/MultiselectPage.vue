<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Multiselect</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/multiselect/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Standard multiselect</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple selectAll @getValue="getSelectValue" :options="countries" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with label</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple selectAll @getValue="getSelectValue" :options="countries2" />
            <label>Example label</label>
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Colorful Multiselect with label</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple color="danger" selectAll @getValue="getSelectValue" :options="countries3" />
            <label>Example label</label>
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with options groups</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple selectAll @getValue="getSelectValue" :options="groupOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with icons</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple selectAll @getValue="getSelectValue" :options="iconOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple search selectAll @getValue="getSelectValue" :options="searchOptions" />
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with label and search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple search selectAll @getValue="getSelectValue" :options="labelAndSearchOptions" />
            <label>Example label</label>
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Colorful Multiselect with label and search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple color="info" search selectAll @getValue="getSelectValue" :options="colorfulAndSearchOptions" />
            <label>Example label</label>
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with options groups and search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple search selectAll @getValue="getSelectValue" :options="groupsAndSearchOptions" />
            <label>Example label</label>
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Multiselect with icons and search box</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select multiple search selectAll @getValue="getSelectValue" :options="iconsAndSearchOptions" />
            <label>Example label</label>
          </mdb-col>
        </mdb-row>
      </section>
    </section>  
    <section class="demo-section">
      <h4>Outline multiselect</h4>
      <section>
        <mdb-row>
          <mdb-col sm="6">
            <mdb-select outline multiple selectAll v-model="outlineOptions" />
            <label>Outline multiselect</label>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <br><br><br><br><br><br><br><br><br>
  </mdb-container>
</template>

<script>
import { mdbSelect, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn } from 'mdbvue';

export default {
  name: 'MultiSelectPage',
  components: {
    mdbSelect,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn
  },
  data() {
    return {
      countries: [
        { text: 'Choose your country', value: null, disabled: true, selected: true },
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      countries2: [
        { text: 'Choose your country', value: null, disabled: true, selected: true },
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      countries3: [
        { text: 'Choose your country', value: null, disabled: true, selected: true },
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
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
      searchOptions: [
        { text: 'Choose your country', value: null, disabled: true, selected: true },
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      labelAndSearchOptions: [
        { text: 'Choose your country', value: null, disabled: true, selected: true },
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      colorfulAndSearchOptions: [
        { text: 'Choose your country', value: null, disabled: true, selected: true },
        { text: 'USA', value: 1 }, 
        { text: 'Germany', value: 2 }, 
        { text: 'France', value: 3 }, 
        { text: 'Poland', value: 4 }, 
        { text: 'Japan', value: 5 }
      ],
      groupsAndSearchOptions: [
        { text: 'team 1', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 1', value: 'Option 1', selected: true }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'team 2', value: null, disabled: true, optgroup: true },
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }
      ],
      iconsAndSearchOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg' }, 
        { text: 'Option nr 2', value: 'Option 2', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' }, 
        { text: 'Option nr 3', value: 'Option 3', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' }
      ],
      outlineOptions: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' }, 
        { text: 'Option nr 2', value: 'Option 2' }, 
        { text: 'Option nr 3', value: 'Option 3' }, 
        { text: 'Option nr 4', value: 'Option 4' }, 
        { text: 'Option nr 5', value: 'Option 5' }
      ]
    };
  },
  methods: {
    getSelectValue(value, text) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
h4 {
  font-weight: bold;
}
</style>
