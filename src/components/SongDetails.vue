<template>
    <div>
        <h2>Låt Detaljer</h2>
        <div id="songLoop" v-for="(songs, videoId) in getSong" :key="videoId">
                <p>{{songs.name}}</p>
                <p>{{songs.artist}}</p>
                <p>{{songs.videoId}}</p>
                
            </div>
    </div>
</template>

<script>
import Player from "/src/components/Player.vue"
export default{
    components:{
        Player
    },
    data(){
        return {
            searchObj:{
                searchString: '',
                searchOption:'search'
            }
            
            
        }
    },
    computed:{
        getSong(){
            return this.$store.state.Result.content.videoId
        }
    },
    methods:{
        searchMusic(searchObj){
            this.$store.dispatch('loadMusic', searchObj)
        }
    }
}


</script>