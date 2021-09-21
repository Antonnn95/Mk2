import { createStore } from "vuex" 

const store = createStore({
   state:{
      //   Results:{
      //      name:"",
      //      browserId:"",
      //      album:{
      //         name:"",
      //         browserId:""
      //      },
      //      artist:{
      //         name:"",
      //         browserId:""
      //      }
      //   }
      Result: [],
      currentVideoId: [],
      currentArtist: [],
      currentAlbum: [],
      browseId: '',
      song: []
   },
   mutations:{
      setResult(state, Result){
          state.Result = Result;
          console.log(Result)
       },
       loadData(state, data){
          state.Result = data
       },
       setCurrentSong(state, currentVideoId){
          state.currentVideoId = currentVideoId
          console.log(currentVideoId)
       },
       setCurrentArtist(state, currentArtist){
          state.currentArtist = currentArtist
          console.log(currentArtist)
       },
       setCurrentAlbum(state, currentAlbum){
          state.currentAlbum = currentAlbum
          console.log(currentAlbum)
       },
       setBrowseId(state, browseId){
          state.browseId = browseId
          console.log(browseId)
       },
       setCurrent(state, currentVideoId){
         state.song = currentVideoId
         state.currentVideoId = currentVideoId
         console.log(currentVideoId)
      },
       
       
   },
   actions:{
      async loadMusic( {commit}, searchObj){
         let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/'+searchObj.searchOption+'/'+searchObj.searchString)
         let data = await result.json()
         commit('setResult', data)
     },
     saveCurrentSong( {commit}, currentVideoId){
        commit('setCurrentSong', currentVideoId)
     },
   //   saveCurrentArtist( {commit}, currentBrowserId){
   //      commit('setCurrentArtist', currentBrowserId)
   //   },
     saveCurrentAlbum( {commit}, currentAlbum){
        commit('setCurrentAlbum', currentAlbum)
     },
     async getByBrowse( {commit}, browseId){
        let result = await fetch(`https://yt-music-api.herokuapp.com/api/yt/artist/${browseId}`)
        let data = await result.json()
        commit('setCurrentArtist', data)
     },
     saveBrowseId( {commit}, browseId){
        commit('setBrowseId', browseId)
     },
     async getCurrentSong( {commit}, vidId){
        let result = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${vidId}`)
        let data = await result.json()
        commit('setCurrent', data)
     }
   }
})

export default store