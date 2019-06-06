<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Search</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/search/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container>
      <h3 class="my-5">Search with buttons</h3>
      <mdb-form-inline class="mr-auto mb-4">
        <mdb-input class="mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <mdb-btn gradient="aqua" rounded size="sm" type="submit" class="mr-auto">Search</mdb-btn>
        <mdb-input class="mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <mdb-btn outline color="warning" rounded size="sm" type="submit" class="mr-auto">Search</mdb-btn>
        <mdb-input class="mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <mdb-btn color="unique" rounded size="sm" type="submit" class="mr-auto">Search</mdb-btn>
      </mdb-form-inline>
      <form class="form-inline mr-auto">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <mdb-btn gradient="aqua" rounded size="sm" type="submit" class="mr-auto">Search</mdb-btn>
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <mdb-btn outline color="warning" rounded size="sm" type="submit" class="mr-auto">Search</mdb-btn>
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <mdb-btn color="unique" rounded size="sm" type="submit" class="mr-auto">Search</mdb-btn>
      </form>
      <h3 class="my-5">Search within navbar</h3>
      <mdb-navbar dark class="indigo">
        <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav right>
            <mdb-form-inline class="ml-auto">
              <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <mdb-btn size="sm" type="submit" class="mr-auto" outline="white">Search</mdb-btn>
            </mdb-form-inline>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <br/>
      <mdb-navbar class="blue-grey lighten-5">
        <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item active>Home</mdb-nav-item>
            <mdb-nav-item>Features</mdb-nav-item>
            <mdb-nav-item>Pricing</mdb-nav-item>
            <!-- mdbDropdown -->
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle slot="toggle" tag="a" navLink color="blue-gray" waves-fixed>Dropdown</mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                <mdb-dropdown-item>Action</mdb-dropdown-item>
                <mdb-dropdown-item>Another action</mdb-dropdown-item>
                <mdb-dropdown-item>Something else here</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
          <mdb-navbar-nav right>
            <mdb-form-inline class="ml-auto">
              <mdb-input class="mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </mdb-form-inline>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <br/>
      <mdb-navbar dark class="teal lighten-2">
        <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav right>
            <mdb-form-inline class="ml-auto">
              <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </mdb-form-inline>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <br/>
      <mdb-navbar dark class="pink lighten-3" href="#/">
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-form-inline class="ml-auto">
              <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <mdb-icon icon="search" class="white-text"/>
            </mdb-form-inline>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
        <mdb-navbar-brand style="order: 3" href="#">Navbar</mdb-navbar-brand>
      </mdb-navbar>
      <br/>
      <mdb-navbar dark class="blue lighten-3" href="#/">
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-form-inline class="ml-auto">
              <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <mdb-btn color="mdb-color" rounded size="sm" class="mr-auto">Search</mdb-btn>
            </mdb-form-inline>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
        <mdb-navbar-brand style="order: 3" href="#">Navbar</mdb-navbar-brand>
      </mdb-navbar>
      <h3 class="my-5">Search within select</h3>
      <mdb-select search @getValue="getSelectValue" :options="options" />
      <h3 class="my-5">Search within multiselect</h3>
      <mdb-select multiple search @getValue="getSelectValue" :options="options2" />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {mdbContainer, mdbInput, mdbFormInline, mdbBtn, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownItem, mdbDropdownMenu, mdbDropdownToggle, mdbIcon, mdbSelect, mdbNavbarBrand, mdbRow } from 'mdbvue';

export default {
  name: 'MasksPage',
  components: {
    mdbContainer,
    mdbInput,
    mdbFormInline,
    mdbBtn,
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbIcon,
    mdbSelect,
    mdbNavbarBrand,
    mdbRow
  },
  data() {
    return {
      options: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' },
        { text: 'Option nr 2', value: 'Option 2' },
        { text: 'Option nr 3', value: 'Option 3' },
        { text: 'Option nr 4', value: 'Option 4' },
        { text: 'Option nr 5', value: 'Option 5' }
      ],
      options2: [
        { text: 'Choose your option', value: null, disabled: true, selected: true },
        { text: 'Option nr 1', value: 'Option 1' },
        { text: 'Option nr 2', value: 'Option 2' },
        { text: 'Option nr 3', value: 'Option 3' },
        { text: 'Option nr 4', value: 'Option 4' },
        { text: 'Option nr 5', value: 'Option 5' }
      ],
    };
  },
  methods: {
    getSelectValue(value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
</style>
