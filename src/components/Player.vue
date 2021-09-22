<template>
  <div id="player">
    <img src="/antonsLjudio.png" id="logga">
    <!-- <h2>{{getComputedSong.name}}</h2> -->
    <!-- <h3>{{getComputedSong.artist.name}}</h3> -->
    <!-- <h3>{{getComputedSong.album.name}}</h3> -->
    <div id="playFunctions">
      <button @click="backward()" id="previousButton">Backward</button>
      <button @click="play()" id="playButton">Play</button>
      
      <button @click="pause()" id="pauseButton">Pause</button>
      <button @click="forward()" id="skipButton">Forward</button>
    </div>
    <div id="volumeShare">
      <input @change="volume(inputRange)" type="range" min="0" max="100" v-model="inputRange" id="volumeControl">
      <button @click="shareSong()" id="shareSong">Dela</button>
    </div>
    
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
          break
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
          break
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
    async getCurrentId(vidId){
      console.log(vidId)
      await this.$store.dispatch('getCurrentSong', vidId)
    },
    
  },
  computed:{
    getCurrentResult(){
      return this.$store.state.Result
    },
    getComputedSong(){
      // console.log(this.$store.state.song.content.length)
      // if (this.$store.state.song.content.length != 0){
      //   return this.$store.state.song.content  
      // }
      return this.$store.state.currentVideoId
    },
    
  },
}
</script>