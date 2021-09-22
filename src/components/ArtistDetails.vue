<template>
    <body>
        <div id="artistDetails">
            <h1 id="artistName">{{getArtistId.name}}</h1>
            <p id="description">{{getArtistId.description}}</p>
            <p>{{getArtistId.browseId}}</p>
            <div id="songsUntAlbums">
              <div id="songs">
                <h3>Songs:</h3>
                <div v-for="song in getArtistId.products.songs.content" :key="song.name">{{song.name}},</div>
              </div>
              <div id="albums">
                <h3>Albums:</h3>
                <div v-for="album in getArtistId.products.albums.content" :key="album.name">{{album.name}},</div>
              </div>
            </div>
            <button @click="shareArtist()">Share</button>
            
        </div>
    </body>
</template>

<script>
export default {
    created(){
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