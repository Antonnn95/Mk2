<template>
    <body>
        <input type="text" v-model="searchObj.searchString" placeholder="Search..." name="textBox">
        <select v-model="searchObj.searchOption" name="searchOption">
            <option :value="'search'">All</option>
            <option :value="'songs'">Song</option>
            <option :value="'artists'">Artist</option>
            <option :value="'albums'">Album</option>
        </select>
        <button @click="searchMusic(searchObj)">Search</button>
        <div>
            <!-- <div v-if="searchOption.value === 'artists'"></div> -->
            <h2>Search Result</h2>
            <div id="resultLoop" v-for="(songs, videoId) in getMusic" :key="videoId">
                <div v-if="songs.type === 'song'">
                    <router-link to="/player" @click="saveMusic(songs.videoId)">{{songs.name}}</router-link>
                </div>
                <div v-if="songs.type === 'artist'">
                    <router-link to="/artistDetails">{{songs.name}}</router-link>
                </div>
            </div>
        </div>
        
    </body>
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
        getMusic(){
            return this.$store.state.Result.content
        }
    },
    methods:{
        searchMusic(searchObj){
            this.$store.dispatch('loadMusic', searchObj)
        },
        saveMusic(currentVideoId){
            this.$store.dispatch('saveCurrentSong', currentVideoId)
        },
        play(id){
        // calling global variable
         window.player.loadVideoById(id)
         window.player.playVideo()
        },
        pause(){
         player.pauseVideo()
        }
    }
}


</script>