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
    

    computed:{
    getArtistId(){
      return this.$store.state.currentArtist
    }
  },
  methods:{
    shareArtist(){
      let Id = this.$store.state.browseId
      console.log(Id)
      alert(`http://localhost:3000/artistDetails/${Id}`)
      return `http://localhost:3000/artistDetails/${Id}`
    }
  }
}

</script>