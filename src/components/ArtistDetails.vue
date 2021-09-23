<template>
    <body>
        <div id="artistDetails">
            <h1 id="artistName" ><a @click="shareArtist()" href="#">{{getArtistId.name}}</a></h1>
            <h2><button @click="shareArtist()">Share</button></h2>
            <p id="description">{{getArtistId.description}}</p>
            <p>{{getArtistId.browseId}}</p>
            <div id="songsUntAlbums" v-if="getArtistId.products">
              <div id="songs">
                <h3>Songs:</h3>
                <div v-for="song in getArtistId.products.songs.content" :key="song.name">{{song.name}},</div>
              </div>
              <div id="albums">
                <h3>Albums:</h3>
                <div v-for="album in getArtistId.products.albums.content" :key="album.name">{{album.name}},</div>
              </div>
            </div>
            
            
        </div>
    </body>
</template>

<script>
export default {
    mounted(){
    this.getCurrentId(this.browseId)
  },
  data(){
    return {
        browseId: this.$route.params.browseId,

      }
  },
  

    computed:{
    getArtistId(){
      return this.$store.state.currentArtist
    }
  },
  methods:{
    shareArtist(){
      let Id = this.browseId
      console.log(Id)
      alert(`http://localhost:3000/artistDetails/${Id}`)
    },
    getCurrentId(browseId){
      console.log(browseId)
      this.$store.dispatch('getByBrowse', browseId)
    },
  }
}

</script>