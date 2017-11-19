<template>
  <v-ons-page>
    <custom-toolbar :back-label="'PCA'">PCA</custom-toolbar>
    <p style="text-align: center"><a href="https://www.pack-logiciels-libres.fr/IMG/pdf/manuel-pdfsam.pdf"> pdf </a></p>
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
