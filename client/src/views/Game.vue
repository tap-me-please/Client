<template>
  <div class="field">
      <h1>Your Score: {{ $store.state.score }}</h1>
      <contentz v-for="l in arr" :key="l.nameId" :nameId="l.nameId" />
  </div>
</template>

<script>
import contentz from '../componentGame/content'
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
    }
  },
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
</style>