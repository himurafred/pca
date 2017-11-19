<template>
  <v-ons-page>
    <custom-toolbar>Application PCA</custom-toolbar>
    <p style="text-align: center">
      <v-ons-button @click="pushSafe()">Safe</v-ons-button><br/><br/>
      <v-ons-button @click="pushAnnuaire()">Annuaire</v-ons-button><br/><br/>
      <v-ons-button @click="pushMessagerie()">Messagerie</v-ons-button><br/><br/>
      <v-ons-button @click="pushPca()">Go PCA</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import pageSafe from './PageSafe';
  import annuaire from './Annuaire';
  import messagerie from './Messagerie';
  import gopca from './GoPca'

  export default {
    
     methods: {
       pop(){
         this.pageStack.pop();
       },
       pushSafe() {
         this.pageStack.push(pageSafe);
       },
       pushAnnuaire() {
         this.pageStack.push(annuaire);
       },
       pushMessagerie() {
         this.pageStack.push(messagerie);
       },
       pushPca() {
         this.pageStack.push(gopca);
       }
     },
     props: ['pageStack'],
     components: { customToolbar }

  }
</script>
