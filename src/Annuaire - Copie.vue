<template>
  <v-ons-page>
    <custom-toolbar :back-label="Annuaire">Annuaire</custom-toolbar>
    <p style="text-align: center">
      <div class="center" v-for="(button, index) in buttons">
         <div class="center" style="text-align: center">  
            <v-ons-button @click="push(button.page)">{{button.label}}</v-ons-button>
          </div>
          <br/>
     </div>
    </p>
   
   <!-- <custom-buttons :buttons="buttons"></custom-buttons> -->
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  //import customButtons from './commons/CustomButtons'
  import app from './App';
  import configurationAnnuaire from './configuration/annuaire'

  export default {
    data() {
      return {
               buttons : configurationAnnuaire.buttons
        }
    },

    methods: {
      pop() {
        this.pageStack.pop();
      },

      push(page){ 
        this.pageStack.push(page);
      }
    },
    props: ['pageStack'],
    components: { customToolbar/*, customButtons */}
  }
</script>
