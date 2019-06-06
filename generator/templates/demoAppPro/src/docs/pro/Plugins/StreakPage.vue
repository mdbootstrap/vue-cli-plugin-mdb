<template>
<mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
    <h4 class="demo-title"><strong>Streak</strong></h4>
    <a href="https://mdbootstrap.com/plugins/vue/streak/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
  </mdb-row>
  <hr class="my-5" />

  <h2 class="section-heading mb-4">
    Basic Example
  </h2>
  <mdb-streak :quote="quote" :by="by" />

  <hr class="my-5" />
    <h2 class="section-heading mb-4">
    Medium Streak
  </h2>
    <mdb-streak
      quote="I photograph to see what the world looks like in photographs."
      by="Garry Winogrand" md byClass="grey-text font-weight-bold" quoteClass="font-weight-bold"
      wrapperClass="blue lighten-4"
    />

  <hr class="my-5" />

    <h2 class="section-heading mb-4">
    Streak with photo
  </h2>

  <mdb-streak
    :quote="quote"
    :by="by"
    picture="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img(115).jpg"
    overlayClass="white-text rgba-black-light pattern-1"
    lg
    />

<div style="height: 200px"/>
</mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbStreak} from 'mdbvue';
export default {
  name: 'StreakPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbStreak
  },
  data() {
    return {
      quote: 'The people who are crazy enough to think they can change the world are the ones who do.',
      by: 'Steve Jobs'
    };
  }
};
</script>

<style scoped>
.streak.streak-photo {
  background-attachment: fixed;
}
</style>
