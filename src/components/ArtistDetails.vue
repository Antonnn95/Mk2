<template>
    <body>
        <div>
            <h1>{{getArtistId.name}}</h1>
            <p>{{getArtistId.description}}</p>
            <p>{{getArtistId.browseId}}</p>
            <div v-for="song in getArtistId.products.songs.content" :key="song.name">{{song.name}}</div>
            <div v-for="album in getArtistId.products.albums.content" :key="album.name">{{album.name}}</div>
            <button @click="shareArtist()">Dela</button>
            
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