<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Input Groups </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/input-group/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>

    <hr class="my-5"/>

    <h2 class="mb-3">Examples & customizations</h2>
    <h4 class="mb-3">Material buttons input groups</h4>

    <mdb-row>
      <mdb-col md="12">
        <section class="preview">

          <mdb-input placeholder="Product name">
            <span slot="prepend">
              <mdb-btn color="indigo" rounded >Hate it</mdb-btn>
            </span>
            <span slot="append">
              <mdb-btn color="pink" rounded >Love it</mdb-btn>
            </span>
          </mdb-input>

          <mdb-input placeholder="Product name">
            <span slot="prepend">
              <mdb-btn outline="default" rounded >Hate it</mdb-btn>
            </span>
            <span slot="append">
              <mdb-btn outline="danger" rounded >Love it</mdb-btn>
            </span>
          </mdb-input>

        </section>
      </mdb-col>
    </mdb-row>

    <hr class="my-5"/>
    <h2 class="mb-3">Checkboxes and radios</h2>

    <mdb-row>
      <mdb-col md="6">
        <h4 class="mb-3">Default styling for Bootstrap Input Group component</h4>
        <section class="preview">

          <mdb-input basic class="mb-3">
            <div class="input-group-text" slot="prepend">
              <mdb-input type="checkbox" id="checkbox1" noWrapper/>
              <label class="form-check-label" for="checkbox1"/>
            </div>
          </mdb-input>

          <mdb-input basic class="mb-3">
            <div class="input-group-text" slot="prepend">
              <mdb-input type="checkbox" id="checkbox2" filled noWrapper/>
              <label class="form-check-label" for="checkbox2"/>
            </div>
          </mdb-input>

          <mdb-input basic class="mb-3">
            <div class="input-group-text" slot="prepend">
              <mdb-input type="radio" id="radio1" noWrapper value="prepend1"/>
              <label class="form-check-label" for="radio1"/>
            </div>
          </mdb-input>

        </section>
      </mdb-col>

      <mdb-col md="6">
        <h4 class="mb-3">Material styling for Bootstrap Input Group component</h4>
        <section class="preview">
          <mdb-input class="mb-3 mt-0">
            <div class="input-group-text md-addon" slot="prepend" >
              <mdb-input type="checkbox" id="checkbox3" noWrapper/>
              <label class="form-check-label" for="checkbox3"/>
            </div>
          </mdb-input>

          <mdb-input class="mb-3 mt-0">
            <div class="input-group-text md-addon" slot="prepend" >
              <mdb-input type="checkbox" id="checkbox4" filled noWrapper/>
              <label class="form-check-label" for="checkbox4"/>
            </div>
          </mdb-input>

          <mdb-input class="mb-3 mt-0">
            <div class="input-group-text md-addon" slot="prepend" >
              <mdb-input type="radio" id="radio2" noWrapper value="prepend2"/>
              <label class="form-check-label" for="radio2"/>
            </div>
          </mdb-input>
        </section>
      </mdb-col>
    </mdb-row>

        <hr class="my-5"/>
    <h2 class="mb-3">Buttons with dropdowns</h2>

      <mdb-row>
        <mdb-col md="12">
          <h4 class="mb-3">Material styling for Bootstrap Input Group component</h4>

          <section class="preview">

            <mdb-input basic class="mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-dropdown slot="prepend">
                <mdb-dropdown-toggle outline="secondary" size="md" slot="toggle" class="z-depth-0">dropdown</mdb-dropdown-toggle>
                <mdb-dropdown-menu color="secondary">
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-input>

            <mdb-input basic class="mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-dropdown slot="append">
                <mdb-dropdown-toggle outline="info" size="md" slot="toggle" class="z-depth-0">dropdown</mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-input>

          </section>
        </mdb-col>
      </mdb-row>

      <hr class="my-5"/>
      <h2 class="mb-3">Segmented buttons</h2>

      <mdb-row>
        <mdb-col md="12">
        <h4 class="mb-3">Material buttons input groups</h4>

          <section class="preview">

            <mdb-input class="mt-0 mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-btn color="elegant" slot="prepend" group>action</mdb-btn>
              <mdb-dropdown slot="prepend">
                <mdb-dropdown-toggle slot="toggle" color="elegant" class="z-depth-0 px-2" size="md" split></mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-input>

            <mdb-input class="mt-0 mb-3" ariaLabel="Example text with button addon" ariaDescribedBy="button-addon1">
              <mdb-btn color="ins" slot="append" group>action</mdb-btn>
              <mdb-dropdown slot="append" >
                <mdb-dropdown-toggle slot="toggle" color="ins" class="z-depth-0 px-2" size="md" split></mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-input>

          </section>
        </mdb-col>
      </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbCol, mdbInput, mdbBtn, mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem } from 'mdbvue';

export default {
  name: 'InputGroupProPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCol,
    mdbInput,
    mdbBtn,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem
  }
}
</script>

<style>
section.preview {
    border: 1px solid #e0e0e0;
    padding: 15px;
}
.input-group.md-form.form-sm.form-1 input {
    border: 1px solid #bdbdbd;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
.input-group.md-form.form-sm.form-1 input[type=text]:focus:not([readonly]).red-border  {
    border: 1px solid #ef9a9a;
    box-shadow: none;
  }
.input-group.md-form.form-sm.form-1 input[type=text]:focus:not([readonly]).amber-border  {
    border: 1px solid #ffca28;
    box-shadow: none;
  }
.input-group.md-form.form-sm.form-1 input[type=text]:focus:not([readonly]).blue-border  {
    border: 1px solid #64b5f6;
    box-shadow: none;
  }
.input-group.md-form.form-sm.form-2 input {
	border: 1px solid #bdbdbd;
}
.input-group.md-form.form-sm.form-2 input[type=text]:focus:not([readonly]).lime-border  {
	border: 1px solid #cddc39;
	box-shadow: none;
}
.input-group.md-form.form-sm.form-3 input {
	border: 1px solid #bdbdbd;
	border-top-left-radius: 0.25rem;
	border-bottom-left-radius: 0.25rem;
}
.input-group.md-form.form-sm.form-3 input[type=text]:focus:not([readonly]).purple-border  {
	border: 1px solid #ce93d8;
	box-shadow: none;
}
</style>
