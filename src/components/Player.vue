<template>
  <div>
    <!-- <button @click="play('oNwOA84zAcE')">Play</button> -->
    <button @click="play(getCurrentId)">Play</button>
    <!-- <button @click="play('CtkZxnkbjtI')">The Black Page #2 live band</button> -->
    <button @click="pause()">Pause</button>
    
  </div>
</template>

<script>
export default {
  components:{
    data(){
      return {
        Id: this.getCurrentId
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
  },
  computed:{
    getCurrentId(){
      return this.$store.state.currentVideoId
    }
  }
}
</script>