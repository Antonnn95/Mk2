import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Search from '/src/components/Search.vue'
import Player from '/src/components/Player.vue'
import SongDetails from '/src/components/SongDetails.vue'
import ArtistDetails from '/src/components/ArtistDetails.vue'
import AlbumDetails from '/src/components/AlbumDetails.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
    },
    {
        path: '/player/:videoId',
        name: 'Player',
        component: Player,
    },
    {
        path: '/songDetails',
        name: 'SongDetails',
        component: SongDetails,
    },
    {
        path: '/artistDetails/:browseId',
        name: 'ArtistDetails',
        component: ArtistDetails,
    },
    {
        path: '/albumDetails/:browseId',
        name: 'AlbumDetails',
        component: AlbumDetails,
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router