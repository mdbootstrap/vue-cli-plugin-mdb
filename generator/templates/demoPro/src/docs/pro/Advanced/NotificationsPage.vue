<template>
  <mdb-container style="text-align: center">
    <mdb-row class="mt-5 align-items-center justify-content-start pt-5">
      <h4 class="demo-title"><strong>Notifications</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/notifications/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-btn color="info" @click.native="info">info message</mdb-btn>
    <mdb-btn color="warning" @click.native="warning">warning message</mdb-btn>
    <mdb-btn color="success" @click.native="success">success message</mdb-btn>
    <mdb-btn color="danger" @click.native="error">error message</mdb-btn>
  </mdb-container>
</template>

<script>
import { mdbBtn, mdbContainer, mdbRow, mdbIcon } from 'mdbvue';

export default {
  name: 'NotificationPage',
  components: {
    mdbBtn,
    mdbContainer,
    mdbRow,
    mdbIcon
  },
  methods: {
    info() {
      this.$notify.info({message: 'Hi! I am info message', position: 'top right', timeOut: 5000});
    },
    warning() {
      this.$notify.warn({message: 'Hi! I am warning message', position: 'top right', timeOut: 5000});
    },
    success() {
      this.$notify.success({message: 'Hi! I am success message', position:'top right', timeOut: 5000});
    },
    error() {
      this.$notify.error({message: 'Hi! I am error message', position: 'top right', timeOut: 5000});
    }
  }
};
</script>

<style>

</style>
