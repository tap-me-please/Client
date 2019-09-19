<template>
  <div class="room">
    <div class="d-flex" id="room-input">
      <b-form-input v-model="name" placeholder="Create new room" />
      <b-button @click.prevent="createRoom" class="mx-3" variant="outline-primary">Create</b-button>
    </div>
    <div class="row mt-4">
      <div class="col" v-for="(room, index) in rooms" :key="index">
        <b-card
          :title="room.name"
          tag="article"
          style="max-width: 20rem; color: black;"
          class="mb-2"
        >
          <b-card-text>
            <i class="fas fa-users mx-3"></i>
            <span>{{ room.players.length }}</span>
          </b-card-text>

          <b-button
            @click.prevent="startGame(room.id)"
            v-if="username === room.master"
            href="#"
            variant="primary"
          >Start</b-button>
          <b-button
            @click.prevent="joinRoom(room.id)"
            v-if="username !== room.master"
            href="#"
            variant="primary"
          >Join</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/apis/firebase.js";
import firebase from "firebase/app";
const { Tap } = db;
const { admin } = db;

export default {
  data() {
    return {
      name: "",
      username: "",
      rooms: []
    };
  },
  methods: {
    createRoom() {
      Tap.add({
        master: this.username,
        name: this.name,
        players: [this.username],
        result: [],
        wePlay: false,

      }).then(doc => {
        console.log(doc.id);
      });
    },
    joinRoom(id, players) {
      Tap.doc(id).update({
        players: firebase.firestore.FieldValue.arrayUnion(this.username)
      });
      localStorage.setItem('room', id)
    },
    startGame(id) {
      this.$store.commit('PLAYGAME')
        this.$router.push('/game')
        setTimeout(()=>{
          this.$store.commit('ENDGAME')
          this.$router.push(`/leaderboard/${id}`)
          Tap.doc(id).update({
              result: firebase.firestore.FieldValue.arrayUnion(res)
          })
          localStorage.clear()
        }, 10000)

      this.$router.push(`/game/${id}`);
      Tap.doc(id).update({
        wePlay: true
      })
    }
  },
  created() {
    this.username = localStorage.getItem("username");
    Tap.onSnapshot(
      querySnapshot => {
        let allRooms = [];

        querySnapshot.forEach(doc => {
          allRooms.push({ ...doc.data(), id: doc.id });
        });

        this.rooms = allRooms;
        Tap
          .doc(localStorage.getItem("room"))
          .onSnapshot(docRef => {
            let wePlay = docRef.data().wePlay;
            if (wePlay) {
              this.$router.push(`/game/${docRef.id}`);
              console.log('masuk', docRef.id);
            }
          });
      },
      err => {
        console.log(`Encountered error: ${err}`);
      }
    );

    // Tap.onSnapshot(() => {
    // });
  }
};
</script>

<style scoped>
.room {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 0;
  width: 100%;
  font-family: "Exo", sans-serif;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
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

#room-input {
  margin-top: 50px;
}
</style>
