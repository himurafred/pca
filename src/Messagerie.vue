<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Messagerie'">Messagerie</custom-toolbar>
    <p style="text-align: center"><a href="http://www.google.fr"> messagerie casden </a></p>
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
