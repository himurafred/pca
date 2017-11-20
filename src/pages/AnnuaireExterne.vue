<template>
  <v-ons-page>
    <custom-toolbar  :back-label="'Menu'" :pageStack="pageStack">Annuaire Externe</custom-toolbar>
     <p style="text-align: center">
      <div class="center" v-for="(person, index) in annuaire">
         <p style="text-align: center">
           <div class="center" style="text-align: center">  
               {{ person.nom }}
            </div>
            <div class="center" style="text-align: center">  
              {{ person.tel }}
            </div>
          </p>
       </div>
    </p>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../common/components/CustomToolbar';
  import dataExt from '../configuration/dataExterne'

  export default {

     data() {
      return {
               annuaire : dataExt.annuaire
        }
     },

    props: ['pageStack'],
    components: { customToolbar }
  }
</script>
