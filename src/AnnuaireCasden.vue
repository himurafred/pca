<template>
  <v-ons-page>
    <custom-toolbar :back-label="Annuaire">Annuaire Casden</custom-toolbar>
    <p style="text-align: center">
     01 02 03 04 05
   </p>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import app from './App';

  export default {
    methods: {
      pop() {
        this.pageStack.pop();
      }
    },
    props: ['pageStack'],
    components: { customToolbar }
  }
</script>
