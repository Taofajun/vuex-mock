import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
   state:{
       count:1,
       info:{}
   },
   getters:{
       getState:function(state){
           return state.count+1
       }
   },
   mutations:{
       add(state,n){
          state.info=n
       },
       reduce(state){
           state.count=state.count-1
       }
   },
   actions:{
       add(comment,n){
           comment.commit('add',n)
       },
       reduce(comment){
           comment.commit('reduce')
       }
   }
})
export default store