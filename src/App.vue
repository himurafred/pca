<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import pageSafe from './PageSafe';
  import welcome from './Welcome';

  export default {
    data() {
      return {
        pageStack: [welcome]
      }
    }
  }
</script>
