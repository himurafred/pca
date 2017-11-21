<template>
  <v-ons-page>
    <custom-toolbar  :back-label="'Menu'" :pageStack="pageStack">Annuaire Casden</custom-toolbar>
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
  import customToolbar from '../common/components/CustomToolbar'
  import dataCasden from '../configuration/dataCasden'

  export default {

    data() {
      
      return {
               annuaire : dataCasden.annuaire
        }
    },

    props: ['pageStack'], 
    components: { customToolbar }
  }
</script>
