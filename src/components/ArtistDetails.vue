<template>
    <body>
        <div>
            <h1>{{getArtistId.Name}}</h1>
        </div>
    </body>
</template>

<script>
export default {


    computed:{
    getArtistId(){
      return this.$store.state.currentArtist.content
    }
  }
}

</script>