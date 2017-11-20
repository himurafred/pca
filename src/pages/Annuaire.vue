<template>
  <v-ons-page>
    <custom-toolbar  :back-label="'Menu'" :pageStack="pageStack"> Annuaire </custom-toolbar>
    <custom-button :buttons="buttons" :pageStack="pageStack"></custom-button>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../common/components/CustomToolbar';
  import customButton from '../common/components/CustomButton';
  import configurationAnnuaire from '../configuration/configurationAnnuaire'

  export default {
    data() {
      return {
               buttons : configurationAnnuaire.buttons
        }
    },
    props: ['pageStack'],
    components: { customToolbar, customButton }
  }
</script>
