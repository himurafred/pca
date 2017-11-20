<template>
  <v-ons-page>
    <custom-toolbar  :back-label="'Menu'" :pageStack="pageStack">PCA</custom-toolbar>
    <p style="text-align: center"><a href="https://www.pack-logiciels-libres.fr/IMG/pdf/manuel-pdfsam.pdf"> pdf </a></p>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../common/components/CustomToolbar';

  export default {
    props: ['pageStack'],
    components: { customToolbar }
  }
</script>
