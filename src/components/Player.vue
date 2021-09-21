<template>
  <div>
    <!-- <h2>{{getComputedSong.name}}</h2>
    <h3>{{getComputedSong.artist.name}}</h3> -->
    <!-- <h3>{{getComputedSong.album.name}}</h3> -->
    <button @click="backward()">Backward</button>
    <button @click="play()">Play</button>
    <!-- <button @click="play('CtkZxnkbjtI')">The Black Page #2 live band</button> -->
    <button @click="pause()">Pause</button>
    <button @click="forward()">Forward</button>
    <input @change="volume(inputRange)" type="range" min="0" max="100" v-model="inputRange">
    <button @click="shareSong()">Dela</button>
    
  </div>
</template>

<script>

export default {
  created(){
    this.getCurrentId(this.vidId)
  },
  data(){
      return {
        vidId: this.$route.params.videoId,
        inputRange: 20,

      }
    },
  components:{
    
  },
  methods:{
    play(){
      // calling global variable
      console.log(this.vidId)
      window.player.loadVideoById(this.vidId)
      window.player.playVideo()
    },
    pause(){
      player.pauseVideo()
    }, 
    volume(volume){
      player.setVolume(volume),
      player.getVolume()
    },
    forward(){
      let result = this.$store.state.Result.content
      console.log(result)
      let currentSong = this.vidId
      console.log(currentSong)
      
      for (let i = 0; i < result.length; ++i){
        if (result[i].videoId === currentSong && i < result.length){
          this.getCurrentId(result[i+1].videoId)
          this.vidId = result[i+1].videoId
          console.log(this.vidId)
          this.$router.push(`/player/${result[i+1].videoId}`)
          
          this.play()
        }
      }
    },
    backward(){
      let result = this.$store.state.Result.content
      console.log(result)
      let currentSong = this.vidId
      console.log(currentSong)
      
      for (let i = 0; i < result.length; ++i){
        if (result[i].videoId === currentSong && i > 0){
          this.getCurrentId(result[i-1].videoId)
          this.vidId = result[i-1].videoId
          console.log(this.vidId)
          this.$router.push(`/player/${result[i-1].videoId}`)
          
          this.play()
        }
      }
    },
    setNewCurrent(nextSong){
      this.$store.dispatch('saveCurrentSong', nextSong)
    },
    shareSong(){
      let Id = this.vidId
      console.log(Id)
      alert(`http://localhost:3000/player/${Id}`)
      
    },
    getCurrentId(vidId){
      this.$store.dispatch('getCurrentSong', vidId)
      console.log(vidId)
    },
    
  },
  computed:{
    getCurrentResult(){
      return this.$store.state.Result
    },
    getComputedSong(){
      return this.$store.state.song.content
    },
    
  },
}
</script>