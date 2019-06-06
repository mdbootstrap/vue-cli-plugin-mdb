<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Chips</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/badges/#chips-avatars/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-container class="mt-5">
      <h2>Chips with avatars</h2>
      <mdb-chip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="Contact Person" waves> John Doe</mdb-chip>
      <mdb-chip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" alt="Contact Person" size="md" waves> Anna Smith</mdb-chip>
      <mdb-chip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="Contact Person" size="lg" waves> Lara Lim</mdb-chip>

      <hr class="my-5"/>
      <h2>Chips without avatars</h2>
      <mdb-chip color="pink lighten-4" close> Tag 220 </mdb-chip>

      <hr class="my-5"/>
      <h2>Chips with various colors</h2>
      <mdb-chip src="https://mdbootstrap.com/img/Photos/Avatars/img(7).jpg" alt="Contact Person"> Caroline Smith</mdb-chip>
      <mdb-chip src="https://mdbootstrap.com/img/Photos/Avatars/img(28).jpg" alt="Contact Person" color="cyan darken-2" text="white" size="md"> Martha Lores</mdb-chip>
      <mdb-chip src="https://mdbootstrap.com/img/Photos/Avatars/img(21).jpg" alt="Contact Person" color="success-color" text="white" size="lg">The Sylvester</mdb-chip>
      <mdb-chip color="teal lighten-2" text="white" close>Martha</mdb-chip>
      <mdb-chip color="indigo lighten-4" text="indigo" size="md" close>24.08.2016</mdb-chip>
      <mdb-chip gradient="aqua" text="white" size="lg" close>Aqua gradient</mdb-chip>

      <hr class="my-5"/>
      <h2>Chip input</h2>
      <mdb-chip-input placeholder="+Tag" secondaryPlaceholder="Enter a tag" waves/>
      <mdb-chip-input :chips="['Tag 1','Tag 2','Tag 3']"/>

    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbChip, mdbChipInput, mdbIcon, mdbRow } from 'mdbvue';

export default {
  components: {
    mdbContainer,
    mdbChip,
    mdbChipInput,
    mdbIcon,
    mdbRow
  }
};

</script>

<style>
</style>
