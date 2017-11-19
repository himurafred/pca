</template>
     <p style="text-align: center">
      <div class="center" v-for="(button, index) in buttons">
         <div class="center" style="text-align: center">  
            <v-ons-button :on-click="push(button.page)">{{button.label}}</v-ons-button>
          </div>
          <br/>
     </div>
    </p>
</template>

<script>
  export default {
    props: ['pageStack','buttons'],
    methods: {
      push(page){ 
        this.pageStack.push(page);
      }
    },
  }
</script>
