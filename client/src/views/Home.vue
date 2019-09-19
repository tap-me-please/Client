<template>
  <div class="home">
    <button @click="play">Play Game</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  methods : {
    play (){
      this.$store.commit('PLAYGAME')
      this.$router.push('/game')
      setTimeout(()=>{
        this.$store.commit('ENDGAME')
        this.$router.push('/')
      },30000)
    }
  }
};
</script>
