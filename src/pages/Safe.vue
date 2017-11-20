<template>
  <v-ons-page>
    <custom-toolbar  :back-label="'Menu'" :pageStack="pageStack">Safe</custom-toolbar>
     <p style="text-align: center">
       <div class="center" style="text-align: center">  
            <v-ons-button @click="safe()">I'm Safe!</v-ons-button>
      </div>
    </p>
  </v-ons-page>
</template>

<script>
  import customToolbar from '../common/components/CustomToolbar';

  export default {
    methods: {
      safe() {
        let conf = confirm('Are you in safety ?')
        if(conf){
          alert('send ok')
        }else{
          alert('no action')
        }
      } 
    },
    props: ['pageStack'],
    components: { customToolbar }
  }
</script>
