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
                    <h4 @click="saveMusic(songs)">{{songs.name}} -- {{songs.artist.name}}</h4>
                </div>
                <div v-if="songs.type === 'artist'">
                    <h4 @click="saveArtist(songs.browseId)">{{songs.name}}</h4>
                </div>
                <div v-if="songs.type === 'album'">
                    <h4 @click="saveAlbum(songs)">{{songs.name}}</h4>
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
                searchOption:'search',
                // id:''
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
            this.$router.push(`/player/${currentVideoId.videoId}`)
        },
        saveArtist(artist){
            this.$store.dispatch('saveBrowseId', artist)
            this.$store.dispatch('getByBrowse', artist)
            this.$router.push(`/artistDetails/${artist}`)
        },
        saveAlbum(album){
            this.$store.dispatch('saveCurrentAlbum', album)
            this.$router.push(`/albumDetails/${album.browseId}`)
        },
        goToArtist(browseId){
            this.$router.push(`/artistDetails/${browseId}`)
        }
    }
}


</script>