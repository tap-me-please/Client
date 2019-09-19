import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    start : false,
    score : 0,
  },
  mutations: {
    PLAYGAME(state ,  payload){
      state.start = true
    },
    ADDSCORE (state ,  payload){
      state.score++;
    },
    ENDGAME (state , payload){
      state.start = false
      state.score = 0
    },
  },
  actions: {

  },
});
