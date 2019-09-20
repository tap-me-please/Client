<template>
  <div class="field">
      <audio autoplay loop>
        <source src="../audio/sound.wav" type="audio/wav" />
      </audio>
      <countdown ref="sessionTimer" :left-time="11000" @finish="finish" hidden>
        <span slot="process" slot-scope="{ timeObj }">{{ timeObj.ceil.s-1 }}</span>
        <span slot="finish">finish</span>
      </countdown>
      <h1>Your Score: {{ $store.state.score }}</h1>
      <contentz v-for="l in arr" :key="l.nameId" :nameId="l.nameId" />
  </div>
</template>

<script>
import contentz from '../componentGame/content'
import firebase from 'firebase'
import db from '@/apis/firebase'
const { Tap } = db 
export default {
    components: {
      contentz
  },
  data (){
    return {
      arr : 
      [
        {
          nameId : 1
        },
        {
          nameId : 2
        },
        {
          nameId : 3
        },
        {
          nameId : 4
        },
        {
          nameId : 5
        },
        {
           nameId : 6
        },
        {
           nameId : 7
        },
        {
           nameId : 8
        },
        {
           nameId : 9
        },
        {
           nameId : 10
        }
      ],
      marginLeft : 0,
      marginRight : 0,
      marginTop : 0,
      marginBottom : 0,
      kondisi : false
    }
  },
  methods : {
    start(){
    },
    finish(){
      this.$store.commit('ENDGAME')
      let res1 = {
        username: localStorage.getItem('username'),
        score: this.$store.state.score
      }
      console.log(res1)
      Tap.doc(this.$route.params.id).update({
        result: firebase.firestore.FieldValue.arrayUnion(res1),
      })
        .then(() => {
          this.$router.push(`/leaderboard/${this.$route.params.id}`)
        })

    }
  },
  created(){

  }

}
</script>

<style scoped>
.field {
 height: 100vh;
 width: 100%;
 background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
 background-size: 400% 400%;
 animation: gradientBG 15s ease infinite;
 position: relative;

}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
h1{
  padding-top: 50px;
}
</style>