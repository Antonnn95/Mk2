<template>
  <div>
    <!-- <button @click="play('oNwOA84zAcE')">Play</button> -->
    <button @click="play(getCurrentId)">Play</button>
    <!-- <button @click="play('CtkZxnkbjtI')">The Black Page #2 live band</button> -->
    <button @click="pause()">Pause</button>
    <input @change="volume(inputRange)" type="range" min="0" max="100" v-model="inputRange">
    
  </div>
</template>

<script>
export default {
  components:{
    data(){
      return {
        Id: this.getCurrentId,
        inputRange: 20
      }
    }
  },
  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      player.pauseVideo()
    }, 
    volume(volume){
      player.setVolume(volume),
      player.getVolume()
    }
  },
  computed:{
    getCurrentId(){
      return this.$store.state.currentVideoId
    }
  }
}
</script>