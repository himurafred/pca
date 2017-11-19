<template>
  <v-ons-page>
    <custom-toolbar :back-label="Annuaire">Annuaire Externe</custom-toolbar>
     <p style="text-align: center">
       06 15 06 02 03
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
