<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Page 1'">Page Sage</custom-toolbar>
    <p style="text-align: center">I'm Safe</p>
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
