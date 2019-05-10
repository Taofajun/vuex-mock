<template>
    
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{}
  },
  computed:{
     ...mapState({
        info:state=>state.info
     })
  },
  mounted(){
      console.log(this.info)
  }    

}
</script>
<style>

</style>
