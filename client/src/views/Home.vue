<template>
  <div class="home">
    <audio controls id="myVideo" autoplay loop hidden>
      <source src="../assets/sound.wav" type="audio/wav" />Your browser does not support the audio element.
    </audio>
    <div class="d-flex">
    <form @submit.prevent="addUser">
      <input type="text" name="focus" v-model="username" required class="search-box" placeholder="Enter your name" />
      <button class="close-icon" type="reset"></button>
      <br>
      <br>
      <b-button type="submit" class="mx-3" variant="outline-primary">Let's go</b-button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data(){
    return{
      username:''
    }
  },
  methods:{
    addUser(){
      localStorage.setItem("username", this.username);
      this.$router.push('Room')
    }
  }
};
</script>
<style scoped>
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

.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  font-family: "Exo", sans-serif;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

.search-box,.close-icon,.search-wrapper {
	position: relative;
	padding: 10px;
}
.search-wrapper {
	width: 500px;
	margin: auto;
	margin-top: 50px;
}
.search-box {
	width: 80%;
	border: 1px solid #ccc;
  outline: 0;
  border-radius: 15px;
}
.search-box:focus {
	box-shadow: 0 0 15px 5px #b0e0ee;
	border: 2px solid #bebede;
}
.close-icon {
	border:1px solid transparent;
	background-color: transparent;
	display: inline-block;
	vertical-align: middle;
  outline: 0;
  cursor: pointer;
}
.close-icon:after {
	content: "x";
	display: block;
	width: 15px;
	height: 15px;
	position: absolute;
	background-color: #FA9595;
	z-index:1;
	right: 35px;
	top: 0;
	bottom: 0;
	margin: auto;
	padding: 2px;
	border-radius: 50%;
	text-align: center;
	color: white;
	font-weight: normal;
	font-size: 12px;
	box-shadow: 0 0 2px #E50F0F;
	cursor: pointer;
}
.search-box:not(:valid) ~ .close-icon {
	display: none;
}
</style>
