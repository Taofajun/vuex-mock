<template>
  <div class="hello">
   获取store中的值 {{count1}}
   <p>使用方法获取store中的值{{getState()}}</p>   
   <p><button @click="add1">add 1</button><button @click="reduce1">-1</button></p>
   <p @click="toTo">转移</p>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
import api from './../axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState({
      count1:state=>state.count
    })
  },
  methods:{
    ...mapGetters([
      'getState'
    ]),
    ...mapActions(
     [
       'add',
       'reduce'
     ]
    ),
    getData(){
      api.mockdata('/data/index',{}).then(res=>{
       this.add(res)
      }).catch(error=>{
        console.log(error)
      })
    },
    common(a,c){
      console.log(arguments)
       if(a=2){
         c=6
       }
       console.log(arguments[1],12)
       return c
    },
    add1(a){
     this.add(a)
    },
    reduce1(){
     this.reduce()
    },
    toTo(){
      this.$router.push('/mock')
    }
  },
  mounted(){
    this.getData()
    console.log(this.common(2,null))
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
