<template>
  <v-ons-page>
    <custom-toolbar :back-label="Annuaire">Annuaire</custom-toolbar>
    <custom-button :buttons="buttons"></custom-button>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar'
  import customButton from './CustomButton'
  import configurationAnnuaire from './configurationAnnuaire'

  export default {
    data() {
      return {
               buttons : configurationAnnuaire.buttons
        }
    },

    methods: {
      pop() {
        this.pageStack.pop();
      }
    },
    props: ['pageStack'],
    components: { customToolbar, customButton}
  }
</script>
