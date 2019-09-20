<template>
  <div class="content">
    <audio v-if="nyala" autoplay>
        <source src="../audio/klik.wav" type="audio/wav" />
    </audio>
    <img src="https://www.gambaranimasi.org/data/media/194/animasi-bergerak-ikan-0004.gif" v-bind:style="{ left : marginLeft + 'px' , top : marginTop + 'px' ,  display : display }" @click="tes">
  </div>
</template>

<script>
import db from '../apis/firebase'
import firebase from 'firebase'

const {Tap} = db
export default {
  props: ["nameId", "margin"],
  data(){
      return {
        marginLeft : Math.floor( Math.random() * 1800 ),
        marginTop : Math.floor( Math.random() * 500 ),
        kondisi : false,
        display : 'block',
        nyala: false
      }
  },
  methods: {
    randomTes() {
      console.log("JALAN");
    },
    start(){
      setTimeout(()=>{
        // this.$store.commit('ADDTIME') 
        let random = Math.floor( Math.random() * 1800 )
        let random3 = Math.floor( Math.random() * 500 )
        this.marginLeft = random
        this.marginTop =  random3
      },1000)
    },
    tes (){
        this.$store.commit('ADDSCORE')
        this.display = 'none'
        
        this.nyala = true

        setTimeout(() => {
          this.nyala = false
        }, 1000)
    }
  },
  created() {
    this.start();
  },
  watch: {
    marginLeft() {
        this.start();
    }
  }
};
</script>

<style scoped>
    img {
        position: absolute;
        cursor: pointer;
        transition: 0.5s all;
    }
    .content {
        display: flex;
        flex-wrap: wrap;
    }
</style>