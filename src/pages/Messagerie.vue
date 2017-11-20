<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Menu'" :pageStack="pageStack">Messagerie</custom-toolbar>
    <p style="text-align: center"><a href="http://www.google.fr"> messagerie casden </a></p>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../common/components/CustomToolbar';

  export default {
    props: ['pageStack'],
    components: { customToolbar }
  }
</script>
