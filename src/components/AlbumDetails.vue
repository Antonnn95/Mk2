<template>
    <body>
        <div>
            <h1>{{getAlbum.name}}</h1>
            <h2>{{getAlbum.artist}}</h2>
        </div>
    </body>
</template>

<script>
export default {
    methods:{
        saveMusic(currentVideoId){
            this.$store.dispatch('saveCurrentSong', currentVideoId)
        },
    },

    computed:{
    getAlbum(){
      return this.$store.state.currentAlbum
    }
  }
}

</script>