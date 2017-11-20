<template>
  <v-ons-page>
    <custom-toolbar>PCA</custom-toolbar>
    <custom-button :buttons="buttons" :pageStack="pageStack"></custom-button>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../common/components/CustomToolbar'
  import customButton from '../common/components/CustomButton'
  import configurationWelcome from '../configuration/configurationWelcome'

  export default {
    
    data() {
        return {
                 buttons : configurationWelcome.buttons
          }
      },

     methods: {

       pop(){
         this.pageStack.pop();
       }
     },
     props: ['pageStack'],
     components: { customToolbar, customButton }

  }
</script>
